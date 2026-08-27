export default function Footer() {
  return (
    <footer style={{
      background: "var(--plum)",
      color: "#fff",
      padding: "3.5rem 2rem",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "var(--serif)", fontSize: "1.6rem",
        fontWeight: 300, marginBottom: "1.5rem",
      }}>
        Nikole Dixon
      </p>

      <div style={{
        display: "flex", justifyContent: "center", gap: "1.5rem",
        flexWrap: "wrap", marginBottom: "2rem", alignItems: "center",
      }}>
        {[
          { label: "njdartwork@outlook.com", href: "mailto:njdartwork@outlook.com?subject=Website%20Inquiry" },
          { label: "425.698.9800", href: null },
          { label: "GitHub", href: "https://github.com/njdixn" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nikole-dixon-17894632/" },
        ].map(({ label, href }, i, arr) => (
          <span key={label} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {href ? (
              <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.6)", fontFamily: "var(--mono)",
                  fontSize: "0.7rem", letterSpacing: "0.08em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--green-light)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
              >{label}</a>
            ) : (
              <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--mono)", fontSize: "0.7rem" }}>
                {label}
              </span>
            )}
            {i < arr.length - 1 && (
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>·</span>
            )}
          </span>
        ))}
      </div>

      <p style={{
        color: "rgba(255,255,255,0.22)", fontFamily: "var(--mono)",
        fontSize: "0.6rem", letterSpacing: "0.1em",
      }}>
        © Nikole Dixon. All rights reserved.
      </p>
    </footer>
  );
}
