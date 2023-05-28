import { BsArrow90DegLeft as BackArrow } from "react-icons/bs";

//

type BackFn = { goBack: () => void };

const BackBtn = ({ goBack }: BackFn) => {
  return (
    <div className="back-btn" onClick={goBack}>
      <h4 style={{ marginTop: ".33rem" }} className="cell-title">
        {BackArrow({})}
        <span style={{ marginLeft: "1rem", fontSize: ".66rem" }}>BACK</span>
      </h4>
    </div>
  );
};

export default BackBtn;
