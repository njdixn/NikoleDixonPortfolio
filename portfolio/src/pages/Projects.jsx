import { useEffect } from "react";
import FadeIn from "../components/FadeIn";
import ChainCarousel from "../components/ChainCarousel";
import Footer from "../components/Footer";
import { PROJECTS } from "../data/content";

export default function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Page header */}
      <section style={{
        background: "linear-gradient(155deg, var(--plum) 0%, var(--green-deep) 100%)",
        padding: "9rem 2rem 5rem",
        textAlign: "center",
      }}>
        <FadeIn>
          <p className="label" style={{ color: "var(--green-light)", marginBottom: "1rem" }}>Work</p>
          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 300, color: "#fff",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
          }}>
            Featured Projects
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.55)", fontFamily: "var(--serif)",
            fontSize: "1.05rem", marginTop: "1rem", fontWeight: 300,
          }}>
            Click or drag the chain links to explore each project
          </p>
        </FadeIn>
      </section>

      {/* Chain carousel section */}
      <section style={{
        background: "var(--cream)",
        padding: "4rem 2rem 5rem",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <FadeIn delay={0.15}>
            {/*
              HOW TO ADD YOUR OWN PHOTOS:
              1. Put your images in the /public/images/ folder of your project
              2. In src/data/content.js, update each project's `image` field:
                 e.g.  image: "/images/museum-screenshot.jpg"
              3. Recommended: square or landscape photos, at least 400×400px
              The chain links crop images into circles, so centered subjects work best.
            */}
            <ChainCarousel projects={PROJECTS} />
          </FadeIn>
        </div>
      </section>

      {/* How to add images callout */}
      <section style={{ background: "#fff", padding: "3rem 2rem" }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          background: "rgba(25,83,66,0.05)", borderLeft: "3px solid var(--green-mid)",
          padding: "1.5rem 1.75rem", borderRadius: "0 3px 3px 0",
        }}>
          <p className="label" style={{ marginBottom: "0.5rem" }}>Developer Note</p>
          <p style={{ color: "var(--ink-muted)", fontSize: "0.9rem", lineHeight: 1.75, fontWeight: 300 }}>
            The chain link images are currently using placeholders. To add your own project screenshots,
            place image files in <code style={{ fontFamily: "var(--mono)", fontSize: "0.82rem", background: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px" }}>/public/images/</code> and
            update the <code style={{ fontFamily: "var(--mono)", fontSize: "0.82rem", background: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px" }}>image</code> field
            in <code style={{ fontFamily: "var(--mono)", fontSize: "0.82rem", background: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px" }}>src/data/content.js</code>.
            Square crops work best since the links are circular.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
