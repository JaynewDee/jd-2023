import React, { useState } from "react";
import { DisplayProps } from "../../../Portal";
import { TbClipboardCheck as List } from "react-icons/tb";
import IconTitle from "../../IconTitle";
import { IconType } from "react-icons";
import { languages, tools, misc, SkillType, descriptionSwitch } from "../data";
import {
  TiArrowLeft as ArrowLeft,
  TiArrowRight as ArrowRight
} from "react-icons/ti";

//
import "./Skills.css";
//

const skills: { [key: string]: { id: number; data: SkillType[] } } = {
  Languages: { id: 0, data: languages },
  Tools: { id: 1, data: tools },
  Misc: { id: 2, data: misc }
};

const SkillSwitch = (display: string) =>
  skills[display].data.map(({ name, Icon }, idx) => Skill(name, Icon, idx));

const Skill = (name: string, Icon: IconType, key: number) => {
  return (
    <div className="skill-box" key={key}>
      <span data-descr={descriptionSwitch(name)} className="skill-icon">
        {Icon({ size: "1.33rem" })}
        {name}
      </span>
    </div>
  );
};

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  const [displayState, setDisplayState] = useState("Languages");

  const disabler = (displayId: number | null = null) => {
    if (displayId) {
      if (displayId === 0 || displayId === Object.values(skills).length)
        return true;
    }
    return false;
  };

  const handlePaging = (btnType: string) => {
    const currentState = Object.values(skills[displayState]);
    const currentId = currentState.filter(
      (tuple) => typeof tuple === "number"
    )[0];

    if (btnType === "right") {
      for (const s in skills) {
        if (skills[s].id === (currentId as number) + 1) {
          setDisplayState(s);
        }
      }
    } else {
      for (const s in skills) {
        if (skills[s].id === (currentId as number) - 1) {
          setDisplayState(s);
        }
      }
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
          onClick={() => handlePaging("left")}
          disabled={disabler(skills[displayState].id)}
          style={
            skills[displayState].id === 0
              ? { pointerEvents: "none", opacity: ".5" }
              : {}
          }
          className="category-back-btn"
        >
          {ArrowLeft({})}
        </button>
        <h3>{displayState}</h3>
        <button
          className="category-next-btn"
          disabled={disabler(skills[displayState].id)}
          onClick={() => handlePaging("right")}
          style={
            skills[displayState].id === Object.values(skills).length - 1
              ? { pointerEvents: "none", opacity: ".5" }
              : {}
          }
        >
          {ArrowRight({})}
        </button>
      </div>
      <article className="skill-wrapper">
        <div className="skill-menu">{SkillSwitch(displayState)}</div>
        <div className="skills-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            quisquam fugiat odio mollitia at dolores maxime voluptatem aut
            recusandae? Facere pariatur numquam expedita voluptatum et
            necessitatibus modi ullam unde voluptas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            officiis? Ipsa, explicabo sunt ut et quas labore dolorem alias non
            laboriosam quaerat quidem amet dolore. Distinctio iste voluptates
            magni vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga
            animi inventore voluptate quibusdam enim consectetur rem reiciendis
            facilis, minima ratione quod quis maiores, minus illum repellendus
            voluptatem? Qui, laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maxime voluptate voluptatem iure? Quia molestiae omnis eius
            necessitatibus deserunt debitis harum asperiores voluptatem quas
            cupiditate, nihil sint porro aliquam dolorem?
          </p>
        </div>
      </article>
    </div>
  );
};

export default Skills;
