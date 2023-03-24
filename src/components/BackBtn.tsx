import { BsArrow90DegLeft as BackArrow } from "react-icons/bs";

//

const BackBtn = ({ goBack }: { goBack: () => void }) => {
  return (
    <div className="back-btn grid-cell" onClick={goBack}>
      <h4 className="cell-title">
        {BackArrow({})}
        <span style={{ marginLeft: "2rem", fontSize: ".66rem" }}>back</span>
      </h4>
    </div>
  );
};

export default BackBtn;
