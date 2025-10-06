const sectorCards = [
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-61.svg",
    title: "Banking &\nReal Estate",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-62.svg",
    title: "Technology &\nTelecom",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-63.svg",
    title: "Defence &\nManufacturing",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-64.svg",
    title: "Construction &\nInfrastructure",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-64-1.svg",
    title: "Retail &\nHospitality",
  },
];

const Card = ({ image, title }) => {
  return (
    <div className="relative w-[400px] h-[373px] shrink-0 rounded-[50px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt={title.replace("\n", " ")}
        src={image}
      />
      <div className="absolute inset-0 rounded-[50px] border border-solid border-black bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute bottom-7 left-0 right-0 px-6 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-pre-line">
        {title}
      </div>
    </div>
  );
};

const Sectors = () => {
  return (
    <div
      className="pt-40 relative"
    >

      <img
        className="absolute rotate-180 -top-20 opacity-75 left-0 w-screen"
        alt="Group"
        src="/Group.png"
      />
      <h2 className="text-6xl bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center">Sectors</h2>

      {/* Marquee container */}
      <div className="relative mt-20 overflow-hidden px-[100px]">
        <div className="marquee__track flex gap-5" style={{ '--duration': '30s' }}>
          {sectorCards.map((item, index) => (
            <Card key={`a-${index}`} image={item.image} title={item.title} />
          ))}
          {sectorCards.map((item, index) => (
            <Card key={`b-${index}`} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sectors