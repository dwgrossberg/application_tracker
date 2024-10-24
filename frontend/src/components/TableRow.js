import { useState } from "react";
import classNames from "classnames";

const TableRow = () => {
  const [appliedStatus, setAppliedStatus] = useState(false);

  const handleCheck = () => {
    setAppliedStatus(!appliedStatus);
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
        <input type="checkbox" onChange={handleCheck}></input>
      </td>
      <td>Meta</td>
      <td>
        <a href="/">Backend Internship</a>
      </td>
      <td>Oct 19</td>
      <td>Mountain View, CA</td>
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
