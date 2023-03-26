import { IconType } from "react-icons";

export const Title = (category: string) => {
  return (
    <div className="category-title-cell">
      <h4 className="category-title">{category.toUpperCase()}</h4>
    </div>
  );
};

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
