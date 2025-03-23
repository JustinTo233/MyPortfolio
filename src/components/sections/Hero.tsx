import { motion } from "framer-motion";
import "../../index.css";
import { useEffect } from "react";

export const Hero = ({
  setActive,
}: {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const particlesContainer = document.getElementById("particles-container");
      if (!particlesContainer) return;

      // Limit particle generation rate
      if (!particlesContainer.dataset.lastGenTime)
        particlesContainer.dataset.lastGenTime = "0";
      const now = Date.now();
      if (now - Number(particlesContainer.dataset.lastGenTime) < 30) return; // 30 ms cooldown between particles
      particlesContainer.dataset.lastGenTime = now.toString();

      // Get mouse position as percentage of screen size
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      // Create temporary particle
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position at mouse
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.7";

      particlesContainer.appendChild(particle);

      // Animate outward
      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 15 - 7.5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 15 - 7.5)}%`;
        particle.style.opacity = "0";

        // Remove particle after animation
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);

      // Subtle movement of gradient spheres
      const spheres = document.querySelectorAll(".gradient-sphere");
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

      spheres.forEach((sphere) => {
        if (sphere instanceof HTMLElement) {
          // Ensure it's an HTML element
          sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });
    });
  }, []);

  return (
    <div
      id="home"
      className="hero-section relative flex flex-col items-center justify-center 
    h-screen text-center gap-4"
    >
      {/* Background Effects */}
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>

      <motion.h1
        className="text-7xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello I'm Justin
      </motion.h1>
      <motion.p className="text-2xl">
        Software Engineer & Web Developer
      </motion.p>
      <a
        className="group/button relative inline-flex items-center 
        justify-center overflow-hidden rounded-md bg-[#0550ba]/70 
        backdrop-blur-lg px-6 py-2 text-base font-semibold text-white 
        transition-all duration-300 ease-in-out hover:scale-110 
        hover:shadow-xl hover:shadow-[#0550ba]/20 border border-white/20 z-10"
        href="#about"
        onClick={() => {
          setActive("About"); // Update active state to "About"
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the About section
        }}
      >
        <span className="text-lg whitespace-nowrap">View my work</span>
        <div
          className="absolute inset-0 flex h-full w-full justify-center 
        [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 
        group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
          <div className="relative h-full w-10 bg-white/20"></div>
        </div>
      </a>
    </div>
  );
};
