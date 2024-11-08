import MoreRows from "../components/MoreRows";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { HashLink } from 'react-router-hash-link';

const Home = ({internships, filteredInternships, setFilteredInternships, rows, setRows}) => {
  return (
    <div>
      <SearchBar internships={internships} setFilteredInternships={setFilteredInternships} />
      <Table filteredInternships={filteredInternships} rows={rows} />
      Showing {rows} of {internships.length} internship listings
      <div>{rows < internships.length && <MoreRows rows={rows} setRows={setRows} internships={internships} />}</div>
    </div>
  );
};

export default Home;
