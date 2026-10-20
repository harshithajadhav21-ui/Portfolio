
import React from "react";

function Home({ theme }) {
  const t = theme;

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "14px 23px",
    borderRadius: 30,
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 600,
    transition: "all 0.25s ease",
    cursor: "pointer"
  };

  const skills = [
    { icon: "</>", label: "Web Development" },
    { icon: "♧", label: "Problem Solving" },
    { icon: "▤", label: "Continuous Learning" }
  ];

  return (
    <section
      id="home"
      className="home-section"
      style={{
        background: t.background,
        color: t.text,
        minHeight: "calc(100vh - 75px)",
        padding: "55px 7% 0px",
        overflow: "hidden",
        position: "relative",
        transition: "background 0.3s ease, color 0.3s ease"
      }}
    >
      <style>{`
        .home-layout {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          align-items: center;
          gap: 55px;
          max-width: 1350px;
          margin: 0 auto;
        }

        .home-title {
          font-size: clamp(42px, 5.2vw, 76px);
          line-height: 1.12;
          letter-spacing: -2.5px;
          margin: 22px 0;
          overflow-wrap: anywhere;
        }

        .home-gradient-text {
          background: linear-gradient(110deg, #a78bfa, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .home-description {
          font-size: 17px;
          line-height: 1.9;
          max-width: 660px;
        }

        .home-photo-frame {
          width: min(100%, 390px);
          height: 490px;
          margin: 0 auto;
          padding: 7px;
          border: 2px solid #9870ff;
          border-radius: 35px;
          transform: rotate(3deg);
          position: relative;
          z-index: 1;
          background: ${t.surface};
          box-shadow: 0 25px 80px rgba(124, 58, 237, 0.22);
          transition: transform 0.3s ease;
        }

        .home-photo-frame:hover {
          transform: rotate(0deg) translateY(-5px);
        }

        .home-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 27px;
          display: block;
        }

        .home-primary-button:hover {
          transform: translateY(-3px);
          filter: brightness(1.08);
        }

        .home-secondary-button:hover {
          transform: translateY(-3px);
          background: ${t.surfaceAlt} !important;
          border-color: ${t.accent} !important;
        }

        .home-skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: ${t.muted};
        }

        @media (max-width: 900px) {
          .home-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .home-intro {
            text-align: center;
          }

          .home-description {
            margin-left: auto;
            margin-right: auto;
          }

          .home-meta,
          .home-buttons,
          .home-skills {
            justify-content: center !important;
          }

          .home-photo-frame {
            width: min(80%, 340px);
            height: 420px;
          }

          .home-title {
            letter-spacing: -1.5px;
          }
        }

        @media (max-width: 520px) {
          .home-section {
            padding: 40px 6% 0px !important;
          }

          .home-title {
            font-size: 43px;
          }

          .home-description {
            font-size: 15px;
          }

          .home-photo-frame {
            height: 350px;
          }

          .home-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .home-buttons a {
            width: 100%;
          }

          .home-skills {
            flex-direction: column;
            align-items: center;
            gap: 16px !important;
          }
        }
      `}</style>

      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 80,
          left: -150,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.10)",
          filter: "blur(90px)",
          pointerEvents: "none"
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -100,
          bottom: 30,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.10)",
          filter: "blur(85px)",
          pointerEvents: "none"
        }}
      />

      <div className="home-layout">
        {/* Left: Introduction */}
        <div
          className="home-intro"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: t.accentSoft,
              color: t.accent,
              border: `1px solid ${t.border}`,
              padding: "9px 17px",
              borderRadius: 30,
              fontSize: 15
            }}
          >
            <span>👋</span>
            Hello, I'm
          </div>

          <h1 className="home-title">
            Harshitha{" "}
            <span className="home-gradient-text">Jadhav</span>
          </h1>

          <h2
            style={{
              fontSize: "clamp(19px, 2.2vw, 28px)",
              lineHeight: 1.5,
              margin: "0 0 24px",
              fontWeight: 600,
              color: t.muted
            }}
          >
            B.Tech Computer Science Engineering Student
          </h2>

          {/* Education details */}
          <div
            className="home-meta"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px 20px",
              marginBottom: 27,
              fontSize: 14,
              color: t.muted
            }}
          >
            <span>
              🎓 Adarsh Institute of Technology and Research Centre, Vita
            </span>
            <span>📅 Expected Graduation: 2027</span>
          </div>

          <p
            className="home-description"
            style={{
              color: t.muted,
              marginTop: 0,
              marginBottom: 30
            }}
          >
            I'm a passionate Computer Science Engineering student interested
            in building innovative and user-friendly web applications. I enjoy
            learning new technologies, solving real-world problems, and
            turning ideas into practical digital solutions.
          </p>

          {/* Action buttons */}
          <div
            className="home-buttons"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              flexWrap: "wrap",
              marginBottom: 38
            }}
          >
            {/* <a
              href="#projects"
              className="home-primary-button"
              style={{
                ...buttonStyle,
                background: t.buttonBg || t.accent,
                color: t.buttonText || "#ffffff",
                border: `1px solid ${t.buttonBg || t.accent}`
              }}
            >
              <span>🚀</span>
              View My Projects
              <span>→</span>
            </a> */}

            {/* <a
              href="#contact"
              className="home-secondary-button"
              style={{
                ...buttonStyle,
                color: t.text,
                background: "transparent",
                border: `1px solid ${t.accent}`
              }}
            >
              <span>✉</span>
              Contact Me
            </a> */}

            {/* Resume button */}
            <a
              href="/certificates/HarshithaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="home-secondary-button"
              style={{
                ...buttonStyle,
                color: t.text,
                background: t.surface,
                border: `1px solid ${t.accent}`
              }}
            >
              <span>📄</span>
              View Resume
              <span>↗</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 30
            }}
          >
            <a
              href="https://www.linkedin.com/in/harshitha-jadhav-4a03462b4"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 16px",
                borderRadius: 25,
                border: `1px solid ${t.border}`,
                color: t.text,
                textDecoration: "none",
                background: t.surface,
                fontWeight: 600,
                fontSize: 14
              }}
            >
              in LinkedIn ↗
            </a>

            <a
              href="https://github.com/harshithajadhav21-ui"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 16px",
                borderRadius: 25,
                border: `1px solid ${t.border}`,
                color: t.text,
                textDecoration: "none",
                background: t.surface,
                fontWeight: 600,
                fontSize: 14
              }}
            >
              GitHub ↗
            </a>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=harshithajadhav2103@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: "10px 16px",
    borderRadius: 25,
    border: `1px solid ${t.border}`,
    color: t.text,
    textDecoration: "none",
    background: t.surface,
    fontWeight: 600,
    fontSize: 14
  }}
