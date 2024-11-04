import CarrotUp from "../assets/caret-up-svgrepo-com.svg";
import CarrotDown from "../assets/caret-down-svgrepo-com.svg";
import TableRow from "./TableRow";

const Table = ({internships, interval}) => {
  console.log(internships, interval)
  return (
    <table>
      <caption>2025 Internships</caption>
      <thead>
        <tr>
          <th>
            Applied
            <img className="svg" src={CarrotUp} alt="Up Carrot" />
          </th>
          <th>
            Company
            <img className="svg" src={CarrotUp} alt="Up Carrot" />
          </th>
          <th>
            Position
            <img className="svg" src={CarrotUp} alt="Up Carrot" />
          </th>
          <th>
            Date Posted
            <img className="svg" src={CarrotDown} alt="Down Carrot" />
          </th>
          <th>
            Location
            <img className="svg" src={CarrotUp} alt="Up Carrot" />
          </th>
          <th>Application Status</th>
        </tr>
      </thead>
      <tbody>
        {internships.slice(0, interval).map((item, idx) => {
            return (
              <TableRow key={idx} data={item} />
            )
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
