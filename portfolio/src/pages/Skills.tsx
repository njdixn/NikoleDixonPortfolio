import { useEffect } from "react";
import { Code2, Users, Wrench, BarChart3, Layers, CheckCircle2, Sparkles } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import LanguageBreakdown from "../components/LanguageBreakdown";
import { SKILL_CATEGORIES } from "../data/skills";

const CATEGORY_ICONS = {
  Code2: Code2,
  Users: Users,
  Wrench: Wrench,
  BarChart3: BarChart3,
  Layers: Layers,
  Palette: Sparkles,
};

export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0920] via-[#195342] to-[#226a55] text-white pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
              Technical & Operational Capabilities
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white mt-2">
              Skills & Technologies
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto font-light">
              A balanced blend of software development languages, data visualization platforms, and decade-long enterprise program leadership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── VISUAL LANGUAGE BREAKDOWN ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <FadeIn delay={0.1}>
          <LanguageBreakdown />
        </FadeIn>
      </section>

      {/* ── SKILL CATEGORIES GRID ── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => {
            const IconComp = CATEGORY_ICONS[cat.iconName as keyof typeof CATEGORY_ICONS] || Code2;
            return (
              <FadeIn key={cat.id} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full hover:border-[#195342]/30 transition-all">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: cat.bgLight, color: cat.accentColor }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-normal text-[#2b2025]">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-[#5e595b] font-light leading-snug">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`font-mono text-xs tracking-wide px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
                            skill.highlight
                              ? "bg-[#195342]/10 text-[#195342] border border-[#195342]/20 font-medium"
                              : "bg-[#f7f5f2] text-[#5e595b] border border-[#195342]/10 font-normal"
                          }`}
                        >
                          {skill.highlight && (
                            <CheckCircle2 className="w-3 h-3 text-[#34816a]" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── PROFICIENCY CONTEXT NOTE ── */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl border border-[#195342]/15 p-8 shadow-sm text-center space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#34816a] font-semibold">
              Proficiency & Synergy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#2b2025]">
              How Coding Logic & Enterprise Rigor Reinforce Each Other
            </h3>
            <p className="text-[#5e595b] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              My technical programming skills (Python, C#, SQL, React) are actively forged through intensive coursework at Bellevue College. They are elevated by over a decade of high-level analytical experience at The Boeing Company, where managing complex operating rhythms, architecting enterprise talent tools, and synthesizing large datasets were central to my leadership.
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}

