import "./App.css";
import Portal from "./Portal";
import Footnote from "./components/Footnote";
import { useEffect } from "react";

import bgStars from "./assets/stars_bg.jpg";
import bgWater from "./assets/white_water.jpg";
import bgMoon from "./assets/moon_clouds.jpg";
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
        <div id="bg-container">
          <img className="moon-bg" src={bgMoon} />
        </div>
        <Portal />
        <Footnote />
      </div>
    </>
  );
}

export default App;
