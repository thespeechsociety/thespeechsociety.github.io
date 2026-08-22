import React from "react"
import { useScreenSize } from "@/hooks/use-screen-size"
import { PixelTrail } from "@/components/ui/pixel-trail"
import { GooeyFilter } from "@/components/ui/gooey-filter"
import { ArrowRight, Sparkles, MessageCircle, Mic, BookOpen, Users, Compass } from "lucide-react"

interface HeroGooeyProps {
  inductionUrl: string
  whatsappUrl: string
}

export function HeroGooeyInteractive({
  inductionUrl,
  whatsappUrl,
}: HeroGooeyProps) {
  const screenSize = useScreenSize()

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xl bg-slate-900 text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
      {/* Background Artwork */}
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
        alt="The Speech Society Stage Atmosphere"
        className="w-full h-full object-cover absolute inset-0 opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out pointer-events-none"
      />

      {/* Radiant Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/85 to-slate-950/95 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Gooey Filter */}
      <GooeyFilter id="hero-gooey-filter-trail" strength={6} />

      {/* Interactive Pixel Trail Canvas */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ filter: "url(#hero-gooey-filter-trail)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 20 : 28}
          fadeDuration={800}
          delay={0}
          pixelClassName="bg-blue-400/90 shadow-sm shadow-blue-400"
        />
      </div>

      {/* Top Floating Badge */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-blue-200 shadow-lg cursor-default transition-all hover:bg-white/15">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="tracking-wide">
            Official Communication & Debate Club • UEM Jaipur
          </span>
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 ml-1 inline" />
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs text-slate-300/80 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <Compass className="w-3.5 h-3.5 text-blue-400" />
          <span>Hover / Move cursor for Interactive Glow</span>
        </div>
      </div>

      {/* Center Core Hero Content */}
      <div className="relative z-10 my-auto py-8 sm:py-12 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.06] drop-shadow-sm">
          Think. Script.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            Speak.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed text-pretty">
          Speaking ideas into existence. We empower students to master articulation, public speaking, debating, and impactful leadership.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={inductionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl text-sm font-bold bg-white text-slate-950 hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-white/20 hover:scale-[1.02] flex items-center gap-2 group"
          >
            <span>Induction Event 2026</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Join Community</span>
          </a>

          <a
            href="#events"
            className="px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Explore Events ↓
          </a>
        </div>
      </div>

      {/* Bottom Pillars Grid */}
      <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3.5 text-left">
        <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Think</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Critical reasoning, structured thoughts & ideation
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Script</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Speechwriting, rhetoric & vocabulary nuance
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300 mb-1">
            <Mic className="w-3.5 h-3.5" />
            <span>Speak</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Vocal delivery, debate mastery & confidence
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Lead</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Toastmasters culture & stage presence
          </p>
        </div>
      </div>
    </div>
  )
}
