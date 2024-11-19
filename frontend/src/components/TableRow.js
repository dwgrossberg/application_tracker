import classNames from "classnames";
import { useEffect, useState } from "react";

const TableRow = ({
  data,
  filteredInternships,
  setFilteredInternships,
  setInternships,
  openDetails,
  setOpenDetails,
}) => {
  const [appliedStatus, setAppliedStatus] = useState(
    data ? data["applied"] : ""
  );
  const [dateApplied, setDateApplied] = useState(
    data ? data["date-applied"] : ""
  );
  const [referral, setReferral] = useState(data ? data["referral"] : "");
  const [OA, setOA] = useState(data ? data["online-assessment"] : "");
  const [phoneScreen, setPhoneScreen] = useState(
    data ? data["phone-screen"] : ""
  );
  const [digitalInterview, setDigitalInterview] = useState(
    data ? data["digital-interview"] : ""
  );
  const [interviewRound, setInterviewRound] = useState(
    data ? data["interview-round"] : ""
  );
  const [result, setResult] = useState(data ? data["result"] : "");

  useEffect(() => {
    setAppliedStatus(data["applied"]);
    setDateApplied(data["date-applied"]);
    setReferral(data["referral"]);
    setOA(data["online-assessment"]);
    setPhoneScreen(data["phone-screen"]);
    setDigitalInterview(data["digital-interview"]);
    setInterviewRound(data["interview-round"]);
    setResult(data["result"]);
  }, [filteredInternships, data]);

  const monthNumberToString = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const updateData = async (id, data) => {
    try {
      const response = await fetch(`/api/internships/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log(`Information edited.`);
      } else {
        const errMessage = await response.json();
        console.log(
          `Unable to edit information: ${response.status}. ${errMessage.Error}`
        );
      }
    } catch (e) {
      if (!(e instanceof Error)) {
        e = new Error(e);
      }
      console.error(e.message);
    }
  };

  const toggleDetails = (e) => {
    e.preventDefault();
    setOpenDetails({
      ...openDetails,
      [data["_id"]["$oid"]]: !openDetails[data["_id"]["$oid"]],
    });
  };

  const handleCheckApplied = () => {
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, applied: !appliedStatus }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { applied: !appliedStatus });
    setAppliedStatus(!appliedStatus);
  };

  const handleDateApplied = (e) => {
    setDateApplied(e.target.value);
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, "date-applied": e.target.value }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { "date-applied": e.target.value });
  };

  const handleReferral = () => {
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, referral: !referral }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { referral: !referral });
    setReferral(!referral);
  };

  const handleOA = () => {
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, "online-assessment": !OA }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { "online-assessment": !OA });
    setOA(!OA);
  };

  const handlePhoneScreen = () => {
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, "phone-screen": !phoneScreen }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { "phone-screen": !phoneScreen });
    setPhoneScreen(!phoneScreen);
  };

  const handleDigitalInterview = () => {
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, "digital-interview": !digitalInterview }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { "digital-interview": !digitalInterview });
    setDigitalInterview(!digitalInterview);
  };

  const handleInterviewRound = (e) => {
    setInterviewRound(e.target.value);
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, "interview-round": e.target.value }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { "interview-round": e.target.value });
  };

  const handleResult = (e) => {
    setResult(e.target.value);
    const update = (filteredInternships) =>
      filteredInternships.map((item) =>
        item["_id"]["$oid"] === data["_id"]["$oid"]
          ? { ...item, result: e.target.value }
          : item
      );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { result: e.target.value });
  };

  const handleRemove = () => {
    const update = filteredInternships.filter(
      (item) => item["_id"]["$oid"] !== data["_id"]["$oid"]
    );
    setFilteredInternships(update);
    setInternships(update);
    updateData(data["_id"]["$oid"], { remove: true });
  };

  const confirmDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this listing? Doing so will remove any linked data from your account."
      )
    ) {
      console.log("confirmed");
      handleRemove();
    }
  };

  const rowClassNames = classNames({
    applied: appliedStatus,
  });

  return (
    <tr className={rowClassNames}>
      <td>
        <input
          type="checkbox"
          onChange={handleCheckApplied}
          checked={appliedStatus}
          value={appliedStatus}
        ></input>
      </td>
      <td>{data["company"]}</td>
      <td>
        {data["link"] !== "Application Closed" && (
          <a href={data["link"]} target="_blank" rel="noopener noreferrer">
            {data["position"]}
          </a>
        )}
        {data["link"] === "Application Closed" && <s>{data["position"]}</s>}
      </td>
      <td>
        {monthNumberToString[data["date-posted"].slice(0, 2)] +
          data["date-posted"].slice(2)}
      </td>
      <td>{data["location"]}</td>
      <td>
        <details open={openDetails[data["_id"]["$oid"]]}>
          <summary onClick={toggleDetails}>Details</summary>
          <div className="detailRow">
            <label htmlFor="dateApplied">Date Applied</label>
            <input
              className="detailBox"
              name="dateApplied"
              type="date"
              onChange={handleDateApplied}
              value={dateApplied}
            />
          </div>
          <div className="detailRow">
            <label htmlFor="referral">Referral</label>
            <input
              type="checkbox"
              name="referral"
              onChange={handleReferral}
              checked={referral}
              value={referral}
            ></input>
          </div>
          <div className="detailRow">
            <label htmlFor="onlineAssessment">Online Assessment</label>
            <input
              type="checkbox"
              name="onlineAssessment"
              onChange={handleOA}
              checked={OA}
              value={OA}
            ></input>
          </div>
          <div className="detailRow">
            <label htmlFor="digitalInterview">Digital Interview</label>
            <input
              type="checkbox"
              name="digitalInterview"
              onChange={handleDigitalInterview}
              checked={digitalInterview}
              value={digitalInterview}
            ></input>
          </div>
          <div className="detailRow">
            <label htmlFor="phoneScreen">Phone Screen</label>
            <input
              type="checkbox"
              name="phoneScreen"
              onChange={handlePhoneScreen}
              checked={phoneScreen}
              value={phoneScreen}
            ></input>
          </div>
          <div className="detailRow">
            <label htmlFor="interview">Interview Round</label>
            <select
              className="detailBox"
              name="interview"
              onChange={handleInterviewRound}
              value={interviewRound}
            >
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
            <select
              className="detailBox"
              name="interview"
              onChange={handleResult}
              value={result}
            >
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
