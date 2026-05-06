import type { NewsPostItem } from "@/sanity/lib/types";

type NewsItem = NewsPostItem & { image?: string; text?: string };

const defaultNewsItems: NewsItem[] = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
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

function NewsCard({ item }: { item: NewsItem }) {
  const imageSrc = item.imageUrl ?? item.image;
  const text = item.excerpt ?? item.text ?? "";
  return { imageSrc, text };
}

export default function NewsSection({ newsPosts }: { newsPosts?: NewsPostItem[] | null }) {

  const newsItems: NewsItem[] = newsPosts && newsPosts.length > 0 ? newsPosts : defaultNewsItems;

  return (
    <section className="bg-[#f3f3f3] overflow-hidden">

      {/* ── Mobile ─────────────────────────────────── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p className="font-[family-name:var(--font-inter)] font-light text-[32px] text-black uppercase leading-[0.86] tracking-[-0.08em]">
          Keep up with my latest news &amp; achievements
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {newsItems.map((item, i) => {
            const { imageSrc, text } = NewsCard({ item });
            return (
              <div key={item._id ?? i} className="flex flex-col gap-4 shrink-0 w-[300px] snap-start">
                {imageSrc && (
                  <div className="relative h-[398px] overflow-hidden">
                    <img
                      src={imageSrc}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    />
                  </div>
                )}
                <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                  {text}
                </p>
                <ReadMoreLink />
              </div>
            );
          })}
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
          {[0, 1, 2].map((idx) => {
            const item = newsItems[idx];
            if (!item) return null;
            const { imageSrc, text } = NewsCard({ item });
            return (
              <div
                key={item._id ?? idx}
                className={`flex flex-col gap-4 flex-1 min-w-0 ${idx === 0 ? "pr-8" : idx === 1 ? "px-8 pt-[120px]" : "pl-8"}`}
              >
                {imageSrc && (
                  <div className="relative h-[469px] overflow-hidden">
                    <img
                      src={imageSrc}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    />
                  </div>
                )}
                <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                  {text}
                </p>
                <ReadMoreLink />
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
