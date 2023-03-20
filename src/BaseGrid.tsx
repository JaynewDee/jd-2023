import React, { Dispatch, SetStateAction } from "react";

type DisplayDispatch = Dispatch<SetStateAction<string>>;

export type CategoryProps = {
  setDisplay: DisplayDispatch;
};

const BaseGrid = ({ setDisplay }: { setDisplay: DisplayDispatch }) => {
  const handleCategorySwitch = (e: any) => {
    const cat = e.target.dataset.category;
    setDisplay(cat);
  };

  const categories: [number, string][] = [
    [0, "Social"],
    [1, "Accolades"],
    [2, "Contact"],
    [3, "Projects"],
    [4, "Resume"],
    [5, "Placeholder"],
    [6, "Placeholder"],
    [7, "Placeholder"]
  ];

  const Category = (id: number, name: string) => {
    const asData = name.toLowerCase();
    return (
      <div
        key={id}
        data-category={asData}
        className={`${asData} grid-cell`}
        onClick={handleCategorySwitch}
      >
        <h4 className="cell-title">{name}</h4>
      </div>
    );
  };

  return (
    <div className="grid-container">
      <div data-category={"nameplate"} className="nameplate grid-cell">
        <div className="cell-title">
          <h2>Joshua</h2>
          <h1>Diehl</h1>
        </div>
      </div>
      {categories.map((cat) => Category(cat[0], cat[1]))}
    </div>
  );
};

export default BaseGrid;
