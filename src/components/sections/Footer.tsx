import "../../index";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] py-8">
      <div className="container mx-auto flex justify-center items-center space-x-6">
        <a
          href="https://github.com/JustinTo233"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            className="text-white hover:text-gray-500"
            fontSize="large"
          />
        </a>
        <a
          href="https://linkedin.com/in/justinto233"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            className="text-white hover:text-gray-500"
            fontSize="large"
          />
        </a>
      </div>
      <div className="text-center text-gray-400 mt-4">Justin To &copy;2025</div>
    </footer>
  );
};
