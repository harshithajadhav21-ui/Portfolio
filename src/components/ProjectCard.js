
import React from "react";
function ProjectCard({
  title,
  category,
  description,
  technology,
  theme = {
    surface: "#151d31",
    text: "#f8fafc",
    border: "#273149",
    muted: "#a7b0c3",
    accent: "#a78bfa",
    accentSoft: "#251b45"
  }
}) {
  return (
    <article style={{
      background: theme.surface,
      color: theme.text,
      border: `1px solid ${theme.border}`,
      borderRadius: 16,
      padding: 26,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minWidth: 0,
      transition: "transform 0.2s, box-shadow 0.2s"
    }}>
      <span style={{
        color: theme.accent,
        fontSize: 13,
        fontWeight: "bold"
      }}>
        {category}
      </span>

      <h3 style={{ fontSize: 22, margin: 0 }}>
        {title}
      </h3>

      <p style={{
        color: theme.muted,
        lineHeight: 1.8,
        flexGrow: 1
      }}>
        {description}
      </p>

      <p style={{
        background: theme.accentSoft,
        color: theme.accent,
        padding: 10,
        borderRadius: 8,
        fontSize: 13
      }}>
        {technology}
      </p>
    </article>
  );
}

export default ProjectCard;
