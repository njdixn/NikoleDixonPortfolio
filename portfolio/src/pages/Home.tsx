import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Palette, FileText, Send } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import LanguageBreakdown from "../components/LanguageBreakdown";
import { PROJECTS } from "../data/projects";
import { ABOUT_DATA } from "../data/about";
import heroImg from "../assets/hero.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0920] via-[#195342] to-[#226a55] text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Subtle decorative grid/rings */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#a3d4c5]" />
                  <span className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
                    Software Developer & Creative Technologist
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                  Crafting disciplined code with an <em className="italic font-normal text-[#a3d4c5]">artistic soul.</em>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Hi, I'm <strong className="font-medium text-white">Nikole Dixon</strong>. I build clean, reliable software with Python, C#, SQL, JavaScript, and React — drawing on 10+ years of aerospace engineering leadership and a lifelong visual art practice.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link to="/projects" className="btn-primary text-sm py-3 px-6 shadow-lg shadow-[#195342]/40">
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link to="/contact" className="btn-light-outline text-sm py-3 px-6">
                    <Send className="w-4 h-4 text-[#a3d4c5]" />
                    <span>Contact Me</span>
                  </Link>

                  <Link
                    to="/resume"
                    className="font-mono text-xs tracking-widest uppercase text-white/70 hover:text-white px-4 py-3 underline decoration-white/40 underline-offset-8 transition-colors"
                  >
                    View Resume
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn delay={0.25} direction="down">
                <div className="relative group">
                  {/* Glowing decorative backdrop */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#a3d4c5]/30 to-[#483949]/40 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

                  {/* Image container frame */}
                  <div className="relative rounded-2xl p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden max-w-[340px] sm:max-w-[380px]">
                    <img
                      src={heroImg}
                      alt="Nikole Dixon"
                      className="w-full h-auto object-cover rounded-xl shadow-inner"
                    />

                    {/* Overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#1C0920]/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                      <div>
                        <p className="font-serif text-sm font-medium">Bellevue College</p>
                        <p className="font-mono text-[10px] text-[#a3d4c5] tracking-wider uppercase">
                          Software Development AAS-T & BAS (GPA 4.00)
                        </p>
                      </div>
                      <Code2 className="w-5 h-5 text-[#a3d4c5]" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── MULTI-STACK TECHNICAL BREAKDOWN ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <FadeIn delay={0.35}>
          <LanguageBreakdown />
        </FadeIn>
      </section>

      {/* ── PHILOSOPHY STRIP (ART & LOGIC INTERSECTION) ── */}
      <section className="py-20 bg-[#f7f5f2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-[#195342]/15 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-[#195342]">
                  <Palette className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                    Core Philosophy & Differentiator
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2025] font-light leading-snug">
                  "We define the lines that we color within."
                </h2>
                <div className="w-16 h-1 bg-[#195342] rounded" />
              </div>

              <div className="lg:col-span-7 space-y-4 text-[#5e595b] font-light leading-relaxed text-base">
                <p>
                  {ABOUT_DATA.philosophy.body[0]}
                </p>
                <p>
                  {ABOUT_DATA.philosophy.body[1]}
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-[#195342] hover:text-[#226a55] font-mono text-xs tracking-wider uppercase font-medium group"
                  >
                    <span>Read my artistic story and background</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS PREVIEW ── */}
      <section className="py-16 bg-[#ede9e2]/50 border-y border-[#195342]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#34816a] font-semibold">
                Curated Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2025] font-light mt-1">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#195342] hover:text-[#226a55] font-mono text-xs uppercase tracking-wider font-medium group"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-outline">
              Browse Full Project Gallery & Interactive Carousel
            </Link>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-[#195342] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <span className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
            Let's Collaborate
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            Interested in working together or exploring my work?
          </h2>
          <p className="text-white/80 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            I am actively seeking software development opportunities where analytical discipline, multi-stack coding, and creative problem-solving create tangible impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact" className="btn-primary bg-white text-[#195342] hover:bg-[#a3d4c5] hover:text-[#10382c]">
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
            <Link to="/resume" className="btn-light-outline">
              <FileText className="w-4 h-4" />
              <span>View Resume & Education</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

