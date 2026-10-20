
import React from "react";

function Footer({ theme }) {
  const t = theme || {
    background: "#0b1020",
    text: "#f8fafc",
    muted: "#a7b0c3",
    border: "#273149",
    accent: "#a78bfa",
  };

  return (
    <footer
      style={{
        background: t.background,
        color: t.text,
        borderTop: `1px solid ${t.border}`,
        padding: "38px 20px 22px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "55px",
          height: "4px",
          borderRadius: "10px",
          margin: "0 auto 22px",
          background: `linear-gradient(90deg, ${t.accent}, #ec4899)`,
        }}
      />

      <p
        style={{
          fontSize: "13px",
          color: t.muted,
          margin: "0 0 8px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Thanks for visiting
      </p>

      <h2
        style={{
          fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: "700",
          letterSpacing: "-1px",
          margin: "0 0 12px",
        }}
      >
        Harshitha{" "}
        <span style={{ color: t.accent }}>Jadhav.</span>
      </h2>

      <p
        style={{
          fontSize: "13px",
          color: t.muted,
          margin: "0 0 25px",
          lineHeight: "1.8",
        }}
      >
        Every great idea starts somewhere.
        <br />
        This is one chapter. More exciting things are on the way.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "7px",
          marginBottom: "22px",
        }}
      >
        {[0, 1, 2, 3, 4].map((item) => (
          <span
            key={item}
            style={{
              display: "block",
              width: item === 2 ? "25px" : "7px",
              height: "7px",
              borderRadius: "10px",
              background: item === 2 ? t.accent : t.border,
            }}
          />
        ))}
      </div>

      <div
        style={{
          borderTop: `1px solid ${t.border}`,
          paddingTop: "17px",
          color: t.muted,
          fontSize: "12px",
        }}
      >
        © {new Date().getFullYear()} · Made with curiosity and creativity.
      </div>
    </footer>
  );
}

export default Footer;
