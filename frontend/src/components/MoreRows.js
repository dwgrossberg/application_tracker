import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const MoreRows = ({rows, setRows, filteredInternships}) => {
    const handleClick = () => {
        if (rows + 100 < filteredInternships.length) {
            setRows(rows + 150);
        } else {
            setRows(filteredInternships.length)
        }
    }
  return (
    <div>
      <Link to="#" onClick={handleClick}>Load more</Link> | <HashLink to="#top">Go to top</HashLink>
    </div>
  );
};

export default MoreRows;
