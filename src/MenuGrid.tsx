import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Nameplate from "./components/Nameplate";

type DisplayDispatch = Dispatch<SetStateAction<string>>;

export type CategoryProps = {
  setDisplay: DisplayDispatch;
};

const formatter = {
  name: (name: string) =>
    name.split("").map((char: string, idx: number) =>
      idx === 0 ? (
        <span key={char + idx} className="cat-char-underlined">
          {char}
        </span>
      ) :
        char === "e" && idx === name.length - 1 ? <span>&eacute;</span> : char
    ),
  dataCategory: (name: string) => name.toLowerCase().replace(/[\?\.]/, ""),
};

const keyTable: { [key: string]: string } = {
  m: "media",
  p: "projects",
  r: "resume",
  e: "etc",
  w: "who",
  s: "social",
  c: "contact",
  a: "accolades",
};

function MenuGrid() {
  const navigate = useNavigate()
  const handleCategorySwitch = (e: any) =>
    navigate("/" + e?.target?.dataset.category);

  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key in keyTable) {
        navigate("/" + keyTable[e.key]);
      }
    };

    window.addEventListener("keyup", handleKeyEvent);

    return () => window.removeEventListener("keyup", handleKeyEvent);
  }, []);

  const categories: [number, string][] = [
    [1, "Accolades"],
    [0, "Projects"],
    [5, "Resume"],
    [4, "Contact"],
    [2, "Social"],
    [3, "Media"],
    [6, "Who?"],
    [7, "Etc."],
  ];

  const MenuCategory = ({ id, name }: { id: number, name: string }) =>
    <div
      key={id}
      data-category={formatter.dataCategory(name)}
      className="menu-cell"
      onClick={handleCategorySwitch}
    >
      <h4 className="cell-title menu-title">{formatter.name(name)}</h4>
    </div>


  return (
    <div className="grid-container" id="grid-container-main">
      <Nameplate />
      {categories.map((cat) => <MenuCategory id={cat[0]} name={cat[1]} />)}
    </div>
  );
}

export default MenuGrid;
