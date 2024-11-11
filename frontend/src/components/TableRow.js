import classNames from "classnames";
import { useState } from "react";

const TableRow = ({data, filteredInternships, setFilteredInternships}) => {

  const [appliedStatus, setAppliedStatus] = useState(data["applied"]);
  const [dateApplied, setDateApplied] = useState(data["date-applied"]);
  const [referral, setReferral] = useState(data["referral"]);
  const [OA, setOA] = useState(data["online-assessment"]);
  const [phoneScreen, setPhoneScreen] = useState(data["phone-screen"]);
  const [interviewRound, setInterviewRound] = useState(data["interview-round"]);
  const [result, setResult] = useState(data["result"]);

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

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "applied": !appliedStatus } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
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

  const handleDateApplied = async (e) => {
    setDateApplied(e.target.value);

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "date-applied": e.target.value } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        "date-applied": e.target.value
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

  const handleReferral = async (e) => {
    setReferral(!referral);

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "referral": !referral } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        referral: !referral
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

  const handleOA = async (e) => {
    setOA(!OA);

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "online-assessment": !OA } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        "online-assessment": !OA
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

  const handlePhoneScreen = async (e) => {
    setPhoneScreen(!phoneScreen);

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "phone-screen": !phoneScreen } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        "phone-screen": !phoneScreen
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

  const handleInterviewRound = async (e) => {
    setInterviewRound(e.target.value);

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "interview-round": e.target.value } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        "interview-round": e.target.value
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

  const handleResult = async (e) => {
    setResult(e.target.value);

    setFilteredInternships(filteredInternships => filteredInternships.map(item => item["_id"]["$oid"] === data["_id"]["$oid"] ? { ...item, "result": e.target.value } : item));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        "result": e.target.value
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
  
  const handleRemove = async (e) => {

    setFilteredInternships(filteredInternships.filter(item => item["_id"]["$oid"] !== data["_id"]["$oid"]));

    console.log(filteredInternships);

    const response = await fetch(`/api/internships/update/${data["_id"]["$oid"]}`, {
      method: "PUT",
      body: JSON.stringify({
        "remove": true
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

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this listing? Doing so will remove any linked data from your account.")) {
      console.log('confirmed');
      handleRemove()
    }
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
            <input className="detailBox" name="dateApplied" type="date" onChange={handleDateApplied} value={dateApplied} />
          </div>
          <div className="detailRow">
            <label htmlFor="referral">Referral</label>
            <input type="checkbox" name="referral" onChange={handleReferral} checked={referral}></input>
          </div>
          <div className="detailRow">
            <label htmlFor="onlineAssessment">Online Assessment</label>
            <input type="checkbox" name="onlineAssessment" onChange={handleOA} checked={OA}></input>
          </div>
          <div className="detailRow">
            <label htmlFor="phoneScreen">Phone Screen</label>
            <input type="checkbox" name="phoneScreen" onChange={handlePhoneScreen} checked={phoneScreen}></input>
          </div>
          <div className="detailRow">
            <label htmlFor="interview">Interview Round</label>
            <select className="detailBox" name="interview" onChange={handleInterviewRound} value={interviewRound}>
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
            <select className="detailBox" name="interview" onChange={handleResult} value={result}>
              <option></option>
              <option>No Response</option>
              <option>Rejection</option>
              <option>In Process</option>
              <option>Verbal Offer</option>
              <option>Signed Offer</option>
            </select>
          </div>
          <div className="detailRow">
            <button onClick={confirmDelete}>Remove Listing</button>
          </div>
        </details>
      </td>
    </tr>
  );
};

export default TableRow;
