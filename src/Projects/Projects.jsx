import Project from "./Project";
import weavel from "../assets/projects/weavel.png";
import ml from "../assets/projects/ml.png";
import solitaire from "../assets/projects/solitaire.png";
import sorter from "../assets/projects/sorter.png";
import "./Projects.css";

const Projects = ({ hue }) => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-title">Projects</div>
        <Project
          hue={hue}
          picture={weavel}
          title="Weavel Crochet"
          description="A 3D CAD (Computer Aided Design) webservice created using React and Three-js to create amigurumi designs and download a custom crochet pattern to bring it to life. 
          It features account creation, save functionality, and CI/CD principles. 
          Weavel Crochet also utilizes Supabase as a backend and Vercel as a hosting platform.
          Give it a try and make your own patterns!"
          position="left"
        />
        <Project
          hue={hue}
          picture={ml}
          title="Machine Learning Visualizer"
          description="An educational website that explains various important concepts in Machine Learning and AI, such as gradient descent and linear regresssion. 
          It was programmed using TypeScript React, with animated svgs created using Rive."
          position="right"
        />
        <Project
          hue={hue}
          picture={sorter}
          title="Sorting Algorithm Visualizer"
          description="An educational tool to visualize common sorting algorithms coded in C# using the Unity Game Engine. It features strong UI/UX elements and 
          showcases a variety of different algorithms including Selection, Bubble Sort, Merge Sort and Radix Sort."
        />
        <Project
          hue={hue}
          picture={solitaire}
          title="Solitaire"
          description="A recreation of the popular game Solitaire coded in C# using the Unity Game Engine. 
          It heavily features elements of UI/UX, data structures such as stacks and queues, with an object oriented approach."
          position="right"
        />
      </div>
    </>
  );
};
export default Projects;
