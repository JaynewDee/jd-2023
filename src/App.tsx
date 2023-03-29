import "./App.css";
import Portal from "./Portal";
import Footnote from "./components/Footnote";
import { useEffect } from "react";

//

function App() {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      console.log(window.innerWidth);
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
