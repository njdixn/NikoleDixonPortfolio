import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
  });

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(155deg, var(--plum) 0%, var(--green-deep) 55%, #2b5c4a 100%)",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center", padding: "6rem 2rem 4rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative rings */}
        {[520, 360, 200].map((size, i) => (
          <div key={i} style={{
            position: "absolute", width: `${size}px`, height: `${size}px`,
            borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />
        ))}

        <p className="label" style={{ color: "var(--green-light)", marginBottom: "1.5rem", ...anim(0.1) }}>
          Portfolio
        </p>

        <h1 style={{
          fontFamily: "var(--serif)", fontWeight: 300, color: "#fff",
          fontSize: "clamp(3.5rem, 10vw, 7.5rem)", lineHeight: 1.02,
          marginBottom: "1.5rem", ...anim(0.25),
        }}>
          Nikole<br /><em>Dixon</em>
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.62)", fontSize: "1.1rem",
          maxWidth: "520px", lineHeight: 1.8, fontWeight: 300,
          marginBottom: "2.5rem", fontFamily: "var(--serif)",
          ...anim(0.4),
        }}>
          Building clean, user-focused applications using Python, C#, SQL, HTML, CSS, JavaScript, and React.

        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", ...anim(0.55) }}>
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/resume" style={{
            display: "inline-block", color: "rgba(255,255,255,0.75)",
            fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "0.6rem 1.6rem",
            border: "1px solid rgba(255,255,255,0.25)", borderRadius: "2px",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
          >
            Resume
          </Link>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
          color: "rgba(255,255,255,0.3)", fontFamily: "var(--mono)", fontSize: "0.55rem",
          letterSpacing: "0.22em", ...anim(0.8),
        }}>
          <span>SCROLL</span>
          <span style={{ fontSize: "0.9rem", animation: "bounce 2s infinite" }}>↓</span>
        </div>
        <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}`}</style>
      </section>

      {/* Quick intro strip */}
      <section style={{
        background: "#fff", padding: "5rem 2rem",
        display: "flex", justifyContent: "center",
      }}>
        <div style={{ maxWidth: "820px", width: "100%", textAlign: "center" }}>
          <p className="label" style={{ marginBottom: "1rem" }}>About This Site</p>
          <h2 style={{
            fontFamily: "var(--serif)", fontWeight: 300,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1.5rem",
          }}>
            "We define the lines that we color within."
          </h2>
          <p style={{ color: "var(--ink-muted)", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300, marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            What draws me to software development is the same impulse that has always driven my art —
            the desire to build something meaningful from nothing. Coding requires the same balance of
            discipline and imagination: logic provides the framework, creativity gives it life.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/projects" className="btn-primary">See My Work</Link>
            <Link to="/about" className="btn-outline">About Me</Link>
          </div>
        </div>
      </section>

      {/* Skills teaser */}
      <section style={{ background: "var(--cream)", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p className="label" style={{ marginBottom: "2rem" }}>Skills</p>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center",
          }}>
            {["Python","C#","SQL","HTML","CSS","JavaScript","React","Tableau","Power BI",
              "SharePoint","Advanced Excel","Adobe Photoshop","Agile","Stakeholder Alignment"].map(s => (
              <span key={s} style={{
                fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.06em",
                background: "rgba(25,83,66,0.09)", color: "var(--green-deep)",
                padding: "0.3rem 0.85rem", borderRadius: "2px",
              }}>{s}</span>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/skills" className="btn-outline">Full Skills List</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
