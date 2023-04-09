import { CSSProperties } from "react";
import { DisplayProps } from "../../Portal";
import { Title } from "../partials/IconTitle";
import { projects, ProjectType } from "./data";
import "./Projects.css";

//

const Project = ({ name, description, story, tools, id }: ProjectType) => {
  const withDelimiter = (delim: string, dashedStr: string) =>
    dashedStr.split(delim).map((section) => <p>{section}</p>);

  return (
    <section
      data-orientation={id % 2 === 0 ? "left" : "right"}
      className="project-container"
      key={id}
    >
      <h4 className="project-name">
        <span className="name-brace">{"["}</span>
        {name}
        <span className="name-brace">{"]"}</span>
      </h4>
      <p className="project-description">{description}</p>
      <p className="project-story">{withDelimiter(":", story)}</p>
      <h5 className="tools-label">Tools</h5>
      <div className="tools-container">
        {tools.map((tool, idx) => (
          <span className="tool" key={idx}>
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};

//

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
