
import React from "react";


const certificates = [
  {
    id: 1,
    title: "Google Cloud Certificate",
    issuer: "Google Cloud",
    description:
      "Certificate demonstrating learning and achievement in cloud computing.",
    file: "/certificates/google-cloud.pdf",
    type: "pdf",
    number: "01",
    icon: "☁",
  },
  {
    id: 2,
    title: "Web Developer Certification",
    issuer: "Infoyashonand Technology Pvt. Ltd.",
    description:
      "Certification related to web development skills.",
    file: "/certificates/web-developer.pdf",
    type: "pdf",
    number: "02",
    icon: "</>",
  },
  {
    id: 3,
    title: "SQL Database Certification",
    issuer: "Infosys Springboard",
    description:
      "Certificate related to SQL and database fundamentals.",
    file: "/certificates/sqlDatabase.pdf",
    type: "pdf",
    number: "03",
    icon: "▤",
  },
  
{
  id: 4,
  title: "LaTeX Training Certificate",
  issuer: "EduPyramids, SINE, IIT Bombay",
  description:
    "Completed LaTeX training and passed the associated online examination. Awarded 2 credits with a score of 64.44%.",
  file: "/certificates/latex-training.pdf",
  type: "pdf",
  number: "03",
  icon: "📄",
},

];

function Certifications({ theme }) {
  const colors = theme || {
    background: "#0b1020",
    surface: "#151d31",
    surfaceAlt: "#10182b",
    text: "#f8fafc",
    muted: "#a7b0c3",
    accent: "#a78bfa",
    accentSoft: "#251b45",
    border: "#273149",
    buttonBg: "#a78bfa",
    buttonText: "#111827",
  };

  const styles = {
    section: {
      background: colors.background,
      color: colors.text,
      padding: "65px 7% 75px",
      fontFamily: "Arial, sans-serif",
      minHeight: "auto",
      boxSizing: "border-box",
    },
    heading: {
      textAlign: "center",
      marginBottom: "12px",
      fontSize: "clamp(28px, 4vw, 40px)",
      fontWeight: "800",
    },
    accent: {
      color: colors.accent,
    },
    subtitle: {
      textAlign: "center",
      color: colors.muted,
      fontSize: "15px",
      lineHeight: 1.7,
      margin: "0 auto 40px",
      maxWidth: "600px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
      gap: "24px",
      maxWidth: "1150px",
      margin: "0 auto",
      alignItems: "stretch",
    },
    card: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: "18px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      transition: "transform 0.2s ease, border-color 0.2s ease",
    },
    preview: {
      height: "190px",
      background: colors.surfaceAlt,
      borderBottom: `1px solid ${colors.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "18px",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    previewPaper: {
      width: "100%",
      maxWidth: "260px",
      minHeight: "135px",
      padding: "18px",
      boxSizing: "border-box",
      background: colors.background,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "9px",
    },
    previewIcon: {
      fontSize: "30px",
      color: colors.accent,
      fontWeight: "700",
    },
    previewTitle: {
      fontSize: "14px",
      fontWeight: "700",
      color: colors.text,
    },
    previewNote: {
      fontSize: "11px",
      color: colors.muted,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
    },
    content: {
      padding: "22px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    number: {
      color: colors.accent,
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "2px",
      marginBottom: "12px",
    },
    title: {
      fontSize: "19px",
      lineHeight: 1.45,
      margin: "0 0 8px",
      overflowWrap: "anywhere",
    },
    issuer: {
      color: colors.accent,
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "14px",
      lineHeight: 1.5,
    },
    description: {
      color: colors.muted,
      fontSize: "14px",
      lineHeight: 1.7,
      margin: "0 0 22px",
      flex: 1,
    },
    button: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      width: "100%",
      padding: "12px 16px",
      borderRadius: "9px",
      background: colors.buttonBg || colors.accent,
      color: colors.buttonText || "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "700",
      boxSizing: "border-box",
      textAlign: "center",
    },
  };

  return (
    <section id="certifications" style={styles.section}>
      <h2 style={styles.heading}>
        My <span style={styles.accent}>Certifications</span>
      </h2>

      <p style={styles.subtitle}>
        Certificates and learning achievements that support my technical
        knowledge and professional growth.
      </p>

      <div style={styles.grid}>
        {certificates.map((certificate) => (
          <article key={certificate.id} style={styles.card}>
            <div style={styles.preview}>
              {certificate.type === "image" ? (
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                  aria-label={`Open ${certificate.title}`}
                >
                  <img
                    src={certificate.file}
                    alt={certificate.title}
                    style={styles.image}
                  />
                </a>
              ) : (
                <div style={styles.previewPaper}>
                  <div style={styles.previewIcon}>
                    {certificate.icon}
                  </div>
                  <div style={styles.previewTitle}>
                    {certificate.title}
                  </div>
                  <div style={styles.previewNote}>
                    {certificate.issuer}
                  </div>
                  <div style={styles.previewNote}>
                    PDF Certificate
                  </div>
                </div>
              )}
            </div>

            <div style={styles.content}>
              <div style={styles.number}>
                CERTIFICATE {certificate.number}
              </div>

              <h3 style={styles.title}>
                {certificate.title}
              </h3>

              <div style={styles.issuer}>
                {certificate.issuer}
              </div>

              <p style={styles.description}>
                {certificate.description}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
              >
                View Certificate ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
