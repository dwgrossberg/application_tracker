import { Chart } from "react-google-charts";

const Sankey = ({ totalApps }) => {
  console.log(totalApps);
  const options = {
    sankey: {
      node: { label: { color: "#FFFFFF", fontSize: 14 } },
    },
  };

  const appData = [["From", "To", "Weight"]];

  for (const app of totalApps) {
    let latest = "";
    if (app["referral"] === true) {
      latest = "Referral";
    } else {
      latest = "Cold Application";
    }
    if (app["online-assessment"] === true) {
      appData.push([latest, "Online Assessment", 1]);
      latest = "Online Assessment";
    }
    if (app["phone-screen"] === true) {
      appData.push([latest, "Phone Screen", 1]);
      latest = "Phone Screen";
    }
    if (app["digital-interview"] === true) {
      appData.push([latest, "Digital Interview", 1]);
      latest = "Digital Interview";
    }
    if (app["interview-round"] === "One") {
      appData.push([latest, "First Interview", 1]);
      latest = "First Interview";
    } else if (app["interview-round"] === "Two") {
      appData.push([latest, "First Interview", 1]);
      appData.push(["First Interview", "Second Interview", 1]);
      latest = "Second Interview";
    } else if (app["interview-round"] === "Three") {
      appData.push([latest, "First Interview", 1]);
      appData.push(["First Interview", "Second Interview", 1]);
      appData.push(["Second Interview", "Third Interview", 1]);
      latest = "Third Interview";
    } else if (app["interview-round"] === "Four") {
      appData.push([latest, "First Interview", 1]);
      appData.push(["First Interview", "Second Interview", 1]);
      appData.push(["Second Interview", "Third Interview", 1]);
      appData.push(["Third Interview", "Fourth Interview", 1]);
      latest = "Fourth Interview";
    } else if (app["interview-round"] === "Five") {
      appData.push([latest, "First Interview", 1]);
      appData.push(["First Interview", "Second Interview", 1]);
      appData.push(["Second Interview", "Third Interview", 1]);
      appData.push(["Third Interview", "Fourth Interview", 1]);
      appData.push(["Fourth Interview", "Fifth Interview", 1]);
      latest = "Fifth Interview";
    }
    if (app["result"] === "No Response" || !app["result"]) {
      appData.push([latest, "No Response", 1]);
    } else if (app["result"] === "Rejection") {
      appData.push([latest, "Rejection", 1]);
    } else if (app["result"] === "In Process") {
      appData.push([latest, "In Process", 1]);
    } else if (app["result"] === "Verbal Offer") {
      appData.push([latest, "Verbal Offer", 1]);
    } else if (app["result"] === "Signed Offer") {
      appData.push([latest, "Signed Offer", 1]);
    }
  }
  console.log(appData);

  return (
    <Chart
      chartType="Sankey"
      width="75vw"
      height="50vh"
      data={appData}
      options={options}
    />
  );
};

export default Sankey;
