import React, { Dispatch, SetStateAction, useState } from "react";
import MenuGrid from "./MenuGrid";
import BackBtn from "./components/BackBtn";
import About from "./components/categories/About";
import Accolades from "./components/categories/Accolades";
import Contact from "./components/categories/Contact";
import Etc from "./components/categories/Etc";
import Projects from "./components/categories/Projects";
import Resume from "./components/categories/Resume";
import Skills from "./components/categories/Skills";
import Social from "./components/categories/Social";

export type DisplayProps = {
  setDisplay: Dispatch<SetStateAction<string>>;
  backBtn: () => JSX.Element;
};

const Portal: React.FC = () => {
  const [displayState, setDisplayState] = useState("");

  const goBack = () => setDisplayState("");

  const props: DisplayProps = {
    setDisplay: setDisplayState,
    backBtn: () => <BackBtn goBack={goBack} />
  };

  const displays: { [key: string]: JSX.Element } = {
    accolades: <Accolades {...props} />,
    contact: <Contact {...props} />,
    projects: <Projects {...props} />,
    skills: <Skills {...props} />,
    resume: <Resume {...props} />,
    social: <Social {...props} />,
    who: <About {...props} />,
    etc: <Etc {...props} />,
    "": <MenuGrid {...props} />
  };

  return <div>{displays[displayState]}</div>;
};

export default Portal;
