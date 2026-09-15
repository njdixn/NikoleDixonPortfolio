import React, { useState, useRef, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";
import { Project } from "../data/types";

interface ChainCarouselProps {
  projects: Project[];
}

const LINK_SIZE = 140;
const OVERLAP = 44;
const BAR_H = 22;

export default function ChainCarousel({ projects }: ChainCarouselProps) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (idx: number) => {
      setActive(Math.max(0, Math.min(projects.length - 1, idx)));
    },
    [projects.length]
  );

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    startX.current = e.clientX;
    dragDelta.current = 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    dragDelta.current = e.clientX - startX.current;
  };

  const onMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta.current < -50) goTo(active + 1);
    else if (dragDelta.current > 50) goTo(active - 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta < -40) goTo(active + 1);
    else if (delta > 40) goTo(active - 1);
  };

  if (!projects.length) return null;
  const proj = projects[active];
  const STEP = LINK_SIZE + 60 - OVERLAP;

  return (
    <div className="w-full select-none">
      {/* Chain Track */}
      <div
        className={`overflow-hidden w-full ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            alignItems: "center",
            transform: `translateX(calc(50% - ${active * STEP + LINK_SIZE / 2}px))`,
            transition: dragging ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            padding: `${LINK_SIZE * 0.25}px 0`,
            willChange: "transform",
          }}
        >
          {projects.map((p, i) => {
            const isActive = i === active;
            const dist = Math.abs(i - active);
            const scale = isActive ? 1 : dist === 1 ? 0.82 : 0.68;
            const opacity = isActive ? 1 : dist === 1 ? 0.7 : 0.45;

            return (
              <div key={p.id} className="flex items-center">
                {/* Connector bar before each link (except first) */}
                {i > 0 && <ConnectorBar active={isActive || i - 1 === active} />}

                {/* Chain circular link */}
                <div
                  onClick={() => {
                    if (Math.abs(dragDelta.current) < 8) goTo(i);
                  }}
                  style={{
                    width: LINK_SIZE,
                    height: LINK_SIZE,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    cursor: "pointer",
                    position: "relative",
                    zIndex: isActive ? 3 : 1,
                    transform: `scale(${scale})`,
                    opacity,
                    transition:
                      "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease, box-shadow 0.45s ease",
                    boxShadow: isActive
                      ? "0 0 0 4px #fff, 0 0 0 6px #34816a, 0 10px 30px rgba(25, 83, 66, 0.35)"
                      : "0 0 0 2px rgba(25, 83, 66, 0.2), 0 2px 8px rgba(0,0,0,0.12)",
                    marginLeft: i > 0 ? `-${OVERLAP}px` : 0,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none transition-all duration-300"
                    style={{ filter: isActive ? "none" : "grayscale(30%)" }}
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_18px_rgba(0,0,0,0.4)] pointer-events-none" />

                  {isActive && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#195342]/90 text-white font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded backdrop-blur-sm whitespace-nowrap">
                      {p.category}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              i === active ? "w-6 bg-[#195342]" : "w-1.5 bg-[#195342]/30 hover:bg-[#195342]/50"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next controls */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className="p-2 rounded border border-[#195342]/30 text-[#195342] hover:bg-[#195342]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-mono text-xs text-[#5e595b]">
          {active + 1} / {projects.length}
        </span>
        <button
          onClick={() => goTo(active + 1)}
          disabled={active === projects.length - 1}
          className="p-2 rounded border border-[#195342]/30 text-[#195342] hover:bg-[#195342]/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Active Project Detail Card */}
      <div
        key={proj.id}
        className="mt-6 bg-white border border-[#195342]/15 rounded-lg p-6 sm:p-7 shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#34816a] font-medium">
              {proj.category}
            </span>
            <h3 className="font-serif text-2xl font-light text-[#2b2025]">
              {proj.title}
            </h3>
            <p className="text-sm text-[#5e595b] font-light leading-relaxed">
              {proj.detail}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {proj.techStack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#f7f5f2] text-[#195342] border border-[#195342]/15"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex sm:flex-col gap-2 pt-2 sm:pt-0 shrink-0">
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {proj.githubUrl && (
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectorBar({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: "64px",
        height: `${BAR_H}px`,
        flexShrink: 0,
        position: "relative",
        zIndex: 2,
        marginLeft: `-${OVERLAP}px`,
        marginRight: `-${OVERLAP}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: `${BAR_H}px`,
          transform: "translateY(-50%)",
          background: active
            ? "linear-gradient(180deg, #c8b89a 0%, #9a8a6a 40%, #6a5a4a 100%)"
            : "linear-gradient(180deg, #c0b8b0 0%, #908880 40%, #706860 100%)",
          borderRadius: "3px",
          transition: "background 0.4s",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: "6px",
            right: "6px",
            height: "1px",
            background: "rgba(255,255,255,0.45)",
            borderRadius: "1px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "3px",
            left: "6px",
            right: "6px",
            height: "1px",
            background: "rgba(0,0,0,0.25)",
            borderRadius: "1px",
          }}
        />
      </div>
    </div>
  );
}

