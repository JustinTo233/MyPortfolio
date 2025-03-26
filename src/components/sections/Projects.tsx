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
            A hybrid machine learning solution designed for environments with
            limited connectivity. It features a cloud-based server with a web UI
            and an offline mobile app powered by an image classification AI
            model.
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
          <h3 className="text-4xl mb-2">Pokédex</h3>
          <p>
            An interactive Pokédex built with React.js and CSS, featuring search
            functionality, type filtering, and detailed Pokémon stats.
            Integrated with PokéAPI for up-to-date information.
          </p>
          <a
            href="https://justinto233.github.io/PokeDex/"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
          <a
            href="https://github.com/JustinTo233/PokeDex/"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              src={images.timetodie}
              alt="Project Screenshot"
              className="project-image"
            ></img>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">Time To Die</h3>
          <p>
            A collaboration of 7 developers to design and develop a 2D roguelike
            game using Unity and C# during the Game Jam 2022.
          </p>
          <a
            href="https://oompakhanta.itch.io/time-to-die"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
          <a
            href="http://github.com/JustinTo233/Game_Jam_2022"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
      {/* Project #4 */}
      <div className="project-container project-right">
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">Tetris</h3>
          <p>
            A classic Tetirs remake built with Unity and C#. This project
            showcases skills in game logic, animations, and state management.
          </p>
          <a
            href="https://github.com/JustinTo233/TetrisACM/tree/main/Game%20Download"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
          <a
            href="https://github.com/JustinTo233/TetrisACM"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img
              src={images.tetris}
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
              src={images.todo}
              alt="Project Screenshot"
              className="project-image"
            ></img>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-4xl mb-2">To-Do List</h3>
          <p>
            A simple and intuitive task management app built with HTML, CSS, and
            JavaScript. Features include adding, editing, and deleting tasks.
          </p>
          <a
            href="https://github.com/JustinTo233/To-Do-List"
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
