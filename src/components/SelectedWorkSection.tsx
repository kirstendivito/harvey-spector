const imgSurfersParadise = "/work-surfers-paradise.png";
const imgCyberpunkCaffe = "/work-cyberpunk-caffe.png";
const imgAgency976 = "/work-agency-976.png";
const imgMinimalPlayground = "/work-minimal-playground.png";

type Project = {
  name: string;
  tags: string[];
  image: string;
};

const projects: Project[] = [
  { name: "Surfers Paradise", tags: ["Social Media", "Photography"], image: imgSurfersParadise },
  { name: "Cyberpunk Caffe", tags: ["Social Media", "Photography"], image: imgCyberpunkCaffe },
  { name: "Agency 976", tags: ["Social Media", "Photography"], image: imgAgency976 },
  { name: "Minimal Playground", tags: ["Social Media", "Photography"], image: imgMinimalPlayground },
];

function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <circle cx="16" cy="16" r="15.5" stroke="#1f1f1f" />
      <path d="M11 21L21 11M21 11H13M21 11V19" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project, containerClass }: { project: Project; containerClass: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className={`relative overflow-hidden ${containerClass}`}>
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full font-[family-name:var(--font-inter)] font-medium text-[14px] text-[#111] tracking-[-0.04em] whitespace-nowrap leading-normal"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-inter)] font-black text-[24px] md:text-[36px] text-black uppercase leading-[1.1] tracking-[-0.04em]">
          {project.name}
        </span>
        <ArrowIcon />
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="flex items-stretch gap-3">
      {/* Left brackets */}
      <div className="flex flex-col justify-between shrink-0 w-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 0 L0 0 L0 14" stroke="#1f1f1f" strokeWidth="1" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 16 L0 16 L0 2" stroke="#1f1f1f" strokeWidth="1" />
        </svg>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[10px] justify-center py-3">
        <p className="font-[family-name:var(--font-inter)] italic font-normal text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start bg-black text-white font-[family-name:var(--font-inter)] font-medium text-[14px] tracking-[-0.04em] leading-normal px-4 py-3 rounded-full">
          Let's talk
        </button>
      </div>
      {/* Right brackets */}
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

export default function SelectedWorkSection() {
  return (
    <section className="bg-white overflow-x-hidden px-4 md:px-8 py-12 md:py-[80px]">
      <div className="flex flex-col gap-8 md:gap-[61px]">

        {/* ── Mobile header ─────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-4 uppercase">
          <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">[ portfolio ]</p>
          <div className="flex items-start justify-between">
            <div className="font-[family-name:var(--font-inter)] font-light text-[32px] text-black leading-[0.86] tracking-[-0.08em]">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">004</span>
          </div>
        </div>

        {/* ── Desktop header ────────────────────────────── */}
        <div className="hidden md:flex items-start justify-between">
          <div className="flex items-start gap-[10px] uppercase">
            <div className="font-[family-name:var(--font-inter)] font-light text-[96px] text-black leading-[0.86] tracking-[-0.08em]">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-2">004</span>
          </div>
          <div className="h-[110px] flex items-center justify-center">
            <div className="-rotate-90">
              <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap">
                [ portfolio ]
              </span>
            </div>
          </div>
        </div>

        {/* ── Mobile layout ─────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-6">
          <ProjectCard project={projects[0]} containerClass="h-[390px]" />
          <ProjectCard project={projects[1]} containerClass="h-[390px]" />
          <ProjectCard project={projects[2]} containerClass="h-[390px]" />
          <ProjectCard project={projects[3]} containerClass="h-[390px]" />
          <CtaBox />
        </div>

        {/* ── Desktop layout ────────────────────────────── */}
        <div className="hidden md:flex gap-6">
          {/* Left column */}
          <div className="flex-1 min-w-0 flex flex-col gap-[61px]">
            <ProjectCard project={projects[0]} containerClass="h-[744px]" />
            <ProjectCard project={projects[1]} containerClass="h-[699px]" />
            <CtaBox />
          </div>
          {/* Right column — offset down */}
          <div className="flex-1 min-w-0 flex flex-col gap-[117px] pt-[240px]">
            <ProjectCard project={projects[2]} containerClass="h-[699px]" />
            <ProjectCard project={projects[3]} containerClass="h-[744px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
