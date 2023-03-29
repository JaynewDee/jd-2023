import React, { useState } from "react";
import { DisplayProps } from "../../Portal";
import { TbClipboardCheck as List } from "react-icons/tb";
import IconTitle from "../partials/IconTitle";
import { IconType } from "react-icons";
import { languages, tools, SkillType } from "./data";
import {
  TiArrowLeft as ArrowLeft,
  TiArrowRight as ArrowRight
} from "react-icons/ti";

//
const skills: { [key: string]: { id: number; data: SkillType[] } } = {
  languages: { id: 0, data: languages },
  tools: { id: 1, data: tools }
};

console.dir(skills);
const SkillSwitch = (display: string) =>
  skills[display].data.map(({ name, Icon, level }, idx) =>
    Skill(name, Icon, level, idx)
  );

const Skill = (name: string, Icon: IconType, level: number, key: number) => {
  const styles = { "--bar-level": level } as React.CSSProperties;

  return (
    <div className="skill-box" key={key}>
      <div className="level-bar-outline">
        <div className="level-bar" data-level={level} style={styles}></div>
      </div>
      <span className="skill-icon">{Icon({ size: "1.33rem" })}</span>
      <span className="skill-name">{name}</span>
    </div>
  );
};

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  const [displayState, setDisplayState] = useState("languages");

  const disabler = (displayId: number | null = null) => {
    if (displayId) {
      if (displayId === 0 || displayId === Object.values(skills).length - 1)
        return true;
    }
    return false;
  };

  const handlePaging = (btnType: string) => {
    if (btnType === "right") {
      const currentState = Object.values(skills[displayState]);
      const currentId = currentState.filter(
        (tuple) => typeof tuple === "number"
      );
      console.log(currentState);
    }
  };

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("SKILLS", List)}
      </div>
      <div className="skill-switch-header">
        <button
          // @ts-ignore
          disabled={disabler(skills[displayState].id)}
          style={
            displayState === "languages"
              ? { pointerEvents: "none", opacity: ".67" }
              : {}
          }
          className="category-back-btn"
        >
          {ArrowLeft({})}
        </button>
        <h3>{displayState}</h3>
        <button
          className="category-next-btn"
          onClick={() => handlePaging("right")}
        >
          {ArrowRight({})}
        </button>
      </div>
      <div className="skills-container">{SkillSwitch(displayState)}</div>
    </div>
  );
};

export default Skills;
