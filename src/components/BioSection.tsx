const bioImage = "/bio.png";

const bioText =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

function CornerBrackets({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-stretch gap-3">
      {/* Left column: top-left + bottom-left brackets */}
      <div className="flex flex-col justify-between shrink-0 w-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 0 L0 0 L0 14" stroke="#1f1f1f" strokeWidth="1" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 16 L0 16 L0 2" stroke="#1f1f1f" strokeWidth="1" />
        </svg>
      </div>

      {children}

      {/* Right column: top-right + bottom-right brackets */}
      <div className="flex flex-col justify-between items-end shrink-0 w-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 0 L16 0 L16 14" stroke="#1f1f1f" strokeWidth="1" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 16 L16 16 L16 2" stroke="#1f1f1f" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

export default function BioSection() {
  return (
    <section className="bg-white overflow-x-hidden px-4 md:px-8 py-12 md:py-20">

      {/* ── Mobile layout ─────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-5">
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
          002
        </p>
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
          [ About ]
        </p>
        <CornerBrackets>
          <p className="flex-1 py-3 font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
            {bioText}
          </p>
        </CornerBrackets>
        <div className="w-full overflow-hidden" style={{ aspectRatio: "422 / 594" }}>
          <img src={bioImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Desktop layout ────────────────────────────── */}
      <div className="hidden md:flex items-start justify-between">
        {/* Far-left label */}
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] shrink-0 whitespace-nowrap">
          [ About ]
        </p>

        {/* Right content: text box (bottom-aligned) + 002 + image */}
        <div className="flex items-end gap-8 w-[983px]">
          {/* Text box — flex-1 so it grows to fill space left of image column */}
          <div className="flex-1 min-w-0">
            <CornerBrackets>
              <p className="flex-1 min-w-0 py-3 font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                {bioText}
              </p>
            </CornerBrackets>
          </div>

          {/* 002 label beside portrait image, both top-aligned */}
          <div className="flex items-start gap-6 shrink-0">
            <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
              002
            </p>
            <div className="w-[436px] h-[614px] overflow-hidden">
              <img src={bioImage} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
