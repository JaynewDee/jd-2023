import { BsArrow90DegLeft as BackArrow } from "react-icons/bs";

//

const BackBtn = ({ goBack }: { goBack: () => void }) => {
  return (
    <div className="back-btn" onClick={goBack}>
      <h4 className="cell-title">
        {BackArrow({})}
        <span style={{ marginLeft: "1rem", fontSize: ".66rem" }}>back</span>
      </h4>
    </div>
  );
};

export default BackBtn;
