import React from "react";
import { FlippingCard } from "./ui/FlippingCard";
import "./Project.css";
import cafeteriaImg from "../assets/cafe.jpg";
import RestaurantImg from "../assets/restaurant.jpg";
import PwaImg from "../assets/pwa.jpg";
import GamingImg from "../assets/gaming.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Cafeteria Website",
      description: "Modern, responsive restaurant website with premium UI, smooth animations, and strong brand-focused design.",
      image: cafeteriaImg,
      link: "https://cafeteria-web-h99e.vercel.app/",
    },
    {
      title: "Restaurant Website",
      description: "Clean and responsive restaurant web interface built with reusable components and smooth user experience.",
      image: RestaurantImg,
      link: "https://restaurant-web-beige.vercel.app/",
    },
    {
      title: "Progressive Web App",
      description: "Fast and reliable Progressive Web App with offline support and app-like user experience.",
      image: PwaImg,
      link: "https://pwa-2-0.vercel.app/",
    },
    {
      title: "Gaming Website",
      description: "Immersive gaming website featuring bold visuals, interactive UI, and performance-optimized layouts.",
      image: GamingImg,
      link: "https://gaming-website-2-0.vercel.app/code.html",
    },
    {
      title: "Gaming Website",
      description: "Immersive gaming website featuring bold visuals, interactive UI, and performance-optimized layouts.",
      image: GamingImg,
      link: "https://gaming-website-2-0.vercel.app/code.html",
    },
  ];

  return (
    <div id="projects"  className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <FlippingCard
            key={index}
            frontContent={
              <div className="project-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />

                <h3 className="project-title">{project.title}</h3>
              </div>
            }
            backContent={
              <div className="project-back">
                <p className="project-desc">{project.description}</p>
                <a href={project.link} className="project-action">
                  View Project
                </a>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;


