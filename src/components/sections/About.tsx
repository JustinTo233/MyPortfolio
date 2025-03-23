import "../../index.css";
import { motion } from "framer-motion";
import { ParticleAnimation } from "../ui/ParticleAnimation";

const skills = [
  { name: "typescript", icon: "/img/typescript.svg" },
  { name: "react", icon: "/img/react.svg" },
  { name: "react native", icon: "/img/react.svg" },
  { name: "node.js", icon: "/img/nodejs.svg" },
  { name: "tailwindcss", icon: "/img/tailwindcss.svg" },
  { name: "javascript", icon: "/img/javascript.svg" },
  { name: "java", icon: "/img/java.svg" },
  { name: "html", icon: "/img/html.svg" },
  { name: "css", icon: "/img/css.svg" },
  { name: "mongodb", icon: "/img/mongodb.svg" },
  { name: "expo", icon: "/img/expo.svg" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="pt-20 flex flex-col justify-center items-center px-4 sm:px-10"
    >
      <h1 className="about-heading section-heading">About</h1>
      <div className="profile-skills-container">
        <motion.div
          className="flex flex-col items-center text-center mb-10 lg:mb-0"
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          // animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src=""
            alt="Profile"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-6"
          />
          <p className="w-full sm:w-[500px] text-base sm:text-lg px-4">
            I'm a software engineer with a passion for JavaScript, React, and
            all things web development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              <div className="flex flex-col items-center justify-center px-6 py-2">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                <div className="text-xs sm:text-sm uppercase font-semibold tracking-widest mt-2 text-center">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
