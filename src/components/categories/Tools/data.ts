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

export const tech: SkillType[] = [
  {
    name: "React",
    Icon: SiReact,
    level: 8
  },
  {
    name: "Node",
    Icon: SiNodedotjs,
    level: 7
  },
  {
    name: "Express",
    Icon: SiExpress,
    level: 7
  },
  {
    name: "Sequelize",
    Icon: SiSequelize,
    level: 6
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
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
