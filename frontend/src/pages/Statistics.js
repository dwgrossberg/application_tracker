import { NavLink } from "react-router-dom";

const Statistics = ({applications, OAs, interviews, topCompanies, topPositions, topLocations}) => {
  console.log(applications);
  return (
    <div className="statisticsWrapper">
      <NavLink to="visualize">
        <button>Visualize Data</button>
      </NavLink>
      <div className="statistics">
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Total Applications</div>
            <div className="statistic">{applications}</div>
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Companies</div>
            <div className="statisticText">1. {topCompanies.length > 0 && topCompanies[0][0]}</div>
            <div className="statisticText">2. {topCompanies.length > 1 && topCompanies[1][0]}</div>
            <div className="statisticText">3. {topCompanies.length > 2 && topCompanies[2][0]}</div>
          </div>
        </div>
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Online Assessments</div>
            <div className="statistic">{OAs}</div>
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Positions</div>
            <div className="statisticText">1. {topPositions.length > 0 && topPositions[0][0]}</div>
            <div className="statisticText">2. {topPositions.length > 1 && topPositions[1][0]}</div>
            <div className="statisticText">3. {topPositions.length > 2 && topPositions[2][0]}</div>
          </div>
        </div>
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Interviews</div>
            <div className="statistic">{interviews}</div>
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Locations</div>
            <div className="statisticText">1. {topLocations.length > 0 && topLocations[0][0]}</div>
            <div className="statisticText">2. {topLocations.length > 1 && topLocations[1][0]}</div>
            <div className="statisticText">3. {topLocations.length > 2 && topLocations[2][0]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
