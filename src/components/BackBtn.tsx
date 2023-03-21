import { BsArrow90DegLeft as BackArrow } from "react-icons/bs";

//

const BackBtn = ({ goBack }: { goBack: () => void }) => {
  return (
    <div className="back-btn grid-cell" onClick={goBack}>
      <h4 className="cell-title">{BackArrow({})}</h4>
    </div>
  );
};

export default BackBtn;
