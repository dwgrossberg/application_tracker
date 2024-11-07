import { useState, useEffect } from "react";

const SearchBar = ({internships, setFilteredInternships}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = ((e) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);
    });

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredInternships(internships)
        } else {
            const filteredData = internships.filter((item) => {
                return item["company"].toLowerCase().includes(searchTerm)
            });
            setFilteredInternships(filteredData)
        }
    }, [searchTerm, internships])


  return (
    <div>
        <input type="text" name="searchBar" className="searchBar" value={searchTerm}
        placeholder="Search for internship listings by company or position" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;