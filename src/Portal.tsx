import React, { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import MenuGrid from "./MenuGrid";
import BackBtn from "./components/BackBtn";
import About from "./components/categories/About";
import Accolades from "./components/categories/Accolades";
import Contact from "./components/categories/Contact";
import Etc from "./components/categories/Etc";
import Projects from "./components/categories/Projects/Projects";
import Resume from "./components/categories/Resume";
import Tools from "./components/categories/Tools";
import Social from "./components/categories/Social";

export type DisplayProps = {
  setDisplay: Dispatch<SetStateAction<string>>;
  backBtn: () => JSX.Element;
};



const Portal: React.FC = () => {
  const [displayState, setDisplayState] = useState("");

  const goBack = () => setDisplayState("");

  useEffect(() => {
    const handleBackEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Home") {
        goBack();
      }
    }

    window.addEventListener("keydown", handleBackEvent);

    return () => window.removeEventListener("keydown", handleBackEvent)
  }, []);



  const props: DisplayProps = {
    setDisplay: setDisplayState,
    backBtn: () => <BackBtn goBack={goBack} />
  };

  const displays: { [key: string]: JSX.Element } = {
    accolades: <Accolades {...props} />,
    contact: <Contact {...props} />,
    projects: <Projects {...props} />,
    tools: <Tools {...props} />,
    resume: <Resume {...props} />,
    social: <Social {...props} />,
    who: <About {...props} />,
    etc: <Etc {...props} />,
    "": <MenuGrid {...props} />
  };

  return <>{displays[displayState]}</>;
};

export default Portal;
