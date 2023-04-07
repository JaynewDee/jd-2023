import { CSSProperties } from "react";
import { DisplayProps } from "../../Portal";
import { Title } from "../partials/IconTitle";
import "./Projects.css";

//

type ProjectType = {
  name: string;
  description: string;
  story: string;
  tools: string[];
  id: number;
};

//

const projects: ProjectType[] = [
  {
    name: "Grouperjs",
    description:
      "Grouper is a command-line utility designed for use by myself and other instructional staff of edX/Trilogy/2U Full-Stack web development bootcamp.",
    story:
      "As a junior developer and teaching assistant faced for the first time with the problem of assigning students to appropriate groups, I wondered if this was a problem in any wayfit for a program.  I wondered if the Python code representation would play out straightforwardly as it did in my head.  It didn't.  But the program worked!  One could read an entirely unformatted csv file and receive randomly assigned student groups as json output! TBC...",
    tools: ["TypeScript", "Node"],
    id: 0
  },
  {
    name: "Cheep",
    description: "Cheap cheats from the charitable!",
    story:
      "Just a few months into learning programming, the bookmarks feature of my chrome browser was filling up.  There were dozens of bookmarks pointing to tutorials and literature on the concepts I had so far encountered, and it was becoming difficult to sort through it all.  I began to imagine an application that presented my favorite learning resources ergonomically, in a way that wouldn't suffer the attrition of increased input size ...  I am building Cheep with the intention of optimizing the user experience of recording resources by way of pagination, visual efficiency, and filtering tools.",
    tools: ["React", "Vite"],
    id: 1
  },
  {
    name: "Imagent",
    description:
      "Generate an entire range of application-appropriate thumbnail sizes from any image with a single command.",
    story:
      "I've so far built 2 or 3 tiny chrome extensions and wondered how best to produce the array of thumbnail sizes that the web manifest desires in order to accomodate all platforms.  While recently writing a third simple chrome extension called Present, I realized finally that I could easily write a program to handle this myself.  Imagent takes a single image file as input and produces many common app thumbnail sizes as output in just a few seconds.  In the future the script will feature other ways to quickly manipulate images using command-line flags and options.",
    tools: ["Python"],
    id: 2
  }
];

const Project = ({ name, description, story, tools, id }: ProjectType) => {
  const computedStyles =
    id % 2 === 0
      ? { marginRight: "auto", textAlign: "left" }
      : ({ marginLeft: "auto", textAlign: "right" } as any);

  return (
    <section className="project-container">
      <h4 className="project-name" style={computedStyles}>
        {name}
      </h4>
      <p className="project-description" style={computedStyles}>
        {description}
      </p>
      <p className="project-story" style={computedStyles}>
        {story}
      </p>
      <div className="tools-container">
        {tools.map((tool) => (
          <span className="tool">{tool}</span>
        ))}
      </div>
    </section>
  );
};

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <article className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">{Title("PROJECTS")}</div>
      </div>
      <article>{projects.map((project) => Project(project))}</article>
    </article>
  );
};

export default Projects;
