//

const Nameplate = () => {
  return (
    <div data-category={"nameplate"} className="nameplate">
      <div className="name-cell">
        <h2 className="joshua">
          <span className="name-parens">(</span>
          Josh
          <span className="name-parens">)</span>
          ua
        </h2>
        <h1>Diehl</h1>
        <span className="profession">
          SOFTWARE <span className="bracket-frame">{"{"}</span>ENGINEER
          <span className="bracket-frame">{"}"}</span>
        </span>
      </div>
    </div>
  );
};

export default Nameplate;
