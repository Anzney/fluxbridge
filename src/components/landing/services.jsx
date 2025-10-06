"use client";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Executive Search/ Recruitment",
    description: "Our executive search and recruitment services are designed to identify and attract top-tier talent for senior leadership positions across various industries. We understand that finding the right executive is crucial for organizational success, which is why we employ a comprehensive approach that combines deep market knowledge, extensive networks, and rigorous assessment methodologies. Our team of experienced consultants works closely with clients to understand their unique organizational culture, strategic objectives, and specific leadership requirements. We conduct thorough market mapping exercises to identify potential candidates, both active and passive, ensuring we present only the most qualified individuals. Our process includes detailed competency assessments, cultural fit evaluations, and comprehensive reference checks. We also provide ongoing support throughout the onboarding process to ensure successful integration of new executives into their roles. With a proven track record of successful placements across C-suite positions, board appointments, and senior management roles, we have established ourselves as a trusted partner for organizations seeking exceptional leadership talent. Our global reach and local expertise enable us to serve clients across diverse markets while maintaining the highest standards of confidentiality and professionalism.",
    hasImage: true
  },
  {
    id: "02", 
    title: "Structure & Governance",
    description: "Organizational structure and governance form the backbone of any successful enterprise, and our specialized services help organizations design, implement, and optimize these critical frameworks. We work with leadership teams to assess current organizational structures, identify inefficiencies, and develop streamlined hierarchies that promote accountability, clear communication, and effective decision-making. Our governance consulting encompasses board effectiveness, committee structures, risk management frameworks, and compliance protocols. We understand that modern organizations face complex challenges requiring adaptive structures that can respond quickly to market changes while maintaining operational excellence. Our approach involves comprehensive organizational assessments, stakeholder interviews, and benchmarking against industry best practices. We help establish clear roles and responsibilities, define reporting relationships, and create governance policies that align with regulatory requirements and organizational values. Additionally, we provide guidance on succession planning, board composition, and director development programs. Our expertise extends to various governance models, including corporate governance for public companies, non-profit governance structures, and family business governance frameworks. We ensure that the governance structures we design not only meet current needs but are also scalable and flexible enough to support future growth and evolution.",
  },
  {
    id: "03",
    title: "Culture Development", 
    description: "Organizational culture is the invisible force that drives employee engagement, performance, and business results. Our culture development services help organizations build, transform, and sustain cultures that align with their strategic objectives and values. We begin with comprehensive culture assessments that examine current cultural dynamics, employee perceptions, leadership behaviors, and organizational practices. Through surveys, focus groups, and observational studies, we identify cultural strengths to leverage and areas requiring transformation. Our approach recognizes that culture change is a journey that requires sustained commitment and strategic intervention at multiple levels. We work with leadership teams to define desired cultural attributes, develop culture change roadmaps, and implement initiatives that reinforce new behaviors and mindsets. Our services include values definition workshops, leadership alignment sessions, communication strategy development, and culture measurement frameworks. We understand that successful culture transformation requires more than just mission statements and posters on walls – it demands systematic changes in hiring practices, performance management systems, reward structures, and leadership development programs. We also provide culture integration support for mergers and acquisitions, helping organizations navigate the complex process of blending different cultural backgrounds. Our proven methodologies have helped organizations across various industries create cultures that drive innovation, improve employee satisfaction, and deliver superior business performance.",
  },
  {
    id: "04",
    title: "HR Strategy Services",
    description: "Strategic human resources management is essential for organizations seeking to maximize their human capital potential and achieve sustainable competitive advantage. Our HR strategy services provide comprehensive support for developing and implementing people strategies that align with business objectives and drive organizational success. We work closely with executive teams to assess current HR capabilities, identify strategic priorities, and develop integrated HR strategies that support business growth and transformation. Our approach encompasses all aspects of human capital management, including workforce planning, talent management, employee engagement, compensation and benefits design, and HR technology optimization. We conduct thorough HR audits to evaluate existing policies, processes, and systems, identifying opportunities for improvement and modernization. Our team helps organizations develop HR operating models that balance efficiency with employee experience, ensuring that HR functions add strategic value while maintaining operational excellence. We provide guidance on HR organizational design, role definitions, and capability development for HR teams. Additionally, we support the development of HR metrics and analytics frameworks that enable data-driven decision making and demonstrate HR's contribution to business outcomes. Our services also include change management support for HR transformation initiatives, helping organizations navigate the transition to new HR models and technologies. With deep expertise across various industries and organizational sizes, we tailor our approach to meet each client's unique needs and circumstances.",
  },
  {
    id: "05",
    title: "Job Evaluation & Grading Structure",
    description: "Fair and transparent job evaluation and grading structures are fundamental to creating equitable compensation systems and maintaining employee trust and engagement. Our specialized services help organizations develop, implement, and maintain job evaluation frameworks that ensure internal equity, external competitiveness, and regulatory compliance. We employ proven methodologies such as point-factor systems, job ranking, and market-based approaches to assess job worth and establish appropriate grading structures. Our process begins with comprehensive job analysis, involving detailed job descriptions, competency requirements, and accountability assessments. We work with subject matter experts and job incumbents to ensure accurate understanding of role requirements and contribution levels. Our team then applies rigorous evaluation criteria to determine relative job values and establish grade boundaries that reflect organizational hierarchy and market realities. We provide guidance on grade progression criteria, salary range development, and pay progression policies that support career development and retention objectives. Our services also include regular grade structure reviews and updates to ensure continued relevance and competitiveness. We understand the importance of transparent communication and provide support for employee communication strategies that explain the rationale behind grading decisions. Additionally, we help organizations address grade-related challenges such as grade inflation, compression issues, and pay equity concerns. Our expertise extends to various job evaluation systems and we can customize approaches to fit different organizational cultures and industry requirements.",
  },
  {
    id: "06",
    title: "Performance Management",
    description: "Effective performance management systems are crucial for driving employee engagement, development, and organizational results. Our performance management services help organizations design and implement comprehensive systems that align individual performance with business objectives while fostering continuous improvement and career growth. We understand that traditional annual review processes often fail to meet the needs of modern organizations and employees, which is why we focus on creating dynamic, ongoing performance management approaches. Our services include performance framework design, goal-setting methodologies, feedback systems, and performance measurement tools. We work with organizations to establish clear performance standards, competency models, and success metrics that provide employees with clarity about expectations and career progression opportunities. Our approach emphasizes the importance of regular coaching conversations, real-time feedback, and development-focused discussions that support employee growth and engagement. We provide training and support for managers to enhance their performance management skills, including coaching techniques, difficult conversation management, and performance improvement planning. Our systems are designed to identify high performers, support struggling employees, and create fair and transparent processes for performance-related decisions. We also help organizations integrate performance management with other HR processes such as compensation, promotion, and succession planning. Additionally, we provide guidance on performance management technology solutions and analytics that enable organizations to track trends, identify patterns, and make data-driven improvements to their performance management approaches.",
  },
  {
    id: "07",
    title: "Learning & Development",
    description: "Continuous learning and development are essential for maintaining competitive advantage and ensuring organizational agility in today's rapidly changing business environment. Our learning and development services help organizations create comprehensive learning ecosystems that support employee growth, skill development, and career advancement while addressing current and future business needs. We begin with thorough learning needs assessments that identify skill gaps, development priorities, and learning preferences across different employee segments. Our approach encompasses various learning modalities including formal training programs, on-the-job learning, mentoring, coaching, and digital learning platforms. We design customized learning curricula that address technical skills, leadership capabilities, and soft skills development. Our team has expertise in adult learning principles, instructional design, and learning technology integration. We help organizations establish learning governance structures, including learning councils, curriculum committees, and evaluation frameworks that ensure learning initiatives deliver measurable business impact. Our services include leadership development programs, high-potential talent development, new employee onboarding, and specialized technical training. We also provide guidance on learning technology selection and implementation, including learning management systems, mobile learning platforms, and virtual reality training solutions. Additionally, we support the development of internal learning capabilities, including training trainer programs and learning content creation. Our measurement and evaluation frameworks help organizations track learning effectiveness, return on investment, and the impact of learning initiatives on business performance and employee engagement.",
  },
  {
    id: "08",
    title: "Talent Acquisition",
    description: "Strategic talent acquisition is critical for building high-performing teams and maintaining competitive advantage in today's talent-scarce environment. Our talent acquisition services provide end-to-end support for attracting, assessing, and securing top talent across all organizational levels and functions. We help organizations develop talent acquisition strategies that align with business objectives, brand positioning, and growth plans. Our approach begins with comprehensive talent market analysis, competitor intelligence, and talent pipeline assessment to understand the competitive landscape and identify optimal sourcing strategies. We work with clients to enhance their employer brand, develop compelling value propositions, and create candidate experiences that differentiate them in the market. Our services include recruitment process optimization, interviewing best practices, assessment center design, and selection methodology development. We provide guidance on recruitment technology selection and implementation, including applicant tracking systems, candidate relationship management platforms, and AI-powered screening tools. Our team has expertise in various recruitment approaches including direct sourcing, social recruiting, campus recruitment, and diversity hiring initiatives. We also support the development of internal recruitment capabilities through recruiter training, hiring manager development, and recruitment metrics and analytics implementation. Additionally, we help organizations navigate complex hiring challenges such as skills shortages, remote hiring, and international recruitment. Our focus on candidate experience and employer branding ensures that organizations not only attract top talent but also build positive reputations that support long-term talent acquisition success.",
  },
  {
    id: "09",
    title: "Leadership Development",
    description: "Exceptional leadership is the cornerstone of organizational success, and our leadership development services are designed to identify, develop, and retain leaders who can drive business results and inspire high performance. We offer comprehensive leadership development solutions that address the full spectrum of leadership challenges, from emerging leaders to senior executives. Our approach is grounded in leadership research and best practices, customized to reflect each organization's unique culture, challenges, and strategic priorities. We begin with thorough leadership assessments that evaluate current leadership capabilities, identify development needs, and establish baseline measurements for program effectiveness. Our development programs combine multiple learning modalities including executive coaching, action learning projects, 360-degree feedback, mentoring relationships, and experiential learning opportunities. We design leadership curricula that address critical competencies such as strategic thinking, emotional intelligence, change management, team building, and innovation leadership. Our services include high-potential identification and development, succession planning support, and leadership pipeline management. We provide specialized programs for different leadership levels, including first-time managers, mid-level leaders, and senior executives. Our executive coaching services offer personalized development support for individual leaders facing specific challenges or transitions. Additionally, we help organizations create leadership cultures that support continuous development and knowledge sharing. Our measurement and evaluation frameworks track leadership development impact on business results, employee engagement, and organizational culture.",
  },
  {
    id: "10",
    title: "Digital Transformation",
    description: "Digital transformation in human resources is reshaping how organizations manage their workforce, deliver employee experiences, and make people-related decisions. Our digital transformation services help organizations leverage technology to modernize HR processes, enhance employee engagement, and drive business value through data-driven insights. We provide comprehensive support for HR technology strategy development, system selection and implementation, and change management for digital initiatives. Our approach begins with current state assessments of HR technology landscape, process efficiency analysis, and user experience evaluation. We help organizations develop digital HR roadmaps that prioritize initiatives based on business impact, technical feasibility, and resource requirements. Our services include HR information system implementation, employee self-service portal development, mobile HR application design, and cloud migration support. We have expertise in various HR technology solutions including core HRIS platforms, talent management suites, workforce analytics tools, and artificial intelligence applications. Our team provides guidance on data governance, privacy compliance, and security considerations for HR technology implementations. We also support the development of HR analytics capabilities, including dashboard design, predictive modeling, and workforce planning tools that enable data-driven decision making. Additionally, we help organizations navigate the cultural and organizational changes associated with digital transformation, including training programs, communication strategies, and adoption measurement frameworks. Our focus on user experience design ensures that digital solutions enhance rather than complicate the employee experience while delivering measurable improvements in HR efficiency and effectiveness.",
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="w-full relative">
      
      <div className="relative z-10 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl lg:text-5xl font-thin text-white mb-4">
              Our Human Capital Services
            </h2>
          </motion.div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`group relative border-b transition-all duration-500 overflow-hidden ${
                  expandedService === service.id 
                    ? 'border-blue-400/70' 
                    : 'border-white/20 hover:border-blue-400/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Header Section */}
                <div className="flex items-center justify-between py-6 px-4 transition-all duration-500">
                  <div className="flex items-center space-x-8 flex-1">
                    {/* Service Number */}
                    <div className={`text-2xl font-light transition-colors duration-300 min-w-[60px] ${
                      expandedService === service.id
                        ? 'text-blue-400'
                        : 'text-white/60 group-hover:text-blue-400'
                    }`}>
                      {service.id}
                    </div>
                    
                    {/* Service Title */}
                    <div className="flex-1">
                      <h3 className={`text-xl lg:text-2xl font-light transition-colors duration-300 ${
                        expandedService === service.id
                          ? 'text-blue-400'
                          : 'text-white group-hover:text-blue-400'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div 
                    className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                      expandedService === service.id
                        ? 'border-blue-400 bg-blue-400/20'
                        : 'border-white/30 group-hover:border-blue-400 group-hover:bg-blue-400/10'
                    }`}
                    animate={{ 
                      rotate: expandedService === service.id ? -45 : 0 
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ArrowRight className={`transition-colors duration-300 ${
                      expandedService === service.id ? 'text-blue-400' : 'group-hover:text-blue-500'
                    }`}/>
                  </motion.div>
                </div>

                {/* Expandable Description Section */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedService === service.id ? "auto" : 0,
                    opacity: expandedService === service.id ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1],
                    opacity: { duration: 0.3, delay: expandedService === service.id ? 0.2 : 0 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-8">
                    <div className="flex items-start space-x-8">
                      {/* Empty space for alignment with number */}
                      <div className="min-w-[60px]"></div>
                      
                      {/* Description Content */}
                      <motion.div 
                        className="flex-1"
                        initial={false}
                        animate={{
                          y: expandedService === service.id ? 0 : 20,
                          opacity: expandedService === service.id ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.4, 
                          delay: expandedService === service.id ? 0.3 : 0,
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                      >
                        <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                {/* Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent transition-opacity duration-300 pointer-events-none ${
                  expandedService === service.id
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

