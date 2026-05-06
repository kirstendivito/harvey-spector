export default function FullImageSection() {
  return (
    <section className="relative w-full overflow-hidden h-[480px] md:h-[800px]">
      <img
        src="/full-image.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
    </section>
  );
}
