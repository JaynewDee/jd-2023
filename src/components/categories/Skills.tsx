import React from "react";
import { DisplayProps } from "../../Portal";
import { TbClipboardCheck as List } from "react-icons/tb";
import IconTitle from "../partials/IconTitle";
import { IconType } from "react-icons";
import { SiJavascript } from "react-icons/si";

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
    level: 5
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    level: 3
  }
];

const Skill = (name: string, Icon: IconType, level: number, key: number) => (
  <div className="skill-box">
    <span>{name}</span>
    <span>{Icon({})}</span>
    <span>{level}</span>
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
