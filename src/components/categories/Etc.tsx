import React from "react";
import { DisplayProps } from "../../Portal";
import { Title } from "../IconTitle";

//

const Etc: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("Etc.")}
      </div>
      <Feedback />
    </div>
  );
};

export default Etc;

const feedbacks = [
  "I would like to shoutout Joshua Diehl.  Incredible TA, his patience and understanding makes him so approachable for me!",
  "I would like to shoutout Josh our TA he's been great helping out my group with the project.  He's tremendously patient and is always willing to help us work through our issue.",
  "My TA Josh was extremely helpful not in only writing code, but in helping with motivation and the feeling of being completely lost/behind with some subjects and helped me get a better perspective and outlook on this week's project and the course in general.",
  "Josh and Chris were amazing in taking the complex structure of Javascript and breaking it down into simple terms.",
  "TAs Chris ***** and Joshua Diehl were incredibly helpful this week and took time beyond office hours to help in every way possible.  Very thankful for them!!",
  "Joshua was very patient helping answer my questions.  As we were problem solving he helped me understand what the computer was saying to me as I sent commands to it.",
  "Joshua Diehl has been very kind and helpful and communicated well!"
]

function Feedback() {
  return <>
    <h4>Student Feedback & Testimonials</h4>
    <h5>The following anonymous statements were excerpted from a student survey as part of a weekly KPI assessment</h5>
    {
      feedbacks.map(statement => {
        return <p>{statement}</p>
      })
    }
  </>
}