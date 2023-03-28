import React from "react";
import { DisplayProps } from "../../Portal";
import { TbClipboardCheck as List } from "react-icons/tb";
import IconTitle from "../partials/IconTitle";
import { IconType } from "react-icons";
import { SiJavascript, SiPython } from "react-icons/si";

//

type SkillType = {
  name: string;
  Icon: IconType;
  level: number;
};

const skillsData: SkillType[] = [
  {
    name: "JavaScript",
    Icon: SiJavascript,
    level: 7
  },
  {
    name: "Python",
    Icon: SiPython,
    level: 5
  }
];

const Skill = (name: string, Icon: IconType, level: number, key: number) => (
  <div className="skill-box" key={key}>
    <div className="level-bar-outline">
      <div className="level-bar" style={{ height: `${level * 2}vh` }}></div>
    </div>
    <span>{name}</span>
    <span>{Icon({})}</span>
  </div>
);

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("SKILLS", List)}
      </div>
      <div className="skills-container">
        {skillsData.map(({ name, Icon, level }, idx) =>
          Skill(name, Icon, level, idx)
        )}
      </div>
    </div>
  );
};

export default Skills;
