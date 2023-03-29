import { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiRust,
  SiTypescript,
  SiSequelize,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact
} from "react-icons/si";
import { GiThreeFriends } from "react-icons/gi";

export type SkillType = {
  name: string;
  Icon: IconType;
  level?: number;
};

export const languages: SkillType[] = [
  {
    name: "JavaScript",
    Icon: SiJavascript,
    level: 8
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    level: 7
  },
  {
    name: "Python",
    Icon: SiPython,
    level: 6
  },
  {
    name: "Rust",
    Icon: SiRust,
    level: 6
  }
];

export const tools: SkillType[] = [
  {
    name: "Sequelize",
    Icon: SiSequelize,
    level: 6
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    level: 6
  },
  {
    name: "Express",
    Icon: SiExpress,
    level: 6
  },
  {
    name: "Node",
    Icon: SiNodedotjs,
    level: 6
  },
  {
    name: "React",
    Icon: SiReact,
    level: 6
  }
];

export const misc: SkillType[] = [
  {
    name: "Leadership",
    Icon: GiThreeFriends,
    level: 10
  }
];

/////////////

export const descriptionSwitch = (skillName: string) => {
  const descriptions: { [key: string]: string } = {
    JavaScript:
      "JavaScript logically completes the technical triforce toolkit that characterizes programming for the modern web, alongside HTML & CSS",
    TypeScript:
      "A superset of JavaScript, TypeScript adds an object-oriented interface layer to JavaScript, shoring up some of the downfalls of its dynamism with compile-time type safety.",
    Python:
      "Python is a powerful tool for a programmer favoring versatility, sparse syntax, and a wealth of optimized data science libraries. ",
    Rust: "Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control."
  };
  return descriptions[skillName] || `${skillName} is awesome!`;
};
