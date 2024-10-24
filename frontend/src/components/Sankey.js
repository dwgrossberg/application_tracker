import { Chart } from "react-google-charts";

export const data = [
  ["From", "To", "Weight"],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "Rejection", 1],
  ["Cold Application", "First Interview", 1],
  ["First Interview", "Second Interview", 1],
  ["Cold Application", "Phone Screen", 1],
  ["Cold Application", "Phone Screen", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Referral", "Phone Screen", 1],
  ["Referral", "Phone Screen", 1],
  ["Referral", "Phone Screen", 1],
  ["Phone Screen", "First Interview", 1],
  ["Referral", "Phone Screen", 1],
  ["Phone Screen", "First Interview", 1],
  ["Referral", "Phone Screen", 1],
  ["First Interview", "Rejection", 1],
  ["Referral", "Rejection", 1],
  ["Online Assessment", "Phone Screen", 1],
  ["Phone Screen", "First Interview", 1],
  ["First Interview", "Second Interview", 1],
  ["Second Interview", "Third Interview", 1],
  ["Third Interview", "Rejection", 1],
  ["Cold Application", "Online Assessment", 1],
  ["Phone Screen", "First Interview", 1],
  ["First Interview", "Second Interview", 1],
  ["Second Interview", "Third Interview", 1],
  ["Third Interview", "Offer", 1],
];

export const options = {
  sankey: {
    node: { label: { color: "#FFFFFF", fontSize: 14 } },
  },
};

const Sankey = () => {
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
};

export default Sankey;
