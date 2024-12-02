import { NavLink } from "react-router-dom";

const Statistics = ({
  applications,
  OAs,
  interviews,
  topCompanies,
  topPositions,
  topLocations,
}) => {
  return (
    <div className="statisticsWrapper">
      <NavLink to="visualize">
        <button>Visualize Data</button>
      </NavLink>
      <div className="statistics">
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Total Applications</div>
            {applications ? (
              <div className="statistic">{applications}</div>
            ) : (
              <div className="statistic">0</div>
            )}
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Companies</div>
            {topCompanies && topCompanies.length > 0 && (
              <div className="statisticText">
                1. {topCompanies.length > 0 && topCompanies[0][0]}
              </div>
            )}
            {topCompanies && topCompanies.length > 1 && (
              <div className="statisticText">
                2. {topCompanies.length > 1 && topCompanies[1][0]}
              </div>
            )}
            {topCompanies && topCompanies.length > 2 && (
              <div className="statisticText">
                3. {topCompanies.length > 2 && topCompanies[2][0]}
              </div>
            )}
          </div>
        </div>
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Online Assessments</div>
            {OAs ? (
              <div className="statistic">{OAs}</div>
            ) : (
              <div className="statistic">0</div>
            )}
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Positions</div>
            {topPositions && topPositions.length > 0 && (
              <div className="statisticText">1. {topPositions[0][0]}</div>
            )}
            {topPositions && topPositions.length > 1 && (
              <div className="statisticText">
                2. {topPositions.length > 1 && topPositions[1][0]}
              </div>
            )}
            {topPositions && topPositions.length > 2 && (
              <div className="statisticText">
                3. {topPositions.length > 2 && topPositions[2][0]}
              </div>
            )}
          </div>
        </div>
        <div className="statisticsCol">
          <div className="statisticsCell">
            <div className="statisticLabel">Interviews</div>
            {interviews ? (
              <div className="statistic">{interviews}</div>
            ) : (
              <div className="statistic">0</div>
            )}
          </div>
          <div className="statisticsCell">
            <div className="statisticLabel">Top Locations</div>
            {topLocations && topLocations.length > 0 && (
              <div className="statisticText">
                1. {topLocations.length > 0 && topLocations[0][0]}
              </div>
            )}
            {topLocations && topLocations.length > 1 && (
              <div className="statisticText">
                2. {topLocations.length > 1 && topLocations[1][0]}
              </div>
            )}
            {topLocations && topLocations.length > 2 && (
              <div className="statisticText">
                3. {topLocations.length > 2 && topLocations[2][0]}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
