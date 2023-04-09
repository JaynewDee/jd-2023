import { DisplayProps } from "../../../Portal";
import { Title } from "../../IconTitle";
import { projects, ProjectType } from "./data";
import { useIframeTool } from "../../../hooks/useIframeTool";
import "./Projects.css";

//

const Project = ({ name, description, story, tools, id }: ProjectType) => {
  const withDelimiter = (delim: string, dashedStr: string) =>
    dashedStr.split(delim).map((section) => <p>{section}</p>);

  return (
    <>
      <article
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
        <div className="project-images"></div>
        <section className="project-story">{withDelimiter(":", story)}</section>
        <h5 className="tools-label">Tools</h5>
        <div className="tools-container">
          {tools.map((tool, idx) => (
            <>{useIframeTool(tool, idx)}</>
          ))}
        </div>
      </article>
    </>
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
