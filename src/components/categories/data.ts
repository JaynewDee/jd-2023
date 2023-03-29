import { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiRust,
  SiTypescript,
  SiSequelize
} from "react-icons/si";

export type SkillType = {
  name: string;
  Icon: IconType;
  level: number;
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
    level: 5
  },
  {
    name: "Rust",
    Icon: SiRust,
    level: 5
  }
];

export const tools: SkillType[] = [
  {
    name: "Sequelize",
    Icon: SiSequelize,
    level: 6
  }
];
