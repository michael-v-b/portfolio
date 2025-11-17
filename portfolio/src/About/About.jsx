import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-header">About Me</h1>
        <div className="about-text-container">
          <div className="about-photo" />
          <div className="about-text">
            Hello! I’m Michael, and I'm an aspiring fullstack developer with a
            passion for web technologies. I’ve built several personal projects
            using JavaScript, React, and Node.js, focusing on clean code and
            responsive design. I’m eager to apply my skills in a professional
            setting and continue growing as a developer.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
