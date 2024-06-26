import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";
import "./index.css";
const DisplayJobs = (props) => {
  const { jobsData } = props;

  return (
    <div>
      <li className="jobs-card-cont">
        <div className="icon-title-cont">
          <img className="jobs-logo" src={jobsData.company_logo_url}></img>
          <div className="title-rating-cont">
            <h4>{jobsData.title}</h4>
            <FaStar className="rating-icon" />
            <span>{jobsData.rating}</span>
          </div>
        </div>
        <div className="location-lpa-cont">
          <div>
            <FaLocationDot className="icons" />
            <span className="location">{jobsData.location}</span>
            <PiBagSimpleFill className="icons" />
            <span className="location">{jobsData.employment_type}</span>
          </div>
          <h4>{jobsData.package_per_annum}</h4>
        </div>
        <hr />
        <div>
          <h4>Discription</h4>
          <p>{jobsData.job_description}</p>
        </div>
      </li>
    </div>
  );
};
export default DisplayJobs;
