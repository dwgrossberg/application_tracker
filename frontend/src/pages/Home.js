import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

const Home = ({internships, filteredInternships, setFilteredInternships}) => {
  return (
    <div>
      <SearchBar internships={internships} setFilteredInternships={setFilteredInternships} />
      <Table filteredInternships={filteredInternships} />
    </div>
  );
};

export default Home;
