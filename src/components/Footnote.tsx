import { useNewTab } from "../hooks/useNewTab";

//

const Footnote = () => {
  const repoUrl = "https://github.com/JaynewDee/jd-2023";

  const visitPortfolioRepo = () => useNewTab(repoUrl);

  const styles = {
    cursor: "pointer",
  };

  return (
    <div style={styles} className="footnote" onClick={visitPortfolioRepo}>
      <p>built and maintained by</p>
      <p>Joshua Newell Diehl</p>
      <p>&copy;2023 </p>
      <p className="beta-release">
        Beta Release. All features subject to change.
      </p>
    </div>
  );
};

export default Footnote;
