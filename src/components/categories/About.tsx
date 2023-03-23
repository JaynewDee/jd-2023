import React from "react";
import { DisplayProps } from "../../Portal";
import Title from "./Title";

//

const About: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("About Me")}
      </div>
      <div className="about-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          necessitatibus dolorum assumenda laboriosam error. Nam iure
          reprehenderit distinctio rem suscipit, quos, sed dolorum labore
          laudantium unde repellat. Praesentium, eaque error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          recusandae quod, iste hic facilis provident tempora sint inventore
          libero veniam architecto mollitia saepe numquam praesentium officia
          laboriosam non asperiores harum! Adipisci suscipit inventore
          voluptates! Voluptatibus quasi corporis explicabo, ex ut magni
          officia! Eius, dolore quos? Tempore deleniti tempora recusandae alias
          quod eaque, facilis, quas quos facere numquam quasi voluptatum odit.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          rerum necessitatibus nulla inventore repellat fugit consequuntur
          corrupti aliquid non amet voluptatum alias laboriosam accusantium
          commodi esse nam, quasi possimus beatae.
        </p>
      </div>
    </div>
  );
};

export default About;
