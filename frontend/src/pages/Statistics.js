import { NavLink } from "react-router-dom";

const Statistics = () => {
  return (
    <div className="statisticsWrapper">
      <NavLink to="visualize">
        <button>Visualize Data</button>
      </NavLink>
      <div className="statistics">
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Total Applications</div>
            <div className="statistic">219</div>
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Companies</div>
            <div className="statisticText">1. Amazon</div>
            <div className="statisticText">2. DataDog</div>
            <div className="statisticText">3. NASA</div>
          </div>
        </div>
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Online Assessments</div>
            <div className="statistic">23</div>
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Positions</div>
            <div className="statisticText">1. Backend Intern</div>
            <div className="statisticText">2. Data Engineering Intern</div>
            <div className="statisticText">3. Full Stack Intern</div>
          </div>
        </div>
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Interviews</div>
            <div className="statistic">3</div>
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Locations</div>
            <div className="statisticText">1. Atlanta, GA</div>
            <div className="statisticText">2. Cupertino, CA</div>
            <div className="statisticText">3. Chicago, IL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
