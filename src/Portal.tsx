import React, { useState } from "react";
import BaseGrid from "./BaseGrid";
import About from "./components/About";
import Accolades from "./components/Accolades";
import Contact from "./components/Contact";
import Nameplate from "./components/Nameplate";
import Placeholder from "./components/Placeholder";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Social from "./components/Social";

const Portal: React.FC = () => {
  const [displayState, setDisplayState] = useState("");

  const displays: { [key: string]: JSX.Element } = {
    accolades: <Accolades setDisplay={setDisplayState} />,
    contact: <Contact setDisplay={setDisplayState} />,
    projects: <Projects setDisplay={setDisplayState} />,
    resume: <Resume setDisplay={setDisplayState} />,
    social: <Social setDisplay={setDisplayState} />,
    who: <About setDisplay={setDisplayState} />,
    placeholder: <Placeholder setDisplay={setDisplayState} />,
    "": <BaseGrid setDisplay={setDisplayState} />
  };

  return <>{displays[displayState]}</>;
};

export default Portal;
