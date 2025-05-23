import "../../index.css";
import { motion } from "framer-motion";
import { ParticleAnimation } from "../ui/ParticleAnimation";
import { images } from "../../assets/images";

const skills = [
  { name: "typescript", icon: images.typescriptIcon },
  { name: "react/react native", icon: images.reactIcon },
  { name: "node.js", icon: images.nodejsIcon },
  { name: "tailwindcss", icon: images.tailwindcssIcon },
  { name: "javascript", icon: images.javascriptIcon },
  { name: "angular", icon: images.angularIcon },
  { name: "sass (scss)", icon: images.sassIcon },
  { name: "java", icon: images.javaIcon },
  { name: "html", icon: images.htmlIcon },
  { name: "css", icon: images.cssIcon },
  { name: "mongodb", icon: images.mongodbIcon },
  { name: "expo", icon: images.expoIcon },
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
          {/* <img
            src=""
            alt="Profile"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-6"
          /> */}
          <p className="w-full sm:w-[570px] text-base sm:text-lg px-4">
            I'm a CSULA graduate with a strong foundation in software
            engineering, specializing in front-end and web development. My
            passion for coding is matched by my likes for crafting intuitive and
            user-friendly web applications.
            <br />
            <br />
            In addition to my technical expertise, I enjoy exploring new ideas,
            particularly in the areas of UI/UX design. My hobbies reflect my
            diverse interests: I'm a gamer, keyboard enthusiast, and love to
            travel, hike, and explore new foods. I also stay active with tennis
            and badminton. These activities help me maintain a balance between
            creativity and physical well-being.
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
