import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import BackBtn from "../components/BackBtn";
import IconTitle from "../components/IconTitle";
import { useViewportQuery } from "../hooks";

//

const Resume = () => {
  const [width, _] = useViewportQuery();

  const resumeSrc = "./Joshua_Diehl_Resume.pdf";

  return (
    <div className="category-container">
      <div className="category-header">
        {BackBtn()}
        {IconTitle("RESUME", Journal, "left")}
      </div>
      {
        width > 768 ?
          <div className="resume">
            <iframe
              src={resumeSrc}
              title="Resume iframe"
              width="100%"
              height="48rem"
            />
          </div>
          :
          <div className="mobile-resume">
            <a href={resumeSrc} target="_blank">VIEW</a>
            <a href={resumeSrc} download="Joshua_Diehl_Resume">DOWNLOAD</a>
          </div>
      }
    </div>
  );
};

export default Resume;
