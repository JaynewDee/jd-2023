import { Dispatch, SetStateAction } from "react";
import Nameplate from "./components/Nameplate";

type DisplayDispatch = Dispatch<SetStateAction<string>>;

export type CategoryProps = {
  setDisplay: DisplayDispatch;
};

const MenuGrid = ({ setDisplay }: { setDisplay: DisplayDispatch }) => {
  const handleCategorySwitch = (e: any) =>
    setDisplay(e.target.dataset.category);

  const categories: [number, string][] = [
    [1, "Accolades"],
    [0, "Projects"],
    [3, "Skills"],
    [4, "Contact"],
    [5, "Resume"],
    [2, "Social"],
    [6, "Who?"],
    [7, "etc."]
  ];

  const MenuCategory = (id: number, name: string) => (
    <div
      key={id}
      data-category={name.toLowerCase().replace(/[\?\.]/, "")}
      className={`menu-cell`}
      onClick={handleCategorySwitch}
    >
      <h4 className="cell-title menu-title">{name}</h4>
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
