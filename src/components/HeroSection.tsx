"use client";

import { useState } from "react";

const heroImage = "/hero.png";
const heroImageMobile = "/hero-mobile.png";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

import type { SiteSettings } from "@/sanity/lib/types";

export default function HeroSection({ settings }: { settings?: SiteSettings }) {
  const heroLabel = settings?.heroLabel ?? "Hello i'm";
  const heroDescription =
    settings?.heroDescription ??
    "H.Studio is a full-service creative studio creating beautiful digital experiences and products. We are an award winning design and art group specializing in branding, web design and engineering.";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden isolate bg-neutral-400 h-[635px] md:h-[847px] flex flex-col">
      {/* Mobile: portrait crop — 750×1270 matches 2× the 375×635 container exactly */}
      <img
        src={heroImageMobile}
        alt=""
        className="md:hidden absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
      />
      {/* Desktop: exact fit (image is 1440×847, same as desktop hero) */}
      <img
        src={heroImage}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
      />

      {/* Bottom overlay — gradient fade to avoid a hard line */}
      <div
        className="absolute bottom-0 inset-x-0 h-[349px] backdrop-blur-[10px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
        }}
      />

      {/* ── Nav ──────────────────────────────────────────────── */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-[26px] md:py-[35px]">
        <span className="font-[family-name:var(--font-dm-sans)] font-semibold text-base tracking-[-0.04em] capitalize text-black">
          H.Studio
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-14 font-[family-name:var(--font-dm-sans)] font-semibold text-base tracking-[-0.04em] text-black">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block px-4 py-3 bg-black text-white text-sm font-medium tracking-[-0.04em] rounded-full hover:opacity-80 transition-opacity">
          Let&apos;s talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Open menu"
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <rect width="24" height="2" rx="1" fill="black" />
            <rect y="7" width="24" height="2" rx="1" fill="black" />
            <rect y="14" width="24" height="2" rx="1" fill="black" />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden relative z-20 bg-white/95 backdrop-blur-sm px-4 pb-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-[family-name:var(--font-dm-sans)] font-semibold text-sm tracking-[-0.04em] py-3 border-b border-black/10 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-3 px-4 py-3 bg-black text-white text-sm font-medium tracking-[-0.04em] rounded-full self-start">
            Let&apos;s talk
          </button>
        </div>
      )}

      {/* ── Hero content ─────────────────────────────────────── */}
      {/*
        Mobile:  flex-1 + justify-end pushes content to bottom; name has no side
                 padding so it spans the full 375 px section width
        Desktop: flex-none + mt-[240px] gives the 240 px gap after the nav;
                 name gets px-8 so text area matches the 1376 px Figma frame
      */}
      <div className="relative flex-1 flex flex-col justify-end pb-6 md:flex-none md:mt-[240px] md:pb-0">
        {/* Label */}
        <p className="px-4 md:px-8 font-mono text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] text-center md:text-left md:pl-[50px]">
          [ {heroLabel} ]
        </p>

        {/* Name — full-width on mobile (no side padding) so DM Sans fits at 82px;
            px-8 on desktop keeps text within the 1376 px Figma content area */}
        <h1
          className="font-[family-name:var(--font-dm-sans)] font-medium text-white mix-blend-overlay capitalize text-center w-full
            text-[64px] leading-[0.9] tracking-[-0.07em]
            md:px-8 md:text-[198px] md:leading-[1.1]"
        >
          {/* <br /> forces two lines on mobile regardless of font metrics */}
          <span className="md:hidden">Harvey<br />Specter</span>
          <span className="hidden md:inline whitespace-pre-wrap">{"Harvey   Specter"}</span>
        </h1>

        {/* Description + CTA */}
        <div className="px-4 md:px-8 mt-4 md:mt-0 pl-[41px] md:pl-8 md:flex md:justify-end">
          <div className="flex flex-col gap-4 w-[293px] md:w-[294px]">
            <p className="font-[family-name:var(--font-dm-sans)] font-bold italic text-[14px] text-[#1f1f1f] uppercase tracking-[-0.04em] leading-[1.1]">
              {heroDescription}
            </p>
            <button className="w-fit px-4 py-3 bg-black text-white text-[14px] font-medium tracking-[-0.04em] rounded-full hover:opacity-80 transition-opacity">
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
