import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const sections = ["home", "about", "skills", "projects"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);

  const sectionRefs = useRef({});
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    sections.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        // 🔽 hide on scroll down, 🔼 show on scroll up
        if (currentScroll > lastScrollY.current && currentScroll > 120) {
          setHidden(true);
        } else {
          setHidden(false);
        }

        lastScrollY.current = currentScroll;

        // Active section logic
        if (currentScroll < 100) {
          setActive("home");
        } else {
          for (let section of sections) {
            const el = sectionRefs.current[section];
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActive((prev) => (prev === section ? prev : section));
              break;
            }
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
        className="navbar-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{
          y: hidden ? "-120%" : "0%",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
    >

      <ul className="navbar">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={active === section ? "active" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
