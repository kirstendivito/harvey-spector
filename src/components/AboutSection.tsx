export default function AboutSection() {
  return (
    <section className="bg-white overflow-x-hidden px-4 md:px-8 py-12 md:py-[120px]">
      <div className="flex flex-col gap-6">

        {/* Label + divider */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] text-right">
            [ 8+ years in industry ]
          </p>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-2 items-center md:items-start">

          {/* 001 — mobile: above first line, centered */}
          <p className="md:hidden font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] text-center mb-1">
            001
          </p>

          {/* Line 1: A CREATIVE DIRECTOR / + 001 (desktop) */}
          <div className="flex items-start gap-3 uppercase">
            <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-black leading-[0.84] tracking-[-0.08em] whitespace-pre">
              {`A creative director   /`}
            </span>
            <span className="hidden md:block font-mono text-[14px] text-[#1f1f1f] leading-[1.1] uppercase self-start mt-2">
              001
            </span>
          </div>

          {/* Line 2: PHOTOGRAPHER — desktop indent 214px each side */}
          <div className="w-full flex justify-center md:justify-start md:pl-[214px]">
            <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-black leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap">
              Photographer
            </span>
          </div>

          {/* Line 3: BORN & RAISED — desktop indent 610px */}
          <div className="w-full flex justify-center md:justify-start md:pl-[610px]">
            <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-black leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap">
              Born{" "}
              <span
                className="font-[family-name:var(--font-playfair)] font-normal italic normal-case"
                style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}
              >
                {"&"}
              </span>
              {" "}raised
            </span>
          </div>

          {/* Line 4: ON THE SOUTH SIDE — no indent */}
          <div className="w-full flex justify-center md:justify-start">
            <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-black leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap">
              On the south side
            </span>
          </div>

          {/* Line 5: OF CHICAGO. — desktop indent 606px + inline label */}
          <div className="flex flex-col items-center md:flex-row md:items-start md:pl-[606px] md:gap-3">
            <span className="font-[family-name:var(--font-inter)] font-light text-[32px] md:text-[96px] text-black leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap">
              Of chicago.
            </span>
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] mt-3 md:mt-0 md:self-start md:pt-3">
              [ creative freelancer ]
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
