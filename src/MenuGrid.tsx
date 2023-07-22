import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Nameplate from "./components/Nameplate";

type DisplayDispatch = Dispatch<SetStateAction<string>>;

export type CategoryProps = {
  setDisplay: DisplayDispatch;
};

const formatter = {
  name: (name: string) =>
    name.split("").map((char: string, idx: number) =>
      idx === 0 ? <span key={char + idx} className="cat-char-underlined">{char}</span> : char),
  dataCategory: (name: string) => name.toLowerCase().replace(/[\?\.]/, "")
}

const keyTable: { [key: string]: string } = {
  p: "projects",
  r: "resume",
  t: "tools",
  e: "etc",
  w: "who",
  s: "social",
  c: "contact",
  a: "accolades"
}

const MenuGrid = ({ setDisplay }: { setDisplay: DisplayDispatch }) => {

  const handleCategorySwitch = (e: any) =>
    setDisplay(e?.target?.dataset.category);

  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const notIncluded = key !== "e" && key !== "t"

      if (key in keyTable && (notIncluded)) {
        setDisplay(keyTable[e.key]);
      }
    }

    window.addEventListener('keyup', handleKeyEvent);

    return () => window.removeEventListener('keyup', handleKeyEvent)
  }, []);

  const underDevelopment = ["Tools", "Etc."];

  const categories: [number, string][] = [
    [1, "Accolades"],
    [0, "Projects"],
    [5, "Resume"],
    [4, "Contact"],
    [2, "Social"],
    [3, "Tools"],
    [6, "Who?"],
    [7, "Etc."]
  ];

  const MenuCategory = (id: number, name: string) => {
    const [notification, setNotification] = useState(false);

    const notifyDevelopment = () => {
      setNotification(true);
      setTimeout(() => setNotification(false), 3000);
    };

    return <div
      key={id}
      data-category={formatter.dataCategory(name)}
      className="menu-cell"
      onClick={underDevelopment.includes(name) ? notifyDevelopment : handleCategorySwitch}
    >
      {notification && <h5 className="click-notification">Under Development</h5>}
      <h4 className="cell-title menu-title">{formatter.name(name)}</h4>
    </div>
  }

  return (
    <div className="grid-container" id="grid-container-main">
      <Nameplate />
      {categories.map((cat) => MenuCategory(cat[0], cat[1]))}
    </div>
  );
};

export default MenuGrid;
