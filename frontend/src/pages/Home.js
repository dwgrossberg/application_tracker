import { useEffect, useState } from "react";
import MoreRows from "../components/MoreRows";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

const Home = ({
  internships,
  filteredInternships,
  setFilteredInternships,
  setInternships,
  rows,
  setRows,
}) => {
  const [openDetails, setOpenDetails] = useState({});

  return (
    <div>
      <SearchBar
        internships={internships}
        setFilteredInternships={setFilteredInternships}
        setOpenDetails={setOpenDetails}
      />
      <Table
        filteredInternships={filteredInternships}
        setFilteredInternships={setFilteredInternships}
        setInternships={setInternships}
        rows={rows}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
      {filteredInternships.length > 0 &&
        `Showing ${
          rows > filteredInternships.length ? filteredInternships.length : rows
        } of ${filteredInternships.length} internship listings`}
      <div>
        {rows < filteredInternships.length && (
          <MoreRows
            rows={rows}
            setRows={setRows}
            filteredInternships={filteredInternships}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
