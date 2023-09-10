// import React, { Dispatch, SetStateAction, useEffect, useState, useCallback, useMemo } from "react";
// import MenuGrid from "./MenuGrid";
// import BackBtn from "./components/BackBtn";
// import About from "./pages/About";
// import Accolades from "./pages/Accolades";
// import Contact from "./pages/Contact";
// import Etc from "./pages/Etc";
// import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";
// import Media from "./pages/Media";
// import Social from "./pages/Social";

// export type DisplayProps = {
//   setDisplay: Dispatch<SetStateAction<string>>;
//   backBtn: () => JSX.Element;
// };

// const Portal: React.FC = () => {
//   const [displayState, setDisplayState] = useState("");

//   const goBack = () => setDisplayState("");

//   useEffect(() => {
//     const handleBackEvent = (e: KeyboardEvent) => {
//       if (e.key === "Escape" || e.key === "Home") {
//         goBack();
//       }
//     };

//     window.addEventListener("keydown", handleBackEvent);

//     return () => window.removeEventListener("keydown", handleBackEvent);
//   }, []);

//   const props: DisplayProps = {
//     setDisplay: useCallback(setDisplayState, [setDisplayState]),
//     backBtn: useMemo(() => () => <BackBtn goBack={goBack} />, []),
//   };

//   const displays: { [key: string]: JSX.Element } = {
//     accolades: <Accolades {...props} />,
//     contact: <Contact {...props} />,
//     projects: <Projects {...props} />,
//     media: <Media {...props} />,
//     resume: <Resume {...props} />,
//     social: <Social {...props} />,
//     who: <About {...props} />,
//     etc: <Etc {...props} />,
//     "": <MenuGrid {...props} />,
//   };

//   return <>{displays[displayState]}</>;
// };

// export default Portal;
