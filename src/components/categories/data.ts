export const descriptionSwitch = (skillName: string) => {
  const descriptions: { [key: string]: string } = {
    JavaScript:
      "JavaScript logically completes the technical triforce toolkit that characterizes programming for the modern web, alongside HTML & CSS",
    TypeScript:
      "A superset of JavaScript, TypeScript adds an object-oriented interface layer to JavaScript, shoring up some of the downfalls of its dynamism with compile-time type safety.",
    Python:
      "Python is a powerful tool for a programmer favoring versatility, sparse syntax, and a wealth of optimized data science libraries. ",
    Rust: "Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control."
  };
  return descriptions[skillName] || `${skillName} is awesome!`;
};

//
