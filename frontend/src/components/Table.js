import CaretUp from "../assets/caret-up.svg";
import CaretDown from "../assets/caret-down.svg";
import CaretUpGrey from "../assets/caret-up-grey.svg";
import CaretDownGrey from "../assets/caret-down-grey.svg";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";

const Table = ({
  filteredInternships,
  setFilteredInternships,
  setInternships,
  rows,
  openDetails,
  setOpenDetails,
}) => {
  const [filterBy, setFilterBy] = useState("date-posted");

  const sortByApplied = (e) => {
    setFilterBy("applied");
    if (e.target.alt === "Up Caret") {
      e.target.alt = "Down Caret";
      e.target.src = CaretDown;
      const sorted = [...filteredInternships].sort((a, b) => {
        if (a["applied"] && !b["applied"]) return -1;
        if (!a["applied"] && b["applied"]) return 1;
        return 0;
      });
      setFilteredInternships(sorted);
    } else {
      e.target.alt = "Up Caret";
      e.target.src = CaretUp;
      const sorted = [...filteredInternships].sort((a, b) => {
        if (b["applied"] && !a["applied"]) return -1;
        if (!b["applied"] && a["applied"]) return 1;
        return 0;
      });
      setFilteredInternships(sorted);
    }
  };

  const sortByCompany = (e) => {
    setFilterBy("company");
    if (e.target.alt === "Up Caret") {
      e.target.alt = "Down Caret";
      e.target.src = CaretDown;
      const sorted = [...filteredInternships].sort((a, b) => {
        return a["company"].localeCompare(b["company"]);
      });
      setFilteredInternships(sorted);
    } else {
      e.target.alt = "Up Caret";
      e.target.src = CaretUp;
      const sorted = [...filteredInternships].sort((a, b) => {
        return b["company"].localeCompare(a["company"]);
      });
      setFilteredInternships(sorted);
    }
  };

  const sortByPosition = (e) => {
    setFilterBy("position");
    if (e.target.alt === "Up Caret") {
      e.target.alt = "Down Caret";
      e.target.src = CaretDown;
      const sorted = [...filteredInternships].sort((a, b) => {
        return a["position"].localeCompare(b["position"]);
      });
      setFilteredInternships(sorted);
    } else {
      e.target.alt = "Up Caret";
      e.target.src = CaretUp;
      const sorted = [...filteredInternships].sort((a, b) => {
        return b["position"].localeCompare(a["position"]);
      });
      setFilteredInternships(sorted);
    }
  };

  const sortByDate = (e) => {
    setFilterBy("date-posted");
    if (e.target.alt === "Up Caret") {
      e.target.alt = "Down Caret";
      e.target.src = CaretDown;
      const sorted = [...filteredInternships].sort((a, b) => {
        return new Date(b["date-posted"]) - new Date(a["date-posted"]);
      });
      setFilteredInternships(sorted);
    } else {
      e.target.alt = "Up Caret";
      e.target.src = CaretUp;
      const sorted = [...filteredInternships].sort((a, b) => {
        return new Date(a["date-posted"]) - new Date(b["date-posted"]);
      });
      setFilteredInternships(sorted);
    }
  };

  const sortByLocation = (e) => {
    setFilterBy("location");
    if (e.target.alt === "Up Caret") {
      e.target.alt = "Down Caret";
      e.target.src = CaretDown;
      const sorted = [...filteredInternships].sort((a, b) => {
        return a["location"].localeCompare(b["location"]);
      });
      setFilteredInternships(sorted);
    } else {
      e.target.alt = "Up Caret";
      e.target.src = CaretUp;
      const sorted = [...filteredInternships].sort((a, b) => {
        return b["location"].localeCompare(a["location"]);
      });
      setFilteredInternships(sorted);
    }
  };

  return (
    <table>
      <caption>Internship Listings</caption>
      <thead>
        <tr>
          <th>
            Applied
            <img
              className="svg"
              src={filterBy === "applied" ? CaretDown : CaretUpGrey}
              onClick={sortByApplied}
              alt="Up Caret"
            />
          </th>
          <th>
            Company
            <img
              className="svg"
              src={filterBy === "company" ? CaretDown : CaretUpGrey}
              alt="Up Caret"
              onClick={sortByCompany}
            />
          </th>
          <th>
            Position
            <img
              className="svg"
              src={filterBy === "position" ? CaretDown : CaretUpGrey}
              alt="Up Caret"
              onClick={sortByPosition}
            />
          </th>
          <th>
            Date Posted
            <img
              className="svg"
              src={filterBy === "date-posted" ? CaretDown : CaretUpGrey}
              alt="Down Caret"
              onClick={sortByDate}
            />
          </th>
          <th>
            Location
            <img
              className="svg"
              src={filterBy === "location" ? CaretDown : CaretUpGrey}
              alt="Up Caret"
              onClick={sortByLocation}
            />
          </th>
          <th>Application Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredInternships &&
          filteredInternships.slice(0, rows).map((item, idx) => {
            return (
              <TableRow
                key={idx}
                data={item}
                filteredInternships={filteredInternships}
                setFilteredInternships={setFilteredInternships}
                setInternships={setInternships}
                openDetails={openDetails}
                setOpenDetails={setOpenDetails}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
