import "./Experience.css";

const Job = ({ title, company, range, responsibilities }) => {
  return (
    <>
      <div className="job">
        <h2 className="job-title">
          {title} - <span>{company}</span>
        </h2>
        <h3 className="job-time-range">{range}</h3>
        <ul>
          {responsibilities.map((value, index) => {
            return (
              <li key={index} className="job-responsibility">
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Job;
