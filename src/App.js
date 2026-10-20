
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark
    ? {
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
        buttonHover: "#8b5cf6",
      }
    : {
        background: "#f8fafc",
        surface: "#ffffff",
        surfaceAlt: "#eef2ff",
        text: "#172033",
        muted: "#596579",
        accent: "#6d4aff",
        accentSoft: "#ede9fe",
        border: "#dce2ed",
        buttonBg: "#6d4aff",
        buttonText: "#ffffff",
        buttonHover: "#5635df",
      };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.text,
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <Navbar
        theme={theme}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main>
        <section id="home" className="portfolio-section home-section">
  <Home theme={theme} />
</section>

<section id="skills" className="portfolio-section skills-section">
  <Skills theme={theme} />
</section>
        {/* <section id="home" style={{ scrollMarginTop: "85px" }}>
          <Home theme={theme} />
        </section>

        <section id="skills" style={{ scrollMarginTop: "85px" }}>
          <Skills theme={theme} />
        </section> */}

        <section id="projects" style={{ scrollMarginTop: "85px" }}>
          <Projects theme={theme} />
        </section>

        <section id="experience" style={{ scrollMarginTop: "85px" }}>
          <Experience theme={theme} />
        </section>

        <section id="certifications" style={{ scrollMarginTop: "85px" }}>
          <Certifications theme={theme} />
        </section>

        <section id="contact" style={{ scrollMarginTop: "85px" }}>
          <Contact theme={theme} />
        </section>
        
      </main>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
