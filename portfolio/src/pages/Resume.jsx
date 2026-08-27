import { useEffect } from "react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import { RESUME, EDUCATION } from "../data/content";

export default function Resume() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Header */}
      <section style={{
        background: "linear-gradient(155deg, var(--plum) 0%, var(--green-deep) 100%)",
        padding: "9rem 2rem 5rem", textAlign: "center",
      }}>
        <FadeIn>
          <p className="label" style={{ color: "var(--green-light)", marginBottom: "1rem" }}>Experience</p>
          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 300, color: "#fff",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
          }}>
            Resume
          </h1>
        </FadeIn>
      </section>

      {/* Key Qualifications */}
      <section style={{ background: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <FadeIn>
            <p className="label" style={{ marginBottom: "1rem" }}>Key Qualifications</p>
            <ul style={{ paddingLeft: "1.2rem" }}>
              {[
                "10+ years of experience leading talent development programs and immersive learning efforts within complex engineering environments",
                "Proven ability to administer multi-year leadership development programs and partner with senior engineering leaders",
                "Highly skilled in collecting, organizing, synthesizing, and analyzing data to produce insights, visualizations, and executive-level recommendations",
                "Strong communicator with extensive experience preparing executive briefings and organization-wide communications",
                "Builds strong partnerships across functions, engineering teams, executives, and program participants",
                "Experienced in full-cycle event planning including large in-person events and operating rhythm management",
                "Exceptional time management and prioritization with the ability to manage concurrent deliverables",
              ].map((q, i) => (
                <li key={i} style={{
                  color: "var(--ink-muted)", fontSize: "0.97rem", lineHeight: 1.8,
                  fontWeight: 300, marginBottom: "0.5rem", listStyle: "disc",
                }}>
                  {q}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Work History */}
      <section style={{ background: "var(--cream)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <FadeIn>
            <p className="label" style={{ marginBottom: "0.75rem" }}>Work History</p>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)", marginBottom: "3rem",
            }}>
              The Boeing Company
            </h2>
          </FadeIn>

          {RESUME.map((r, i) => (
            <FadeIn key={r.team} delay={i * 0.07}>
              <div style={{
                borderLeft: "2px solid var(--green-mid)",
                paddingLeft: "1.75rem",
                marginBottom: "3rem",
                position: "relative",
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: "absolute", left: "-5px", top: "4px",
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "var(--green-mid)",
                }} />

                <p style={{
                  fontFamily: "var(--mono)", fontSize: "0.62rem",
                  letterSpacing: "0.15em", color: "var(--green-mid)",
                  textTransform: "uppercase", marginBottom: "0.3rem",
                }}>
                  {r.period}
                </p>
                <h3 style={{
                  fontFamily: "var(--serif)", fontSize: "1.25rem",
                  fontWeight: 400, marginBottom: "0.15rem",
                }}>
                  {r.title}
                </h3>
                <p style={{
                  color: "var(--ink-faint)", fontSize: "0.88rem",
                  fontStyle: "italic", marginBottom: "1rem",
                }}>
                  {r.team}
                </p>
                <ul style={{ paddingLeft: "1.1rem" }}>
                  {r.bullets.map((b) => (
                    <li key={b} style={{
                      color: "#555", fontSize: "0.92rem",
                      lineHeight: 1.75, marginBottom: "0.35rem",
                      fontWeight: 300, listStyle: "disc",
                    }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ background: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <FadeIn>
            <p className="label" style={{ marginBottom: "0.75rem" }}>Academic Background</p>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)", marginBottom: "2.5rem",
            }}>
              Education
            </h2>
          </FadeIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
          }}>
            {EDUCATION.map((e, i) => (
              <FadeIn key={e.degree} delay={i * 0.08}>
                <div style={{
                  background: "var(--cream)", border: "1px solid rgba(25,83,66,0.1)",
                  borderRadius: "3px", padding: "1.5rem",
                }}>
                  <p style={{
                    fontFamily: "var(--mono)", fontSize: "0.6rem",
                    letterSpacing: "0.15em", color: "var(--green-mid)",
                    textTransform: "uppercase", marginBottom: "0.3rem",
                  }}>
                    {e.period} · {e.note}
                  </p>
                  <h4 style={{
                    fontFamily: "var(--serif)", fontSize: "1.05rem",
                    fontWeight: 400, marginBottom: "0.2rem",
                  }}>
                    {e.degree}
                  </h4>
                  <p style={{
                    color: "var(--ink-faint)", fontSize: "0.82rem",
                    fontStyle: "italic", marginBottom: "0.85rem",
                  }}>
                    {e.school}
                  </p>
                  <ul style={{ paddingLeft: "1rem" }}>
                    {e.details.map((d) => (
                      <li key={d} style={{
                        color: "var(--ink-muted)", fontSize: "0.82rem",
                        lineHeight: 1.7, marginBottom: "0.2rem",
                        fontWeight: 300, listStyle: "disc",
                      }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
