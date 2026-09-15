import { useEffect } from "react";
import { ExternalLink, Palette, Sparkles, Gamepad2, Award, HeartHandshake } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import { ABOUT_DATA } from "../data/about";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* ── HEADER HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0920] via-[#483949] to-[#195342] text-white pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <FadeIn>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              The Developer & The Artist
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white mt-2">
              About Nikole Dixon
            </h1>
            <p className="font-serif italic text-white/70 text-lg sm:text-xl max-w-xl mx-auto mt-3">
              "{ABOUT_DATA.philosophy.quote}"
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PHILOSOPHY SECTION (THE KEY DIFFERENTIATOR) ── */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-white rounded-xl border border-[#195342]/15 p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3d4c5]/10 rounded-bl-full pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#195342]">
                <Palette className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                  Creative Philosophy & Discipline
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2b2025]">
                {ABOUT_DATA.philosophy.statement}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm text-[#5e595b] font-light leading-relaxed">
                {ABOUT_DATA.philosophy.body.map((para, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#f7f5f2]/80 border border-[#195342]/10 space-y-2">
                    <span className="font-mono text-xs text-[#34816a] font-medium">0{i + 1} / Principle</span>
                    <p>{para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── BIOGRAPHY & ART PRACTICE GRID ── */}
      <section className="pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio Narrative */}
          <div className="md:col-span-7 space-y-6 bg-white rounded-xl border border-[#195342]/15 p-8 shadow-sm">
            <FadeIn>
              <span className="font-mono text-xs uppercase tracking-widest text-[#34816a] font-semibold">
                Personal Background
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2b2025] mt-1 mb-6">
                From Aerospace Systems to Software Engineering
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#5e595b] font-light leading-relaxed">
                {ABOUT_DATA.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#195342]/10 grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded bg-[#f7f5f2]">
                  <p className="font-serif text-2xl text-[#195342] font-medium">10+ Years</p>
                  <p className="font-mono text-[11px] text-[#5e595b] uppercase tracking-wider">
                    Aerospace & Leadership
                  </p>
                </div>
                <div className="p-3.5 rounded bg-[#f7f5f2]">
                  <p className="font-serif text-2xl text-[#195342] font-medium">3.96 GPA</p>
                  <p className="font-mono text-[11px] text-[#5e595b] uppercase tracking-wider">
                    Software Development
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Art & Outside Interests */}
          <div className="md:col-span-5 space-y-6">
            {/* Art Practice Card */}
            <FadeIn delay={0.15}>
              <div className="bg-gradient-to-br from-[#195342] to-[#1C0920] text-white rounded-xl p-7 shadow-lg border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#a3d4c5] font-semibold">
                      Fine Art Practice
                    </span>
                    <Award className="w-4 h-4 text-[#a3d4c5]" />
                  </div>

                  <h3 className="font-serif text-2xl font-light text-white">
                    {ABOUT_DATA.artPractice.title}
                  </h3>

                  <p className="font-mono text-xs text-white/70 italic">
                    {ABOUT_DATA.artPractice.medium}
                  </p>

                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    {ABOUT_DATA.artPractice.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={ABOUT_DATA.artPractice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#a3d4c5] hover:text-white font-mono text-xs tracking-wider uppercase border-b border-[#a3d4c5]/40 hover:border-white transition-all pb-0.5"
                    >
                      <span>{ABOUT_DATA.artPractice.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Outside Work: Zelda Card */}
            <FadeIn delay={0.25}>
              <div className="bg-white rounded-xl border border-[#195342]/15 p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#34816a]">
                  <Gamepad2 className="w-4 h-4" />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                    Outside the Terminal
                  </span>
                </div>

                <h3 className="font-serif text-xl font-light text-[#2b2025]">
                  {ABOUT_DATA.outsideWork.title}
                </h3>

                <p className="text-xs text-[#5e595b] font-light leading-relaxed">
                  {ABOUT_DATA.outsideWork.description}
                </p>
              </div>
            </FadeIn>

            {/* Creative Discipline Card */}
            <FadeIn delay={0.3}>
              <div className="bg-[#ede9e2]/60 rounded-xl border border-[#195342]/15 p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#483949]">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                    Work Ethic
                  </span>
                </div>
                <p className="text-xs text-[#5e595b] font-light leading-relaxed">
                  "Patience, attention to millimeter detail, and iterative refinement are the common denominators between crocheting a complex pattern, orchestrating a Boeing operational rhythm, and architecting resilient software."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY: ART AS A CATALYST ── */}
      <section className="py-16 bg-white border-t border-[#195342]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <FadeIn>
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#34816a] font-semibold">
                Origin Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2b2025]">
                {ABOUT_DATA.originStory.title}
              </h2>
              <p className="text-sm font-mono text-[#5e595b]">
                {ABOUT_DATA.originStory.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4 text-base text-[#5e595b] font-light leading-relaxed">
            {ABOUT_DATA.originStory.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p>{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