>
  ✉ Email Me
</a>
          </div>

          {/* Highlights */}
          <div
            className="home-skills"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 23
            }}
          >
            {skills.map((skill) => (
              <div className="home-skill-item" key={skill.label}>
                <span
                  style={{
                    color: t.accent,
                    fontSize: 22,
                    fontWeight: 700
                  }}
                >
                  {skill.icon}
                </span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile photo */}
        <div
          style={{
            position: "relative",
            padding: "25px 0",
            maxWidth: 440,
            width: "100%",
            margin: "0 auto"
          }}
        >
          {/* Background decorative shape */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "3% 5%",
              borderRadius: 38,
              background: t.accentSoft,
              border: `1px solid ${t.border}`,
              transform: "rotate(-7deg)"
            }}
          />

          {/* Profile photo */}
          <div className="home-photo-frame">
            <img
              src="/profile.jpg"
              alt="Portrait of Harshitha Jadhav"
              className="home-photo"
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 2,
              color: t.accent,
              fontSize: 44
            }}
            aria-hidden="true"
          >
            ✦
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: -5,
              zIndex: 2,
              padding: "10px 15px",
              borderRadius: 15,
              background: t.surface,
              color: t.accent,
              border: `1px solid ${t.border}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              fontWeight: 600,
              fontSize: 14
            }}
          >
            ✨ Let's build together
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
