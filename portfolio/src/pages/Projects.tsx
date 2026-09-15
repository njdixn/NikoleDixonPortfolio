import { useState, useEffect } from "react";
import { LayoutGrid, Disc, Sparkles, Filter } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ChainCarousel from "../components/ChainCarousel";
import { PROJECTS } from "../data/projects";

type CategoryFilter = "All" | "Web Development" | "Python" | "C#" | "Database" | "React";

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Web Development",
  "Python",
  "C#",
  "Database",
  "React",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0920] via-[#195342] to-[#226a55] text-white pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
              Technical Portfolio
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white mt-2">
              Featured Projects
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto font-light">
              Demonstrating language versatility across Python desktop apps, C# object-oriented architecture, SQL database systems, and interactive JavaScript/React applications.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTROLS & FILTER BAR ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-xl border border-[#195342]/15 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start w-full md:w-auto">
            <span className="text-xs font-mono text-[#5e595b] mr-1 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#195342]" />
              Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs tracking-wide px-3 py-1.5 rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-[#195342] text-white font-medium shadow-sm"
                    : "bg-[#f7f5f2] text-[#5e595b] hover:bg-[#ede9e2] border border-[#195342]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle (Grid vs Chain Carousel) */}
          <div className="flex items-center gap-1 bg-[#f7f5f2] p-1 rounded-lg border border-[#195342]/10 shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-all ${
                viewMode === "grid"
                  ? "bg-white text-[#195342] shadow-sm font-semibold"
                  : "text-[#5e595b] hover:text-[#2b2025]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode("carousel")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-all ${
                viewMode === "carousel"
                  ? "bg-white text-[#195342] shadow-sm font-semibold"
                  : "text-[#5e595b] hover:text-[#2b2025]"
              }`}
            >
              <Disc className="w-3.5 h-3.5" />
              <span>Chain Carousel</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECTS CONTENT AREA ── */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.08}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-10 shadow-sm">
            <div className="text-center mb-6 space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#34816a] font-medium">
                Interactive Chain Experience
              </span>
              <p className="text-sm text-[#5e595b] font-light">
                Swipe, drag, or click any circular link to explore connected projects.
              </p>
            </div>
            <ChainCarousel projects={filteredProjects} />
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-[#195342]/15">
            <p className="text-sm font-mono text-[#5e595b]">
              No projects match the selected category.
            </p>
          </div>
        )}
      </section>

      {/* ── DEVELOPER NOTE / CUSTOM ASSETS ── */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border-l-4 border-[#195342] p-6 shadow-sm flex items-start gap-4">
          <Sparkles className="w-5 h-5 text-[#195342] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-[#5e595b] font-light leading-relaxed">
            <p className="font-mono font-medium text-[#195342] uppercase text-xs">
              Config-Driven Project Architecture
            </p>
            <p>
              All project titles, live links, source repositories, tech stacks, and screenshots are managed cleanly in{" "}
              <code className="bg-gray-100 font-mono px-1 py-0.5 rounded text-[#2b2025]">
                src/data/projects.ts
              </code>
              . Adding or modifying projects requires no HTML restructuring or code refactoring.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

