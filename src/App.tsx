import { useState } from "react";
import "./App.css";
import Accolades from "./components/Accolades";
import Message from "./components/Message";
import Nameplate from "./components/Nameplate";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <Nameplate />
        <Accolades />
        <Message />
        <Projects />
        <Resume />
        <Social />
        <div className="grid-cell">
          <h4 className="cell-title">Placeholder</h4>
        </div>
        <div className="grid-cell">
          <h4 className="cell-title">Placeholder</h4>
        </div>
        <div className="grid-cell">
          <h4 className="cell-title">Placeholder</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
