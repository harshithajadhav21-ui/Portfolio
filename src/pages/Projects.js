
import React from "react";

function ProjectPreview({ type, theme }) {
  const t = theme;

  const panel = {
    background: t.surface,
    border: `1px solid ${t.border}`,
    borderRadius: "9px",
    padding: "12px",
  };

  const muted = { color: t.muted };
  const smallText = { fontSize: "10px", color: t.muted };

  const pill = (background, color) => ({
    background,
    color,
    borderRadius: "5px",
    padding: "4px 7px",
    fontSize: "9px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  });

  return (
    <div
      style={{
        height: "235px",
        overflow: "hidden",
        padding: "13px",
        background: t.surfaceAlt,
        borderBottom: `1px solid ${t.border}`,
        boxSizing: "border-box",
      }}
    >
      {/* E-BLOOD BANK PREVIEW */}
      {type === "blood" && (
        <div
          style={{
            ...panel,
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
              marginBottom: "13px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "21px" }}>🩸</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 800 }}>
                  BloodConnect
                </div>
                <div style={smallText}>Blood bank dashboard</div>
              </div>
            </div>

            <span style={pill("#fee2e2", "#b91c1c")}>
              LIVE UI
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "7px",
            }}
          >
            {[
              ["🩸", "Blood Units", "248"],
              ["👥", "Donors", "624"],
              ["🏥", "Hospitals", "68"],
            ].map(([icon, label, value]) => (
              <div
                key={label}
                style={{ ...panel, padding: "9px 6px" }}
              >
                <div style={{ fontSize: "14px" }}>{icon}</div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    marginTop: "4px",
                  }}
                >
                  {value}
                </div>
                <div style={{ ...smallText, marginTop: "3px" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "11px",
              fontWeight: 750,
              margin: "13px 0 8px",
            }}
          >
            Recent blood requests
          </div>

          {[
            ["City Hospital", "O+", "#fee2e2", "#b91c1c"],
            ["Care Medical", "B+", "#dbeafe", "#1d4ed8"],
          ].map(([hospital, group, bg, fg]) => (
            <div
              key={hospital}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "6px",
                borderTop: `1px solid ${t.border}`,
                padding: "8px 0",
                fontSize: "10px",
              }}
            >
              <span>{hospital}</span>
              <span style={pill(bg, fg)}>{group}</span>
              <span style={pill("#fef3c7", "#92400e")}>
                Pending
              </span>
            </div>
          ))}
        </div>
      )}

      {/* CUSTOMER ISSUE CLASSIFIER PREVIEW */}
      {type === "classifier" && (
        <div
          style={{
            ...panel,
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            <div>
              <div style={{ fontSize: "12px", fontWeight: 800 }}>
                Issue Intelligence
              </div>
              <div style={smallText}>
                Customer complaint analytics
              </div>
            </div>

            <span style={pill("#ede9fe", "#6d28d9")}>
              ML SYSTEM
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "7px",
            }}
          >
            {[
              ["Total Issues", "1,248"],
              ["High Priority", "186"],
              ["Resolved", "892"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{ ...panel, padding: "9px 6px" }}
              >
                <div
                  style={{ ...smallText, lineHeight: 1.4 }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    marginTop: "5px",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "11px",
              fontWeight: 750,
              margin: "13px 0 8px",
            }}
          >
            Complaint categories
          </div>

          {[
            ["Payment / Refund", 82, "#8b5cf6"],
            ["Delivery", 65, "#3b82f6"],
            ["Product Return", 47, "#14b8a6"],
          ].map(([label, amount, color]) => (
            <div key={label} style={{ marginBottom: "9px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "10px",
                  marginBottom: "4px",
                  gap: "6px",
                }}
              >
                <span>{label}</span>
                <span style={muted}>{amount}%</span>
              </div>

              <div
                style={{
                  background: t.surfaceAlt,
                  height: "6px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${amount}%`,
                    height: "100%",
                    background: color,
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* JOB PORTAL PREVIEW */}
      {type === "jobs" && (
        <div
          style={{
            ...panel,
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
              marginBottom: "13px",
            }}
          >
            <div>
              <div style={{ fontSize: "13px", fontWeight: 800 }}>
                CareerSpace
              </div>
              <div style={smallText}>
                Find your next opportunity
              </div>
            </div>

            <span style={pill("#dbeafe", "#1d4ed8")}>
              JOBS
            </span>
          </div>

          <div
            style={{
              border: `1px solid ${t.border}`,
              borderRadius: "7px",
              padding: "9px",
              fontSize: "10px",
              color: t.muted,
              marginBottom: "12px",
            }}
          >
            🔎 Search jobs, skills or companies...
          </div>

          <div
            style={{
              fontSize: "11px",
              fontWeight: 750,
              marginBottom: "8px",
            }}
          >
            Featured opportunities
          </div>

          {[
            ["💻", "Frontend Developer", "Tech Solutions", "Full-time"],
            ["📊", "Data Analyst", "Analytics Co.", "Hybrid"],
            ["⚙️", "Software Engineer", "Digital Labs", "Remote"],
          ].map(([icon, title, company, typeLabel]) => (
            <div
              key={title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                padding: "9px 0",
                borderTop: `1px solid ${t.border}`,
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: t.surfaceAlt,
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>

              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: "10px", fontWeight: 750 }}>
                  {title}
                </div>
                <div style={{ ...smallText, marginTop: "3px" }}>
                  {company}
                </div>
              </div>

              <span style={pill("#dcfce7", "#166534")}>
                {typeLabel}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Projects({ theme }) {
  const t = theme;

  const projects = [
    {
      title: "E-Blood Bank Management System",
      category: "Web Development",
      type: "blood",
      description:
        "A web application for managing blood donors and hospital blood requests. Built to make donor information and request management easier.",
      technologies: ["React.js", "JavaScript", "Firebase", "CSS"],
      github: "", // Add your actual GitHub repository URL here later
      number: "01",
    },
    {
      title: "Customer Issue Classifier",
      category: "AI / Machine Learning",
      type: "classifier",
      description:
        "A complaint classification application that categorizes online shopping issues, identifies priority levels, and helps organize customer complaints.",
      technologies: ["Python", "Machine Learning", "Flask", "Matplotlib"],
      github: "", // Add your actual GitHub repository URL here later
      number: "02",
    },
    {
      title: "Job Portal",
      category: "Web Development",
      type: "jobs",
      description:
        "A web application for exploring job opportunities and organizing job listings, with a React interface and Firebase integration.",
      technologies: ["React.js", "JavaScript", "Firebase", "CSS"],
      github: "", // Add your actual GitHub repository URL here later
      number: "03",
    },
  ];

  const styles = {
    section: {
      background: t.background,
      color: t.text,
      minHeight: "100vh",
      padding: "85px 7% 100px",
      boxSizing: "border-box",
      transition: "background 0.3s ease, color 0.3s ease",
    },

    container: {
      maxWidth: "1180px",
      margin: "0 auto",
    },

    eyebrow: {
      color: t.accent,
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "14px",
    },

    heading: {
      fontSize: "clamp(34px, 5vw, 52px)",
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-1.5px",
      margin: "0 0 16px",
    },

    intro: {
      color: t.muted,
      fontSize: "15px",
      lineHeight: 1.8,
      maxWidth: "660px",
      margin: "0 auto",
    },

    grid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
      gap: "25px",
      marginTop: "48px",
      alignItems: "stretch",
    },

    card: {
      background: t.surface,
      border: `1px solid ${t.border}`,
      borderRadius: "17px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      transition: "transform 0.25s ease, border-color 0.25s ease",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flex: 1,
      padding: "23px",
    },

    category: {
      color: t.accent,
      fontSize: "11px",
      fontWeight: 800,
      letterSpacing: "1.3px",
      textTransform: "uppercase",
      marginBottom: "10px",
    },

    title: {
      fontSize: "20px",
      fontWeight: 800,
      lineHeight: 1.4,
      margin: "0 0 12px",
    },

    description: {
      color: t.muted,
      fontSize: "13px",
      lineHeight: 1.85,
      margin: "0 0 20px",
    },

    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "7px",
      marginBottom: "23px",
    },

    tag: {
      background: t.accentSoft,
      color: t.accent,
      borderRadius: "6px",
      padding: "7px 9px",
      fontSize: "10px",
      fontWeight: 700,
    },

    footer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "9px",
      marginTop: "auto",
      width: "100%",
    },

    githubButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "11px 15px",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: 750,
      textDecoration: "none",
      border: "1px solid transparent",
      color: t.buttonText || "#ffffff",
      background: t.buttonBg || t.accent,
      boxSizing: "border-box",
      transition: "opacity 0.2s ease",
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <style>{`
        .project-card:hover {
          transform: translateY(-6px);
          border-color: ${t.accent} !important;
        }

        .project-action:hover {
          opacity: 0.82;
        }

        @media (max-width: 600px) {
          .projects-section {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>

      <div className="projects-section" style={styles.container}>
        <div style={{ textAlign: "center" }}>
          <p style={styles.eyebrow}>My Work</p>

          <h1 style={styles.heading}>
            Featured <span style={{ color: t.accent }}>Projects</span>
          </h1>

          <p style={styles.intro}>
            A selection of projects showcasing my interests in web
            development, Python, and machine learning.
          </p>
        </div>

        <div style={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card"
              style={styles.card}
            >
              <div style={{ position: "relative" }}>
                <ProjectPreview type={project.type} theme={t} />

                <span
                  style={{
                    position: "absolute",
                    top: "22px",
                    left: "22px",
                    background: t.background,
                    color: t.text,
                    border: `1px solid ${t.border}`,
                    borderRadius: "7px",
                    padding: "5px 8px",
                    fontSize: "10px",
                    fontWeight: 800,
                  }}
                >
                  PROJECT {project.number}
                </span>
              </div>

              <div style={styles.content}>
                <span style={styles.category}>
                  {project.category}
                </span>

                <h2 style={styles.title}>{project.title}</h2>

                <p style={styles.description}>
                  {project.description}
                </p>

                <div style={styles.tags}>
                  {project.technologies.map((technology) => (
                    <span key={technology} style={styles.tag}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub button */}
                <div style={styles.footer}>
                  <a
                    href={project.github || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.githubButton,
                      opacity: project.github ? 1 : 0.65,
                      cursor: project.github
                        ? "pointer"
                        : "not-allowed",
                    }}
                    className="project-action"
                    onClick={(e) => {
                      if (!project.github) {
                        e.preventDefault();
                      }
                    }}
                    aria-disabled={!project.github}
                    title={
                      project.github
                        ? "View GitHub repository"
                        : "GitHub "
                    }
                  >
                    <span style={{ marginRight: "7px" }}>⌘</span>
                    {project.github
                      ? "View on GitHub ↗"
                      : "GitHub "}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          style={{
            color: t.muted,
            fontSize: "12px",
            lineHeight: 1.8,
            textAlign: "center",
            marginTop: "32px",
          }}
        >
          Project previews are illustrative interface designs.
          GitHub repository links will be added soon.
        </p>
      </div>
    </section>
  );
}

export default Projects;
