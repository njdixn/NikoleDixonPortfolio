import { useEffect } from "react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import { SKILLS } from "../data/content";

const CATEGORY_COLORS = {
  "Program & Project Leadership": { bg: "rgba(72,57,73,0.07)", accent: "var(--plum-mid)" },
  "Programming & Technical":       { bg: "rgba(25,83,66,0.07)", accent: "var(--green-deep)" },
  "Tools & Platforms":             { bg: "rgba(52,129,106,0.07)", accent: "var(--green-mid)" },
  "Data & Reporting":              { bg: "rgba(25,83,66,0.05)", accent: "var(--green-deep)" },
};

export default function Skills() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Header */}
      <section style={{
        background: "linear-gradient(155deg, var(--plum) 0%, var(--green-deep) 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
      }}>
        <FadeIn>
          <p className="label" style={{ color: "var(--green-light)", marginBottom: "1rem" }}>Expertise</p>
          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 300, color: "#fff",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
          }}>
            Skills & Technologies
          </h1>
        </FadeIn>
      </section>

      {/* Skill categories */}
      <section style={{ background: "var(--cream)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "1.75rem",
          }}>
            {Object.entries(SKILLS).map(([cat, tags], i) => {
              const colors = CATEGORY_COLORS[cat] || { bg: "rgba(25,83,66,0.06)", accent: "var(--green-deep)" };
              return (
                <FadeIn key={cat} delay={i * 0.1}>
                  <div style={{
                    background: "#fff",
                    border: "1px solid rgba(25,83,66,0.1)",
                    borderTop: `3px solid ${colors.accent}`,
                    borderRadius: "0 0 3px 3px",
                    padding: "1.75rem",
                  }}>
                    <p style={{
                      fontFamily: "var(--mono)", fontSize: "0.62rem",
                      letterSpacing: "0.2em", textTransform: "uppercase",
                      color: colors.accent, marginBottom: "1.1rem", fontWeight: 400,
                    }}>
                      {cat}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {tags.map((tag) => (
                        <span key={tag} style={{
                          display: "inline-block",
                          background: colors.bg,
                          color: colors.accent,
                          fontFamily: "var(--mono)", fontSize: "0.68rem",
                          letterSpacing: "0.04em", padding: "0.28rem 0.75rem",
                          borderRadius: "2px",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proficiency note */}
      <section style={{ background: "#fff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p className="label" style={{ marginBottom: "1rem" }}>A Note on Proficiency</p>
            <p style={{
              fontFamily: "var(--serif)", fontSize: "1.1rem", lineHeight: 1.85,
              color: "var(--ink-muted)", fontWeight: 300,
            }}>
              My technical skills are actively growing through the Software Development AAS-T and
              Python Programming Certificate programs at Bellevue College. Programming and development
              skills are complemented by 10+ years of analytical and leadership expertise at Boeing,
              where data tools and process design were central to my work.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
