import { createContext, useContext, useMemo, useState } from "react";
import { projects } from "../components/data";

const ProjectContext = createContext({})

export type ToolType = {
    name: string;
    url: string;
};

type BadgeLanguage = "JavaScript" | "TypeScript" | "Rust" | "Python" | "Go"

export type ProjectType = {
    name: string;
    description: string;
    story: string;
    tools: ToolType[];
    id: number;
    images?: string[];
    productionSrc?: string;
    gitLinks: LinkMap;
    languages?: BadgeLanguage[]
};

export type LinkMap = {
    deployment: string;
    clone: string;
    repo: string;
};

const aggregateTags = (projectsData: ProjectType[]): string[] => {
    const tools = projectsData.map((project) => project.tools);

    const tags = tools.map((toolset: ToolType[]) =>
        toolset.flatMap((tool) => tool.name),
    );

    const uniques = new Set(tags.flat());

    return Array.from(uniques).sort();
};

const aggregateLangs = (projectsData: ProjectType[]): any[] => {
    const langs = projectsData.map(project => project.languages)

    const uniques = new Set(langs.flat())

    return Array.from(uniques)
}

export const aggregatedTagFilters = aggregateTags(projects.slice());
export const aggregatedLangFilters = aggregateLangs(projects.slice())

function ProjectContextProvider({ children }: { children: any }) {
    const [data, setData] = useState<ProjectType[]>()
    const [langFilter, setLangFilter] = useState()
    const [tagFilter, setTagFilter] = useState()

    const Value = useMemo(() => ({

    }), [])

    return <ProjectContext.Provider value={Value}>
        {children}
    </ProjectContext.Provider>
}

const useProjectContext = () => useContext(ProjectContext)

export {
    ProjectContextProvider,
    useProjectContext
}