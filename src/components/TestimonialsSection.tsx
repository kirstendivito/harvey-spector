import type { TestimonialItem } from "@/sanity/lib/types";

type LocalTestimonial = TestimonialItem & { logo?: string; name?: string };

const defaultTestimonials: LocalTestimonial[] = [
  {
    logo: "/testimonial-logo-1.png",
    logoHeight: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
  },
  {
    logo: "/testimonial-logo-2.png",
    logoHeight: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
  },
  {
    logo: "/testimonial-logo-3.png",
    logoHeight: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
  },
  {
    logo: "/testimonial-logo-4.png",
    logoHeight: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
  },
];

function TestimonialCard({ t, rotation }: { t: LocalTestimonial; rotation: string }) {
  const logoSrc = t.logoUrl ?? t.logo ?? "";
  const displayName = t.clientName ?? t.name ?? "";
  return (
    <div
      style={{ transform: `rotate(${rotation})` }}
      className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] w-[280px] md:w-[353px] shrink-0"
    >
      <img
        src={logoSrc}
        alt=""
        className="w-auto block self-start"
        style={{ height: t.logoHeight }}
      />
      <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] md:text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
        {t.quote}
      </p>
      <p className="font-[family-name:var(--font-inter)] font-black text-[14px] md:text-[16px] text-black uppercase leading-[1.1] tracking-[-0.04em]">
        {displayName}
      </p>
    </div>
  );
}

export default function TestimonialsSection({ testimonials: sanityTestimonials }: { testimonials?: TestimonialItem[] | null }) {
  const testimonials: LocalTestimonial[] = sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : defaultTestimonials;
  return (
    <section className="bg-white overflow-hidden">

      {/* ── Mobile ─────────────────────────────────── */}
      <div className="md:hidden px-4 py-12 flex flex-col gap-8">
        <p className="font-[family-name:var(--font-inter)] font-medium text-[56px] text-black capitalize leading-[0.8] tracking-[-0.07em] text-center">
          Testimonials
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          <div className="snap-start">
            <TestimonialCard t={testimonials[0]} rotation="-3.5deg" />
          </div>
          <div className="snap-start">
            <TestimonialCard t={testimonials[3]} rotation="2deg" />
          </div>
        </div>
      </div>

      {/* ── Desktop ─────────────────────────────────── */}
      <div className="hidden md:block relative h-[987px] overflow-hidden">
        {/* Large heading — centered vertically */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <p className="font-[family-name:var(--font-inter)] font-medium text-[198px] text-black capitalize leading-[1.1] tracking-[-0.07em] text-center w-full">
            Testimonials
          </p>
        </div>

        {/* Cards */}
        <div style={{ position: "absolute", left: "7.1%", top: "142px" }}>
          <TestimonialCard t={testimonials[0]} rotation="-6.85deg" />
        </div>
        <div style={{ position: "absolute", left: "46.9%", top: "272px" }}>
          <TestimonialCard t={testimonials[1]} rotation="2.9deg" />
        </div>
        <div style={{ position: "absolute", left: "21.2%", top: "553px" }}>
          <TestimonialCard t={testimonials[2]} rotation="2.23deg" />
        </div>
        <div style={{ position: "absolute", left: "68.5%", top: "546px" }}>
          <TestimonialCard t={testimonials[3]} rotation="-4.15deg" />
        </div>
      </div>

    </section>
  );
}
