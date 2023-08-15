import React, { useState } from "react";
import { DisplayProps } from "../../../Portal";
import { TbClipboardCheck as List } from "react-icons/tb";
import IconTitle from "../../IconTitle";
import { IconType } from "react-icons";
import { descriptionSwitch } from "../data";
import { languages, tech, misc, SkillType } from "./data";
import {
  TiArrowLeft as ArrowLeft,
  TiArrowRight as ArrowRight,
} from "react-icons/ti";

//
import "./Tools.css";
//

const tools: { [key: string]: { id: number; data: SkillType[] } } = {
  Languages: { id: 0, data: languages },
  Tools: { id: 1, data: tech },
  Misc: { id: 2, data: misc },
};

const ToolSwitch = (display: string) =>
  tools[display].data.map(({ name, Icon }, idx) => Tool(name, Icon, idx));

const Tool = (name: string, Icon: IconType, key: number) => {
  return (
    <div className="skill-box" key={key}>
      <span data-descr={descriptionSwitch(name)} className="skill-icon">
        {Icon({ size: "1.33rem" })}
        {name}
      </span>
    </div>
  );
};

const Tools: React.FC<DisplayProps> = ({ backBtn }) => {
  const [displayState, setDisplayState] = useState("Languages");

  const disabler = (displayId: number | null = null) => {
    if (displayId) {
      if (displayId === 0 || displayId === Object.values(tools).length)
        return true;
    }
    return false;
  };

  const handlePaging = (btnType: string) => {
    const currentState = Object.values(tools[displayState]);
    const currentId = currentState.filter(
      (tuple) => typeof tuple === "number",
    )[0];

    if (btnType === "right") {
      for (const t in tools) {
        if (tools[t].id === (currentId as number) + 1) {
          setDisplayState(t);
        }
      }
    } else {
      for (const t in tools) {
        if (tools[t].id === (currentId as number) - 1) {
          setDisplayState(t);
        }
      }
    }
  };

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("Tools", List)}
      </div>
      <div className="skill-switch-header">
        <button
          type="button"
          onClick={() => handlePaging("left")}
          disabled={disabler(tools[displayState].id)}
          style={
            tools[displayState].id === 0
              ? { pointerEvents: "none", opacity: ".5" }
              : {}
          }
          className="category-back-btn"
        >
          {ArrowLeft({})}
        </button>
        <h3>{displayState}</h3>
        <button
          type="button"
          className="category-next-btn"
          disabled={disabler(tools[displayState].id)}
          onClick={() => handlePaging("right")}
          style={
            tools[displayState].id === Object.values(tools).length - 1
              ? { pointerEvents: "none", opacity: ".5" }
              : {}
          }
        >
          {ArrowRight({})}
        </button>
      </div>
    </div>
  );
};

export default Tools;
