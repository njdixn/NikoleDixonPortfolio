import { useEffect } from "react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Header */}
      <section style={{
        background: "linear-gradient(155deg, var(--plum) 0%, var(--green-deep) 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
      }}>
        <FadeIn>
          <p className="label" style={{ color: "var(--green-light)", marginBottom: "1rem" }}>The Person</p>
          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 300, color: "#fff",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
          }}>
            About Me
          </h1>
          <blockquote style={{
            fontFamily: "var(--serif)", fontStyle: "italic",
            color: "rgba(255,255,255,0.55)", fontSize: "1.15rem",
            marginTop: "1.25rem",
          }}>
            "We define the lines that we color within."
          </blockquote>
        </FadeIn>
      </section>

      {/* Main bio */}
      <section style={{ background: "#fff", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "5rem", alignItems: "start",
        }} className="about-grid">
          <FadeIn>
            <p className="label" style={{ marginBottom: "1rem" }}>Background</p>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)", marginBottom: "1.5rem",
            }}>
              Nikole Josephine Dixon
            </h2>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.1rem", fontSize: "0.97rem" }}>
              Nikole was born in central Washington and spent most of her life in the greater Seattle area.
              During this time, she pursued her education through school and college, earning two associate
              degrees while working for several prominent companies in the region.
            </p>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.1rem", fontSize: "0.97rem" }}>
              She has since returned to central Washington, where she is currently working toward her
              third associate degree in Software Development at Bellevue College, expected June 2026.
            </p>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.85, fontWeight: 300, fontSize: "0.97rem" }}>
              What draws her to software development is the same impulse that has always driven her art:
              the desire to build something meaningful from nothing. Coding requires the same balance of
              discipline and imagination — logic provides the framework, creativity gives it life.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            {/* Art card */}
            <div style={{
              background: "linear-gradient(140deg, var(--green-deep) 0%, var(--plum-mid) 100%)",
              borderRadius: "3px", padding: "2.25rem",
              color: "#fff", marginBottom: "1.25rem",
            }}>
              <p style={{
                fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem",
              }}>
                Art Practice
              </p>
              <h3 style={{
                fontFamily: "var(--serif)", fontWeight: 300,
                fontSize: "1.4rem", marginBottom: "0.75rem",
              }}>
                Filet Crochet Paintings
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.75)", lineHeight: 1.8,
                fontSize: "0.92rem", fontWeight: 300, marginBottom: "1.5rem",
              }}>
                The Filet Crochet Paintings honor the past by preserving the traditional art of
                filet crocheting while reimagining it in a contemporary context. Using filet crochet
                as a canvas transforms the medium into something both familiar and unexpected,
                inviting viewers to recognize beauty in all facets of life.
              </p>
              <a
                href="https://www.njdartwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#fff",
                  borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: "2px",
                  transition: "border-color 0.2s",
                }}
              >
                Visit njdartwork.com →
              </a>
            </div>

            {/* Zelda card */}
            <div style={{
              background: "var(--cream)", border: "1px solid rgba(25,83,66,0.12)",
              borderRadius: "3px", padding: "1.5rem",
            }}>
              <p style={{
                fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--green-mid)", marginBottom: "0.75rem",
              }}>
                Outside of Work
              </p>
              <h3 style={{
                fontFamily: "var(--serif)", fontWeight: 400,
                fontSize: "1.1rem", marginBottom: "0.5rem",
              }}>
                The Legend of Zelda
              </h3>
              <p style={{
                color: "var(--ink-muted)", fontSize: "0.88rem",
                lineHeight: 1.75, fontWeight: 300,
              }}>
                A deep appreciation for The Legend of Zelda — the creativity, immersive worlds,
                and engaging puzzles make it both exciting and endlessly enjoyable. Known to spend
                an entire birthday immersed in the various games.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Art origin story */}
      <section style={{ background: "var(--cream)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <FadeIn>
            <p className="label" style={{ marginBottom: "1rem" }}>Origin Story</p>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: "1.75rem",
            }}>
              Art as a Catalyst
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {[
                `While enrolled in a college art course, Nikole was given a take-home project that
                would become a defining moment in her artistic journey. That evening, she noticed a
                hibiscus filet crochet panel hanging in her kitchen window and asked her mother for
                the same pattern, doubled in size.`,
                `The piece was crocheted by Joy, carefully stretched over large wooden dowels and
                framed to resemble a window. Nikole painted the finished piece a vibrant crimson.
                During its unveiling, the professor chose to present the work to the entire class —
                commenting that it was more representative of a thesis-level piece than a freshman
                project.`,
                `This pivotal experience marked the beginning of Nikole's exploration of unconventional
                materials and solidified her belief that art can be created through any medium. That
                same creative impulse now drives her software development work.`,
              ].map((para, i) => (
                <p key={i} style={{
                  color: "var(--ink-muted)", fontSize: "0.97rem",
                  lineHeight: 1.85, fontWeight: 300,
                }}>
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}
