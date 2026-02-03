import React from "react";
import "./Skills.css";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import mongo from "../assets/skills/mongodb.png";
import node from "../assets/skills/node.js.png";
import express from "../assets/skills/expressjs.png";
import git from "../assets/skills/git.png";
import ts from "../assets/skills/python.png";
import redux from "../assets/skills/postgresesql.png";
import api from "../assets/skills/tailwindcss.png";
import responsive from "../assets/skills/ml.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongo },
  { name: "GitHub", icon: git },
  { name: "Python", icon: ts },
  { name: "PostgreSQL", icon: redux },
  { name: "Tailwind CSS", icon: api },
  { name: "Machine Learning", icon: responsive },
];

const Skills = () => {
  return (
    <section id="skills"  className="skills-container">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img
              src={skill.icon}
              alt={skill.name}
              loading="lazy"
              decoding="async"
            />

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
