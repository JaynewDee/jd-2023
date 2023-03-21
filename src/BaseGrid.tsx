import React, { Dispatch, SetStateAction } from "react";
import Nameplate from "./components/Nameplate";

type DisplayDispatch = Dispatch<SetStateAction<string>>;

export type CategoryProps = {
  setDisplay: DisplayDispatch;
};

const BaseGrid = ({ setDisplay }: { setDisplay: DisplayDispatch }) => {
  const handleCategorySwitch = (e: any) =>
    setDisplay(e.target.dataset.category);

  const categories: [number, string][] = [
    [3, "Projects"],
    [1, "Accolades"],
    [0, "Social"],
    [2, "Contact"],
    [4, "Resume"],
    [5, "Placeholder"],
    [6, "Who?"],
    [7, "Placeholder"]
  ];

  const Category = (id: number, name: string) => (
    <div
      key={id}
      data-category={name.toLowerCase().replace(/(\?)/, "")}
      className={`grid-cell`}
      onClick={handleCategorySwitch}
    >
      <h4 className="cell-title">{name}</h4>
    </div>
  );

  return (
    <div className="grid-container grid-container-main">
      <Nameplate />
      {categories.map((cat) => Category(cat[0], cat[1]))}
    </div>
  );
};

export default BaseGrid;
