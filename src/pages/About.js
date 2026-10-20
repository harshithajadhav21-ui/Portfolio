
// import React from "react";

// function About({ theme }) {
//   const t = theme || {
//     background: "#0b1020",
//     surface: "#151d31",
//     surfaceAlt: "#10182b",
//     text: "#f8fafc",
//     muted: "#a7b0c3",
//     accent: "#a78bfa",
//     accentSoft: "#251b45",
//     border: "#273149",
//   };

//   const highlights = [
//     {
//       icon: "🎓",
//       title: "My Education",
//       description:
//         "Pursuing B.Tech in Computer Science Engineering, with an expected graduation year of 2027.",
//     },
//     {
//       icon: "💻",
//       title: "My Development Journey",
//       description:
//         "Building practical applications using web technologies, databases, and programming.",
//     },
//     {
//       icon: "🧠",
//       title: "My Interests",
//       description:
//         "Interested in software development, Python, AI/ML, and solving real-world problems through technology.",
//     },
//     {
//       icon: "🚀",
//       title: "My Goal",
//       description:
//         "To strengthen my technical skills, gain practical experience, and grow into a capable software developer.",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       style={{
//         background: t.background,
//         color: t.text,
//         padding: "85px 8%",
//       }}
//     >
//       <style>{`
//         .about-grid {
//           display: grid;
//           grid-template-columns: repeat(2, minmax(0, 1fr));
//           gap: 20px;
//           margin-top: 35px;
//         }

//         .about-card {
//           padding: 25px;
//           border: 1px solid;
//           border-radius: 17px;
//           transition: transform .2s, border-color .2s;
//         }

//         .about-card:hover {
//           transform: translateY(-4px);
//         }

//         .about-icon {
//           font-size: 27px;
//           margin-bottom: 12px;
//         }

//         @media (max-width: 650px) {
//           .about-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>

//       <div style={{ maxWidth: 1100, margin: "auto" }}>
//         <p
//           style={{
//             color: t.accent,
//             fontWeight: 800,
//             letterSpacing: 2,
//             fontSize: 13,
//           }}
//         >
//           GET TO KNOW ME
//         </p>

//         <h2
//           style={{
//             fontSize: "clamp(30px, 4vw, 44px)",
//             margin: "12px 0 20px",
//           }}
//         >
//           About <span style={{ color: t.accent }}>Me</span>
//         </h2>

//         <p
//           style={{
//             color: t.muted,
//             fontSize: 17,
//             lineHeight: 1.9,
//             maxWidth: 850,
//           }}
//         >
//           I'm Harshitha Jadhav, a Computer Science Engineering student
//           pursuing my B.Tech at Adarsh Institute of Technology and
//           Research Centre, Vita, with an expected graduation year of
//           2027. I enjoy learning how technology works and applying
//           that knowledge to build useful applications.
//         </p>

//         <p
//           style={{
//             color: t.muted,
//             fontSize: 16,
//             lineHeight: 1.9,
//             maxWidth: 850,
//           }}
//         >
//           Through my projects, I have explored web development with
//           React and Firebase, along with Python-based programming and
//           machine learning concepts. I aim to improve my problem-solving
//           abilities, write clearer code, and build applications that
//           address practical needs.
//         </p>

//         <div className="about-grid">
//           {highlights.map((item) => (
//             <div
//               key={item.title}
//               className="about-card"
//               style={{
//                 background: t.surface,
//                 borderColor: t.border,
//               }}
//             >
//               <div className="about-icon">{item.icon}</div>

//               <h3 style={{ fontSize: 19, margin: "0 0 10px" }}>
//                 {item.title}
//               </h3>

//               <p
//                 style={{
//                   color: t.muted,
//                   lineHeight: 1.8,
//                   margin: 0,
//                   fontSize: 14,
//                 }}
//               >
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div
//           style={{
//             marginTop: 28,
//             padding: 24,
//             borderRadius: 16,
//             border: `1px solid ${t.border}`,
//             background: t.surfaceAlt,
//           }}
//         >
//           <p style={{ color: t.accent, fontWeight: 700, marginTop: 0 }}>
//             EDUCATION
//           </p>

//           <h3 style={{ marginBottom: 8 }}>
//             B.Tech — Computer Science Engineering
//           </h3>

//           <p style={{ color: t.muted, lineHeight: 1.8, marginBottom: 8 }}>
//             Adarsh Institute of Technology and Research Centre, Vita
//           </p>

//           <p style={{ color: t.muted, marginBottom: 0 }}>
//             Expected graduation: 2027
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
