const Title = (category: string) => {
  return (
    <div className="grid-cell">
      <h4 className="category-title">{category.toUpperCase()}</h4>
    </div>
  );
};

export default Title;
