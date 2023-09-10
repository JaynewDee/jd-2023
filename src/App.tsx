import "./styles/App.css";
import { Outlet } from 'react-router-dom'
import Footnote from "./components/Footnote";
import SparkleField from "./components/SparkleField";

//

function App() {
  return (
    <div className="App">
      <SparkleField />
      <Outlet />
      {/* <Portal /> */}
      <Footnote />
    </div>
  );
}

export default App;
