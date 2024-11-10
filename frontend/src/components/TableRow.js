import classNames from "classnames";
import { useState } from "react";

const TableRow = ({data, filteredInternships, setFilteredInternships}) => {

  const [appliedStatus, setAppliedStatus] = useState(data["applied"])

  const monthNumberToString = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  }

  const handleCheckApplied = async (e) => {
    setAppliedStatus(!appliedStatus);

    const internshipToUpdate = filteredInternships.find(item => item["_id"]["$oid"] === data["_id"]["$oid"]);
    internshipToUpdate["applied"] = !appliedStatus;
    console.log(internshipToUpdate);

    const response = await fetch(`/api/internships/update/applied/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        applied: !appliedStatus
      }),
      headers: { "Content-Type": "application/json" }
    });
    if (response.status === 200) {
      console.log(`Information edited.`);
    } else {
      const errMessage = await response.json();
      console.log(
        `Unable to edit information: ${response.status}. ${errMessage.Error}`
      );
    }
  };

  const handleDelete = () => {
    window.alert(
      "Are you sure you want to delete this listing? Doing so will remove any linked data from your account."
    );
  };

  const rowClassNames = classNames({
    applied: appliedStatus,
  });

  return (
    <tr className={rowClassNames}>
      <td>
        <input type="checkbox" onChange={handleCheckApplied} checked={appliedStatus}></input>
      </td>
      <td>{data["company"]}</td>
      <td>
        {data["link"] !== "Application Closed" &&
        <a href={data["link"]} target="_blank" rel="noopener noreferrer">{data["position"]}</a>}
        {data["link"] === "Application Closed" &&
        <s>{data["position"]}</s> 
        }
      </td>
      <td>{monthNumberToString[data["date-posted"].slice(0,2)] + data["date-posted"].slice(2)}</td>
      <td>{data["location"]}</td>
      <td>
        <details>
          <summary>Details</summary>
          <div className="detailRow">
            <label htmlFor="dateApplied">Date Applied</label>
            <input className="detailBox" name="dateApplied" type="date" />
          </div>
          <div className="detailRow">
            <label htmlFor="referral">Referral</label>
            <input type="checkbox" name="referral"></input>
          </div>
          <div className="detailRow">
            <label htmlFor="onlineAssessment">Online Assessment</label>
            <input type="checkbox" name="onlineAssessment"></input>
          </div>
          <div className="detailRow">
            <label htmlFor="phoneScreen">Phone Screen</label>
            <input type="checkbox" name="phoneScreen"></input>
          </div>
          <div className="detailRow">
            <label htmlFor="interview">Interview Round</label>
            <select className="detailBox" name="interview">
              <option></option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
              <option>Five</option>
            </select>
          </div>
          <div className="detailRow">
            <label htmlFor="result">Result</label>
            <select className="detailBox" name="interview">
              <option></option>
              <option>No Response</option>
              <option>Rejection</option>
              <option>In Process</option>
              <option>Verbal Offer</option>
              <option>Signed Offer</option>
            </select>
          </div>
          <div className="detailRow">
            <button onClick={handleDelete}>Remove Listing</button>
          </div>
        </details>
      </td>
    </tr>
  );
};

export default TableRow;
