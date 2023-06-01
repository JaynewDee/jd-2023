import React from "react";
import { DisplayProps } from "../../Portal";

//

const About: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="category-title-cell">
          <h4 className="category-title">WHO AM I?</h4>
        </div>
      </div>
      <div className="about-box">
        <p>
          "How beautiful it is!<br />To fall to give you flight.<br />To die to give you
          life. <br />To rest under your sky, <br />and in your enchanted land <br />eternally
          sleep." <br /><br /> - Jose Rizal
        </p>
        
      </div>
    </div>
  );
};

export default About;
