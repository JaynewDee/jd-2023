import { useEffect } from "react";
import { BsArrow90DegLeft as BackArrow } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

//

const BackBtn = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleBackEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Home") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleBackEvent);

    return () => window.removeEventListener("keydown", handleBackEvent);
  }, []);

  return (
    <div className="back-btn" onClick={() => navigate(-1)}>
      <h4 style={{ marginTop: ".33rem" }} className="cell-title">
        {BackArrow({})}
        <span style={{ marginLeft: "1rem", fontSize: ".66rem" }}>BACK</span>
      </h4>
    </div>
  );
};

export default BackBtn;
