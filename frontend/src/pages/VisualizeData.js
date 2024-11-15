import Sankey from "../components/Sankey";

const VisualizeData = ({totalApps}) => {
  return (
    <div>
      {totalApps.length > 0 && <Sankey totalApps={totalApps} />}
      {totalApps.length === 0 && "Not enough data to create sankey diagram."}
    </div>
  );
};

export default VisualizeData;
