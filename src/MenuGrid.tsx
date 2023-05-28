import { Dispatch, SetStateAction, useEffect } from "react";
import Nameplate from "./components/Nameplate";

type DisplayDispatch = Dispatch<SetStateAction<string>>;

export type CategoryProps = {
  setDisplay: DisplayDispatch;
};

const keyTable: { [key: string]: string} = {
  p: "projects",
  t: "tools",
  r: "resume",
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
      if (e.key in keyTable) {
        setDisplay(keyTable[e.key]); 
      }
    }
    
    window.addEventListener('keyup', handleKeyEvent);

    return () => window.removeEventListener('keyup', handleKeyEvent)
  }, []);

  const categories: [number, string][] = [
    [1, "Accolades"],
    [0, "Projects"],
    [3, "Tools"],
    [4, "Contact"],
    [5, "Resume"],
    [2, "Social"],
    [6, "Who?"],
    [7, "etc."]
  ];

  const formatName = (name: string) => name.split("").map((char: string, idx: number) => idx === 0 ? <span>{char}</span> : char);
  const formatDataCategory = (name: string) =>  name.toLowerCase().replace(/[\?\.]/, "");

  const MenuCategory = (id: number, name: string) => (
    <div
      key={id}
      data-category={formatDataCategory(name)}
      className="menu-cell"
      onClick={handleCategorySwitch}
    >
      <h4 className="cell-title menu-title">{formatName(name)}</h4>
    </div>
  );

  return (
    <div className="grid-container" id="grid-container-main">
      <Nameplate />
      {categories.map((cat) => MenuCategory(cat[0], cat[1]))}
    </div>
  );
};

export default MenuGrid;
