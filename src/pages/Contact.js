import React from "react";

function Contact({ theme }) {
  const colors = theme || {
    background: "#0b1020",
    surface: "#151d31",
    text: "#f8fafc",
    muted: "#a7b0c3",
    accent: "#a78bfa",
    border: "#273149",
  };

  const contacts = [
    {
      title: "Email",
      detail: "harshithajadhav2103@gmail.com",
      description:
        "Have an opportunity or project idea? Feel free to send me an email.",
      icon: "✉",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=harshithajadhav2103@gmail.com",
      action: "Send an Email",
    },
    {
      title: "LinkedIn",
      detail: "Connect with me professionally",
      description:
        "Let's connect, share ideas, and build professional relationships.",
      icon: "in",
      link: "https://www.linkedin.com/in/harshitha-jadhav-4a03462b4/",
      action: "View LinkedIn Profile",
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
      maxWidth: "570px",
      margin: "0 auto 40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(min(100%, 280px), 360px))",
      justifyContent: "center",
      gap: "24px",
      maxWidth: "800px",
      margin: "0 auto",
    },

    card: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: "18px",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      boxSizing: "border-box",
      minWidth: 0,
      transition: "transform 0.2s ease, border-color 0.2s ease",
    },

    icon: {
      width: "54px",
      height: "54px",
      borderRadius: "15px",
      background: `${colors.accent}20`,
      color: colors.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      fontWeight: "800",
      marginBottom: "22px",
    },

    title: {
      fontSize: "22px",
      margin: "0 0 10px",
    },

    detail: {
      color: colors.accent,
      fontSize: "14px",
      fontWeight: "600",
      overflowWrap: "anywhere",
      marginBottom: "12px",
    },

    description: {
      color: colors.muted,
      fontSize: "14px",
      lineHeight: 1.8,
      margin: "0 0 24px",
    },

    link: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      background: colors.accent,
      color: "#111827",
      padding: "12px 18px",
      borderRadius: "9px",
      fontSize: "14px",
      fontWeight: "700",
      textDecoration: "none",
      marginTop: "auto",
      transition: "opacity 0.2s ease, transform 0.2s ease",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>
        Let's <span style={styles.accent}>Connect</span>
      </h2>

      <p style={styles.subtitle}>
        I'm open to new opportunities, collaborations, and meaningful
        connections. Feel free to reach out!
      </p>

      <div style={styles.grid}>
        {contacts.map((contact) => (
          <article
            key={contact.title}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = colors.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = colors.border;
            }}
          >
            <div style={styles.icon}>{contact.icon}</div>

            <h3 style={styles.title}>{contact.title}</h3>

            <div style={styles.detail}>{contact.detail}</div>

            <p style={styles.description}>{contact.description}</p>

            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              aria-label={contact.action}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {contact.action} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Contact;