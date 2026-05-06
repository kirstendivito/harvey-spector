export default function FooterSection() {
  return (
    <footer className="bg-black px-4 md:px-8 pt-12 overflow-hidden">

      {/* ── Top: CTA + socials ───────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0 pb-12 md:pb-[48px]">

        {/* Left: headline + button */}
        <div className="flex flex-col gap-3 shrink-0">
          <p className="font-[family-name:var(--font-inter)] font-light italic text-[24px] text-white uppercase leading-[1.1] tracking-[-0.04em]">
            Have a{" "}
            <span className="font-black not-italic">project</span>
            {" "}in mind?
          </p>
          <button className="self-start border border-white text-white font-[family-name:var(--font-inter)] font-medium text-[14px] tracking-[-0.04em] leading-normal px-4 py-3 rounded-full">
            Let's talk
          </button>
        </div>

        {/* Center + right: socials — stacked on mobile, two columns on desktop */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-[120px]">
          <div className="flex flex-col gap-2 md:text-center">
            <a href="#" className="font-[family-name:var(--font-inter)] font-normal text-[18px] text-white uppercase leading-[1.1] tracking-[-0.04em] hover:opacity-70 transition-opacity">
              Facebook
            </a>
            <a href="#" className="font-[family-name:var(--font-inter)] font-normal text-[18px] text-white uppercase leading-[1.1] tracking-[-0.04em] hover:opacity-70 transition-opacity">
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-2 md:text-right">
            <a href="#" className="font-[family-name:var(--font-inter)] font-normal text-[18px] text-white uppercase leading-[1.1] tracking-[-0.04em] hover:opacity-70 transition-opacity">
              x.com
            </a>
            <a href="#" className="font-[family-name:var(--font-inter)] font-normal text-[18px] text-white uppercase leading-[1.1] tracking-[-0.04em] hover:opacity-70 transition-opacity">
              Linkedin
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20" />

      {/* ── Bottom: name + legal ───────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between pt-8 md:pt-0">

        {/* Large studio name */}
        <div className="overflow-hidden">

          {/* [ Coded By Claude ] label */}
          <p className="font-mono text-[10px] text-white uppercase leading-[1.1] mb-3 md:mb-0 md:hidden">
            [ Coded By Claude ]
          </p>

          <div className="flex items-end gap-4">
            {/* Desktop: rotated label beside name */}
            <div className="hidden md:flex h-[219px] w-[15px] items-center justify-center shrink-0 mb-0">
              <div className="-rotate-90">
                <span className="font-mono text-[10px] text-white uppercase leading-[1.1] whitespace-nowrap">
                  [ Coded By Claude ]
                </span>
              </div>
            </div>

            <p className="font-[family-name:var(--font-inter)] font-semibold text-[91px] md:text-[290px] text-white capitalize leading-[0.8] tracking-[-0.06em] whitespace-nowrap">
              H.Studio
            </p>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex gap-8 items-center pb-8 md:pb-8 pt-4 md:pt-0 shrink-0 self-start md:self-end">
          <a href="#" className="font-[family-name:var(--font-inter)] font-normal text-[12px] text-white uppercase leading-[1.1] tracking-[-0.04em] underline">
            licences
          </a>
          <a href="#" className="font-[family-name:var(--font-inter)] font-normal text-[12px] text-white uppercase leading-[1.1] tracking-[-0.04em] underline">
            Privacy policy
          </a>
        </div>

      </div>

    </footer>
  );
}
