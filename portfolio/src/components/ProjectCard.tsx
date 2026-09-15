import { ExternalLink, Terminal, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { Project } from "../data/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-md border border-[#195342]/15 hover:border-[#195342]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Card Visual Header / Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1C0920]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 rounded bg-[#195342]/90 text-white backdrop-blur-sm border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Featured Tag if applicable */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-[#a3d4c5] text-[#195342] font-semibold">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2b2025] group-hover:text-[#195342] transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-[#5e595b] text-sm leading-relaxed mb-4 font-light">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mb-4 space-y-1">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-xs text-[#5e595b] flex items-start gap-1.5 font-light">
                  <span className="text-[#34816a] font-bold">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#195342]/10">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wide px-2 py-0.5 rounded bg-[#f7f5f2] text-[#195342] border border-[#195342]/15 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Card Links */}
          <div className="flex items-center gap-2.5 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded bg-[#195342] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#226a55] transition-colors text-center"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 ${
                  project.liveUrl ? "px-3" : "flex-1"
                } py-2 rounded border border-[#195342]/30 hover:border-[#195342] text-[#195342] font-mono text-xs tracking-wider uppercase hover:bg-[#195342]/5 transition-colors text-center`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            ) : (
              !project.liveUrl && (
                <span className="inline-flex items-center justify-center gap-1.5 flex-1 py-2 px-3 rounded bg-gray-100 text-gray-500 font-mono text-xs tracking-wider uppercase">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Academic Work</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

