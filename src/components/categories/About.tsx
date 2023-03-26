import React from "react";
import { DisplayProps } from "../../Portal";

//

const About: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">{backBtn()}</div>
      <section className="photo-section">
        {/* Images of oneself ... ? ... ugh */}
      </section>
      <div className="about-box">
        <p>
          How beautiful it is! To fall to give you flight. To die to give you
          life. To die under your sky, and in your enchanted land eternally
          sleep.
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
