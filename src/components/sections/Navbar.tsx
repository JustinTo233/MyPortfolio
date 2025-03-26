import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ active, setActive }: NavbarProps) => {
  const menuItems = ["Home", "About", "Projects", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto"; // Enable smooth scroll

    // Prevent smooth scroll on refresh
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth"; // Disable smooth scroll for page load
    }, 100);
  }, []);

  // Scroll handler to update the active state based on the section in view
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll("section");
        let currentSection = "Home";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 400;
          if (window.scrollY >= sectionTop) {
            currentSection =
              section.getAttribute("id")!.charAt(0).toUpperCase() +
              section.getAttribute("id")!.slice(1);
          }
        });

        setActive(currentSection);
      }, 100); // Debounce delay (adjust if needed)
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActive]);

  // Handle navigation item clicks and smooth scroll
  const handleClick = (item: string) => {
    setActive(item);
    document.getElementById(item.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <nav className="w-full bg-[#28395c] text-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-8 flex items-center justify-between">
        {/* Logo or Branding */}
        <div className="text-2xl font-semibold">My Portfolio</div>

        {/* Hamburger Icon for mobile */}
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 bg-[#28395c] h-full z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-semibold transition-colors p-4 ${
                  active === item ? "text-[#ffbe5a]" : "text-white"
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Menu Items (Desktop view) */}
        <div className="lg:flex space-x-8 hidden">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-lg font-semibold transition-colors ${
                active === item ? "text-[#ffbe5a]" : "text-white"
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
