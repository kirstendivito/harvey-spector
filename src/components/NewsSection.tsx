const imgNews1 = "https://www.figma.com/api/mcp/asset/c48065db-3ad5-4dcd-99c2-4f7330e1a292";
const imgNews2 = "https://www.figma.com/api/mcp/asset/a42942a2-f82b-4b49-bef3-1089b6d01ca9";
const imgNews3 = "https://www.figma.com/api/mcp/asset/04059587-3c8f-40c7-83ad-c3fa68e78d72";

type NewsItem = {
  image: string;
  text: string;
};

const newsItems: NewsItem[] = [
  {
    image: imgNews1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: imgNews2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: imgNews3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function ReadMoreLink() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 border-b border-black pb-[4px] self-start"
    >
      <span className="font-[family-name:var(--font-inter)] font-medium text-[14px] text-black tracking-[-0.04em] leading-normal whitespace-nowrap">
        Read more
      </span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
        <path
          d="M4 14L14 4M14 4H6M14 4V12"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-[#f3f3f3] overflow-hidden">

      {/* ── Mobile ─────────────────────────────────── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p className="font-[family-name:var(--font-inter)] font-light text-[32px] text-black uppercase leading-[0.86] tracking-[-0.08em]">
          Keep up with my latest news &amp; achievements
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {newsItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 shrink-0 w-[300px] snap-start">
              <div className="relative h-[398px] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />
              </div>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                {item.text}
              </p>
              <ReadMoreLink />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop ─────────────────────────────────── */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px] gap-8">

        {/* Rotated heading */}
        <div className="flex h-[706px] w-[110px] items-center justify-center shrink-0">
          <div className="-rotate-90">
            <div className="font-[family-name:var(--font-inter)] font-light text-[64px] text-black uppercase leading-[0.86] tracking-[-0.08em] whitespace-nowrap">
              <p>Keep up with my latest</p>
              <p>news &amp; achievements</p>
            </div>
          </div>
        </div>

        {/* 3 cards with thin vertical dividers */}
        <div className="flex-1 min-w-0 flex items-start divide-x divide-[#ddd]">
          <div className="flex flex-col gap-4 flex-1 min-w-0 pr-8">
            <div className="relative h-[469px] overflow-hidden">
              <img
                src={newsItems[0].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              />
            </div>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
              {newsItems[0].text}
            </p>
            <ReadMoreLink />
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-0 px-8 pt-[120px]">
            <div className="relative h-[469px] overflow-hidden">
              <img
                src={newsItems[1].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              />
            </div>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
              {newsItems[1].text}
            </p>
            <ReadMoreLink />
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-0 pl-8">
            <div className="relative h-[469px] overflow-hidden">
              <img
                src={newsItems[2].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              />
            </div>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
              {newsItems[2].text}
            </p>
            <ReadMoreLink />
          </div>
        </div>

      </div>

    </section>
  );
}
