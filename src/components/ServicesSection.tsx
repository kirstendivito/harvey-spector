const services = [
  {
    number: "[ 1 ]",
    name: "Brand Discovery",
    description:
      "We begin with a deep dive into your brand's identity, values, and vision. Through research and strategy sessions, we uncover what makes you distinct and build the foundation for everything that follows.",
    image: "/service-1.png",
  },
  {
    number: "[ 2 ]",
    name: "Web Design & Dev",
    description:
      "From concept to code, we craft high-performance websites that feel as good as they look. Every interaction is intentional, every pixel considered — built to convert and built to last.",
    image: "/service-2.png",
  },
  {
    number: "[ 3 ]",
    name: "Marketing",
    description:
      "Strategic campaigns that cut through the noise. We create content, manage channels, and tell the stories that turn audiences into loyal communities and communities into clients.",
    image: "/service-3.png",
  },
  {
    number: "[ 4 ]",
    name: "Photography",
    description:
      "Imagery that stops the scroll. Whether it's editorial portraiture, brand campaigns, or product work, every shot is crafted to communicate your story without a single word.",
    image: "/service-4.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#1f1f1f] overflow-x-hidden px-4 md:px-8 py-12 md:py-20">
      <div className="flex flex-col gap-12 md:gap-16">

        {/* Header row */}
        <div className="flex items-end justify-between">
          {/* Left: label above [4] */}
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
              [ Services ]
            </p>
            <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-white leading-[0.84] tracking-[-0.08em] uppercase">
              [4]
            </span>
          </div>

          {/* Right: Deliverables */}
          <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-white leading-[0.84] tracking-[-0.08em] uppercase">
            Deliverables
          </span>
        </div>

        {/* Service items */}
        <div className="flex flex-col gap-12 md:gap-[48px]">
          {services.map((service) => (
            <div key={service.number} className="flex flex-col gap-4">
              {/* Number + divider */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[14px] text-white uppercase leading-[1.1] shrink-0">
                  {service.number}
                </span>
                <div className="flex-1 h-px bg-white opacity-20" />
              </div>

              {/* Content row */}
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                {/* Service name */}
                <span className="font-[family-name:var(--font-inter)] font-bold italic text-[36px] text-white uppercase leading-[1] tracking-[-0.04em]">
                  {service.name}
                </span>

                {/* Description + image */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-white leading-[1.3] tracking-[-0.04em] md:w-[393px]">
                    {service.description}
                  </p>
                  <div className="w-[151px] h-[151px] overflow-hidden shrink-0">
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-cover pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
