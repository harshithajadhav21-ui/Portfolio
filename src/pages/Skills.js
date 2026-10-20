
import React from "react";

function Skills({ theme }) {
  const t = theme || {
    background: "#0b1020",
    surface: "#151d31",
    text: "#f8fafc",
    muted: "#a7b0c3",
    accent: "#a78bfa",
    border: "#273149",
  };

  const categories = [
    {
      title: "Programming Languages",
      icon: "⌘",
      skills: ["Python", "JavaScript", "C", "SQL"],
    },
    {
      title: "Frontend Development",
      icon: "◈",
      skills: ["HTML5", "CSS3", "React.js", "Responsive Design"],
    },
    {
      title: "Backend & Database",
      icon: "▤",
      skills: ["Firebase", "Firebase Realtime Database"],
    },
    {
      title: "Tools & Concepts",
      icon: "⚙",
      skills: [
        "VS Code",
        "Git",
        "REST API Basics",
        // "Machine Learning Concepts",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "85px 8%",
        background: t.background,
        color: t.text,
      }}
    >
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin-top: 35px;
        }

        .skills-card {
          padding: 27px;
          border: 1px solid;
          border-radius: 18px;
          transition: transform .2s, border-color .2s;
        }

        .skills-card:hover {
          transform: translateY(-4px);
        }

        .skill-chip {
          padding: 10px 13px;
          border-radius: 9px;
          border: 1px solid;
          font-size: 13px;
          font-weight: 600;
        }

        @media (max-width: 650px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <p
          style={{
            color: t.accent,
            fontWeight: 800,
            letterSpacing: 2,
            fontSize: 13,
          }}
        >
          WHAT I WORK WITH
        </p>

        <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", margin: "12px 0" }}>
          Technical <span style={{ color: t.accent }}>Skills</span>
        </h2>

        <p
          style={{
            color: t.muted,
            lineHeight: 1.8,
            maxWidth: 700,
          }}
        >
          Technologies and concepts I have explored through learning
          and project development.
        </p>

        <div className="skills-grid">
          {categories.map((category) => (
            <div
              className="skills-card"
              key={category.title}
              style={{
                background: t.surface,
                borderColor: t.border,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 13,
                  background: t.background,
                  color: t.accent,
                  fontSize: 25,
                  marginBottom: 20,
                }}
              >
                {category.icon}
              </div>

              <h3 style={{ fontSize: 19, marginBottom: 20 }}>
                {category.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip"
                    style={{
                      color: t.text,
                      background: t.background,
                      borderColor: t.border,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            padding: 23,
            borderLeft: `4px solid ${t.accent}`,
            borderRadius: 10,
            background: t.surface,
          }}
        >
          <h3 style={{ marginTop: 0 }}>Always learning</h3>
          <p style={{ color: t.muted, lineHeight: 1.8, marginBottom: 0 }}>
            I'm continuing to strengthen my programming fundamentals,
            explore new technologies, and improve the quality of the
            applications I build.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
