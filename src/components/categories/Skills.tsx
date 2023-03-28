import React from "react";
import { DisplayProps } from "../../Portal";
import { TbClipboardCheck as List, TbFileArrowLeft } from "react-icons/tb";
import IconTitle from "../partials/IconTitle";
import { IconType } from "react-icons";
import { SiJavascript, SiPython, SiRust } from "react-icons/si";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
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
    level: 8
  },
  {
    name: "Python",
    Icon: SiPython,
    level: 5
  },
  {
    name: "Rust",
    Icon: SiRust,
    level: 5
  }
];

const Skill = (name: string, Icon: IconType, level: number, key: number) => (
  <div className="skill-box" key={key} style={{ width: `15%` }}>
    <div className="level-bar-outline">
      <div className="level-bar" style={{ height: `${level * 2}vh` }}></div>
    </div>
    <span>{Icon({ size: "1.33rem" })}</span>
    <span
      style={{
        textAlign: "center",
        writingMode: "vertical-lr",
        position: "absolute",
        transform: "rotate(180deg)",
        marginBottom: ""
      }}
    >
      {name}
    </span>
  </div>
);

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("SKILLS", List)}
      </div>
      <div className="skill-switch-header">
        <button className="category-back-btn">{TiArrowLeft({})}</button>
        <h3>Programming</h3>
        <button className="category-next-btn">{TiArrowRight({})}</button>
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
