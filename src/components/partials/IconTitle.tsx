import Title from "./Title";
import { IconType } from "react-icons";

const IconTitle = (title: string, Icon: IconType, mirror: string = "") => {
  return (
    <div className="title-with-icons">
      {Icon({
        className: "title-icon",
        style: mirror === "left" ? { transform: "scaleX(-1)" } : {}
      })}
      {Title(title)}
      {Icon({
        className: "title-icon",
        style: mirror === "right" ? { transform: "scaleX(-1)" } : {}
      })}
    </div>
  );
};

export default IconTitle;
