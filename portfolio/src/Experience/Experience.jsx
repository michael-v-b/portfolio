import "./Experience.css";
import Job from "./Job";

const Experience = () => {
  return (
    <>
      <div className="experience-background">
        <div className="experience-container">
          <h1 className="experience-title"> Experience</h1>
          <hr />
          <Job
            title="Administrative Specialist"
            company="Mercer County Community College"
            range="June 2024 - August 2025"
            responsibilities={[
              "Managed, configured, and troubleshot internal software systems to enhance administrative workflows",
              "Analyzed large datasets using MS SQL, identifying inefficiencies and implementing improvements",
              "Assisted customers through the application process and direct them to the correct department if necessary",
              "Created secure user accounts and troubleshoot/resolved technical issues for staff and students",
              "Supported data integrity and efficient performance across multiple platforms",
            ]}
          />
          <hr />
          <Job
            title="Front Desk Manager"
            company="Code Ninjas"
            range="May 2022 - August 2022"
            responsibilities={[
              "Utilized custom software to teach children varying coding concepts using JavaScript",
              "Troubleshoot technical issues regarding Code Ninjas teaching platform, 3D Printer and other technology",
              "Designed organizational documents to keep track of over 60 children",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
