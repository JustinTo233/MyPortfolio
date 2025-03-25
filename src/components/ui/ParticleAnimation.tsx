import React, { useEffect } from "react";
import "../../index";

export const ParticleAnimation = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) return;

    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer!.appendChild(particle);
      animateParticle(particle);
    }

    function resetParticle(particle: HTMLElement) {
      const posX = Math.random() * 90;
      const posY = Math.random() * 90;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";
    }

    function animateParticle(particle: HTMLElement) {
      resetParticle(particle);

      const duration = Math.random() * 10 + 10;

      // Start animation immediately without delay
      particle.style.transition = `all ${duration}s linear`;
      particle.style.opacity = (Math.random() * 0.3 + 0.1).toString(); // Set opacity to a random value

      const moveX = Math.random() * 20 - 10;
      const moveY = -Math.random() * 30;

      particle.style.transform = `translate(${moveX}%, ${moveY}%)`;

      // Repeat the animation after the duration ends
      setTimeout(() => animateParticle(particle), duration * 1000);
    }
  }, []);

  return <div className="particles-container" id="particles-container"></div>;
};
