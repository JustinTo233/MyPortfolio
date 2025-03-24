import "../../index.css";
import { images } from "../../assets/images";
import mindedemoVid from "../../assets/mindedemo.mp4";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-20 flex flex-col justify-center items-center px-4 sm:px-10"
    >
      <h2 className="projects-heading section-heading">Projects</h2>
      {/* Project #1 */}
      <div className="project-container project-left">
        <div className="project-image-container">
          <img src={images.seniordesign} alt="Project Screenshot"></img>
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">
            Machine Learning For Network-Denied Environment
          </h3>
          <p className="text-base">
            Full stack social media application built with react, node.js,
            express.js, mongodb, socket.io, and aws s3
          </p>
          <a
            href={mindedemoVid}
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
          <a
            href="https://github.com/kevinmaravillas/MobileClient"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
      {/* Project #2 */}
      <div className="project-container project-right">
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">Project #2</h3>
          <p>
            Full stack social media application built with react, node.js,
            express.js, mongodb, socket.io, and aws s3
          </p>
          <a href="#" className="project-btn">
            App
          </a>
          <a href="#" className="project-btn">
            Learn More
          </a>
        </div>
        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img
              src={images.pokedex}
              alt="Project Screenshot"
              className="project-image"
            ></img>
          </div>
        </div>
      </div>
      {/* Project #3 */}
      <div className="project-container project-left">
        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img
              src="img/pokedexhome.png"
              alt="Project Screenshot"
              className="project-image"
            ></img>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">Project #3</h3>
          <p>
            Full stack social media application built with react, node.js,
            express.js, mongodb, socket.io, and aws s3
          </p>
          <a href="#" className="project-btn">
            App
          </a>
          <a href="#" className="project-btn">
            Learn More
          </a>
        </div>
      </div>
      {/* Project #4 */}
      <div className="project-container project-right">
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">Project #4</h3>
          <p>
            Full stack social media application built with react, node.js,
            express.js, mongodb, socket.io, and aws s3
          </p>
          <a href="#" className="project-btn">
            App
          </a>
          <a href="#" className="project-btn">
            Learn More
          </a>
        </div>
        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img
              src={images.timetodie}
              alt="Project Screenshot"
              className="project-image"
            ></img>
          </div>
        </div>
      </div>
      {/* Project #5 */}
      <div className="project-container project-left">
        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img
              src={images.tetris}
              alt="Project Screenshot"
              className="project-image"
            ></img>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">Project #5</h3>
          <p>
            Full stack social media application built with react, node.js,
            express.js, mongodb, socket.io, and aws s3
          </p>
          <a href="#" className="project-btn">
            App
          </a>
          <a href="#" className="project-btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
