import "./App.css";
import Portal from "./Portal";
import Footnote from "./components/Footnote";
import { useEffect } from "react";

//

function App() {
  useEffect(() => {
    if (window.screen.width < 720) {
      console.log(window.screen.width);
    }
  }, []);

  return (
    <>
      <div className="App">
        <Portal />
        <Footnote />
      </div>
    </>
  );
}

export default App;
