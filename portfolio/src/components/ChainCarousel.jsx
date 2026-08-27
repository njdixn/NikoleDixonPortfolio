import { useState, useRef, useCallback } from "react";

/**
 * ChainCarousel
 *
 * Each project is displayed as a circular "chain link" image.
 * The images overlap slightly and are connected by a thin metal-looking bar,
 * creating the visual effect of a maester's chain.
 *
 * Props:
 *   projects — array of project objects from content.js
 *
 * To use your own photos, replace the `image` field in content.js
 * with a path like "/images/museum.jpg" (put photos in /public/images/).
 * Recommended image size: 600×400px or any square crop works great.
 */

const LINK_SIZE = 140;   // diameter of each circular image link
const OVERLAP = 44;      // how many px each link overlaps the connector bar
const BAR_H = 22;        // height of the connector bar between links

export default function ChainCarousel({ projects }) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);
  const trackRef = useRef(null);

  const goTo = useCallback((idx) => {
    setActive(Math.max(0, Math.min(projects.length - 1, idx)));
  }, [projects.length]);

  // Drag / swipe handlers
  const onMouseDown = (e) => {
    setDragging(true);
    startX.current = e.clientX;
    dragDelta.current = 0;
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    dragDelta.current = e.clientX - startX.current;
  };
  const onMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta.current < -50) goTo(active + 1);
    else if (dragDelta.current > 50) goTo(active - 1);
  };
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta < -40) goTo(active + 1);
    else if (delta > 40) goTo(active - 1);
  };

  const proj = projects[active];

  // Each item = circle image (LINK_SIZE) + connector bar, minus overlap on each side
  // Effective step width per item
  const STEP = LINK_SIZE + 60 - OVERLAP; // 60 = bar width visible portion

  return (
    <div style={{ width: "100%" }}>
      {/* ── CHAIN TRACK ── */}
      <div
        style={{ overflow: "hidden", width: "100%", cursor: dragging ? "grabbing" : "grab" }}
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
            // Shift so active item is centered
            transform: `translateX(calc(50% - ${active * STEP + LINK_SIZE / 2}px))`,
            transition: dragging ? "none" : "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            padding: `${LINK_SIZE * 0.3}px 0`,
            willChange: "transform",
          }}
        >
          {projects.map((p, i) => {
            const isActive = i === active;
            const dist = Math.abs(i - active);
            const scale = isActive ? 1 : dist === 1 ? 0.82 : 0.68;
            const opacity = isActive ? 1 : dist === 1 ? 0.7 : 0.45;

            return (
              <div key={p.id} style={{ display: "flex", alignItems: "center" }}>
                {/* Connector bar BEFORE each link (except first) */}
                {i > 0 && (
                  <ConnectorBar active={isActive || i - 1 === active} />
                )}

                {/* Chain link — circular image */}
                <div
                  onClick={() => { if (Math.abs(dragDelta.current) < 8) goTo(i); }}
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
                    transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease, box-shadow 0.45s ease",
                    boxShadow: isActive
                      ? "0 0 0 4px #fff, 0 0 0 6px var(--green-mid), 0 8px 32px rgba(25,83,66,0.35)"
                      : "0 0 0 2px rgba(25,83,66,0.2), 0 2px 8px rgba(0,0,0,0.12)",
                    marginLeft: i > 0 ? `-${OVERLAP}px` : 0,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    draggable={false}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      pointerEvents: "none",
                      filter: isActive ? "none" : "grayscale(30%)",
                      transition: "filter 0.4s",
                    }}
                  />
                  {/* Subtle dark vignette ring */}
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: "50%",
                    boxShadow: "inset 0 0 18px rgba(0,0,0,0.35)",
                    pointerEvents: "none",
                  }} />
                  {/* Category badge on active */}
                  {isActive && (
                    <div style={{
                      position: "absolute", bottom: "12px", left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(25,83,66,0.88)",
                      color: "#fff", fontFamily: "var(--mono)",
                      fontSize: "0.55rem", letterSpacing: "0.15em",
                      textTransform: "uppercase", padding: "3px 8px",
                      borderRadius: "2px", whiteSpace: "nowrap",
                      backdropFilter: "blur(4px)",
                    }}>
                      {p.cat}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DOT NAVIGATION ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "1rem" }}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            style={{
              width: i === active ? "22px" : "7px",
              height: "7px",
              borderRadius: "4px",
              background: i === active ? "var(--green-deep)" : "rgba(25,83,66,0.25)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* ── PREV / NEXT ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.25rem" }}>
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          style={arrowStyle(active === 0)}
        >←</button>
        <button
          onClick={() => goTo(active + 1)}
          disabled={active === projects.length - 1}
          style={arrowStyle(active === projects.length - 1)}
        >→</button>
      </div>

      {/* ── PROJECT DETAIL CARD ── */}
      <div
        key={proj.id}  // remount on change for animation
        style={{
          marginTop: "2rem",
          background: "#fff",
          border: "1px solid rgba(25,83,66,0.1)",
          borderRadius: "4px",
          padding: "1.75rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "1rem",
          alignItems: "start",
          animation: "fadeUp 0.4s ease both",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--green-mid)", marginBottom: "0.4rem" }}>
            {proj.cat}
          </p>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 400, marginBottom: "0.6rem" }}>
            {proj.title}
          </h3>
          <p style={{ color: "var(--ink-muted)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "0.5rem" }}>
            {proj.detail}
          </p>
        </div>
        <div style={{ paddingTop: "0.25rem" }}>
          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn-outline">
            {proj.linkText}
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function ConnectorBar({ active }) {
  return (
    <div style={{
      width: "64px",
      height: `${BAR_H}px`,
      flexShrink: 0,
      position: "relative",
      zIndex: 2,
      marginLeft: `-${OVERLAP}px`,
      marginRight: `-${OVERLAP}px`,
    }}>
      {/* Main bar body */}
      <div style={{
        position: "absolute",
        top: "50%", left: 0, right: 0,
        height: `${BAR_H}px`,
        transform: "translateY(-50%)",
        background: active
          ? "linear-gradient(180deg, #c8b89a 0%, #9a8a6a 40%, #6a5a4a 100%)"
          : "linear-gradient(180deg, #c0b8b0 0%, #908880 40%, #706860 100%)",
        borderRadius: "3px",
        transition: "background 0.4s",
      }}>
        {/* Top highlight line */}
        <div style={{
          position: "absolute", top: "3px", left: "6px", right: "6px",
          height: "1px", background: "rgba(255,255,255,0.45)", borderRadius: "1px",
        }} />
        {/* Bottom shadow line */}
        <div style={{
          position: "absolute", bottom: "3px", left: "6px", right: "6px",
          height: "1px", background: "rgba(0,0,0,0.25)", borderRadius: "1px",
        }} />
      </div>
    </div>
  );
}

function arrowStyle(disabled) {
  return {
    background: "none",
    border: "1px solid rgba(25,83,66,0.3)",
    borderRadius: "2px",
    width: "36px", height: "36px",
    cursor: disabled ? "not-allowed" : "pointer",
    color: disabled ? "rgba(25,83,66,0.3)" : "var(--green-deep)",
    fontSize: "1rem",
    transition: "background 0.2s, color 0.2s",
    opacity: disabled ? 0.4 : 1,
  };
}
