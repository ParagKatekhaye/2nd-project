// const Home = ({ personDetails }) => {
//   return (
//     <div>
//       <h1>Home Section</h1>
//       {personDetails.map((person, index) => (
//         <div key={index}>
//           <h1>Name: {person.name}</h1>
//           <p>Age: {person.age}</p>
//           <p>Course: {person.course}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Home;

import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-cont">
        <div className="home-content-cont">
          <h1>Find the job that Fit your Life</h1>
          <p>
            millions of people searching for job,salary information, company
            reviews. Find the job that fits your abilities and potential
          </p>
          <Link to="/jobs">
            <button onClick=" " className="btn btn-info">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
