const Title = (category: string) => {
  return (
    <div className="category-title-cell">
      <h4 className="category-title">{category.toUpperCase()}</h4>
    </div>
  );
};

export default Title;
