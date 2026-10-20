import React from "react";

function Experience({ theme }) {
  const colors = theme || {
    background: "#0b1020",
    surface: "#151d31",
    text: "#f8fafc",
    muted: "#a7b0c3",
    accent: "#a78bfa",
    border: "#273149",
  };

  const experiences = [
    {
      role: "Data Science and AIML Intern",
      company: "YBI Foundation",
      duration: "July 2024 · 2 Weeks",
      description:
        "Completed a two-week internship focused on Data Science and Artificial Intelligence and Machine Learning.",
      certificate: "/certificates/ybi-aiml-internship.pdf",
      certificateLabel: "View Internship Certificate",
    },
    {
      role: "Web Development Intern",
      company: "InfoYashonand Technology Pvt. Ltd.",
      duration: "Add your internship dates",
      description:
        "Gained practical exposure to web development through internship training and related project work.",
      certificate: "/certificates/web-development-internship.pdf",
      certificateLabel: "View Internship Letter",
    },
  ];

  const styles = {
    section: {
      background: colors.background,
      color: colors.text,
      padding: "65px 7% 75px",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
    },
    heading: {
      textAlign: "center",
      fontSize: "clamp(30px, 4vw, 42px)",
      fontWeight: "800",
      margin: "0 0 14px",
    },
    accent: {
      color: colors.accent,
    },
    subtitle: {
      textAlign: "center",
      color: colors.muted,
      fontSize: "15px",
      lineHeight: 1.8,
      maxWidth: "600px",
      margin: "0 auto 40px",
    },
    list: {
      maxWidth: "850px",
      margin: "0 auto",
      display: "grid",
      gap: "24px",
    },
    card: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: "18px",
      padding: "28px",
      transition: "transform 0.2s ease, border-color 0.2s ease",
    },
    role: {
      fontSize: "21px",
      margin: "0 0 10px",
    },
    company: {
      color: colors.accent,
      fontSize: "16px",
      fontWeight: "700",
      margin: "0 0 8px",
    },
    duration: {
      color: colors.muted,
      fontSize: "13px",
      marginBottom: "16px",
    },
    description: {
      color: colors.muted,
      fontSize: "14px",
      lineHeight: 1.8,
      margin: "0 0 20px",
    },
    button: {
      display: "inline-block",
      background: colors.accent,
      color: "#111827",
      padding: "11px 16px",
      borderRadius: "9px",
      fontSize: "14px",
      fontWeight: "700",
      textDecoration: "none",
    },
  };

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>
        My <span style={styles.accent}>Experience</span>
      </h2>

      <p style={styles.subtitle}>
        My internship experience and professional learning journey.
      </p>

      <div style={styles.list}>
        {experiences.map((experience) => (
          <article
            key={experience.role}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = colors.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = colors.border;
            }}
          >
            <h3 style={styles.role}>{experience.role}</h3>

            <p style={styles.company}>{experience.company}</p>

            <div style={styles.duration}>{experience.duration}</div>

            <p style={styles.description}>
              {experience.description}
            </p>

            <a
              href={experience.certificate}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              {experience.certificateLabel} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;