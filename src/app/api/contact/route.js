import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "FluxBridge Website <website@fluxbridge360.com>",
      to: ["a.mathew@fluxbridge360.com"],
      replyTo: email,
      subject: `New Fluxbridge Website Enquiry - ${name}`,
      html: `
        <h2>New FluxBridge Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}