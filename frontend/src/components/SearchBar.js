import { useState, useEffect } from "react";

const SearchBar = ({ internships, setFilteredInternships, setOpenDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredInternships(internships);
    } else {
      const filteredData = internships.filter((item) => {
        return (
          item["company"].toLowerCase().includes(searchTerm.toLowerCase()) ||
          item["position"].toLowerCase().includes(searchTerm.toLowerCase()) ||
          item["location"].toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredInternships(filteredData);
    }
    setOpenDetails({});
  }, [searchTerm, internships, setFilteredInternships, setOpenDetails]);

  return (
    <div>
      <input
        type="search"
        name="searchBar"
        className="searchBar"
        value={searchTerm}
        placeholder="Search for internship listings by company, position, or location"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
