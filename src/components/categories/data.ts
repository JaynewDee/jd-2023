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
  SiReact,
  SiMysql
} from "react-icons/si";
import { GiThreeFriends } from "react-icons/gi";
import { TbBrandMysql } from "react-icons/tb";

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
  },
  {
    name: "SQL",
    Icon: TbBrandMysql,
    level: 5
  }
];

export const tools: SkillType[] = [
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

//

export type ProjectType = {
  name: string;
  description: string;
  story: string;
  tools: string[];
  id: number;
};

//

export const projects: ProjectType[] = [
  {
    name: "Roomy",
    description:
      "Roomy seeks to revive the spirit of old-school chat rooms.  TBC ...",
    story: "To be written!",
    tools: ["Typescript", "React", "Node", "Express", "MongoDB", "Socket.io"],
    id: 3
  },
  {
    name: "Grouperjs",
    description:
      "Grouper is a command-line utility designed for use by myself and other instructional staff of edX/Trilogy/2U Full-Stack web development bootcamps.",
    story:
      "As a junior developer and teaching assistant faced for the first time with the problem of assigning students to appropriate groups, I wondered if this was a problem in any wayfit for a program.  I wondered if the Python code representation would play out straightforwardly as it did in my head. : It didn't. : But the program worked!  One could read an entirely unformatted csv gradebook file and receive randomly assigned student groups as json output! I realized then that the same algorithm could be augmented with a way to ensure that students are grouped based on an even distribution of grade point averages. : I rewrote the script as a Node.js package using Commander.js and implemented an iterative solution that would measure each output against a target standard deviation until the target had been met. : I wrote some tests and published the package to npm, but I lacked confidence in the app's integrity, seeking reasons to further trust in the code I had written, and so I decided to superset the project with TypeScript.  The current and working version is available to download as an NPM package!",
    tools: ["TypeScript", "Node"],
    id: 0
  },
  {
    name: "Cheep",
    description: "Cheap cheats from the charitable!",
    story:
      "Just a few months into learning programming, the bookmarks feature of my chrome browser was filling up.  There were dozens of bookmarks pointing to tutorials and literature on the concepts I had so far encountered, and it was becoming difficult to sort through it all. : I began to imagine an application that presented my favorite learning resources ergonomically, in a way that wouldn't suffer the attrition of increased input size ...  I am building Cheep with the intention of optimizing the user experience of recording resources by way of pagination, visual efficiency, and filtering tools.",
    tools: ["React", "Vite"],
    id: 1
  },
  {
    name: "Imagent",
    description:
      "Generate an entire range of application-appropriate thumbnail sizes from any image with a single command.",
    story:
      "I've built a few tiny chrome extensions and with each project wondered how best to produce the array of thumbnail sizes that the web manifest desires in order to accomodate all platforms.  While recently writing a chrome extension called Present, I realized finally that I could easily write a program to handle this myself. :  Imagent takes a single image file as input and produces many common app thumbnail sizes as output in just a few seconds.  In the future the script may feature myriad ways to quickly manipulate images using command-line flags and options.",
    tools: ["Python"],
    id: 2
  }
];
