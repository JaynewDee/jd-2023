import "./App.css";
import Portal from "./Portal";
import Footnote from "./components/Footnote";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Portal />
      <Footnote />
    </div>
  );
}

export default App;
