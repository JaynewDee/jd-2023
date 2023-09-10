import { Title } from "../components/IconTitle";
import BackBtn from "../components/BackBtn";

//

const feedbacks = [
  "I would like to shoutout Joshua Diehl.  Incredible TA, his patience and understanding makes him so approachable for me!",
  "I would like to shoutout Josh our TA he's been great helping out my group with the project.  He's tremendously patient and is always willing to help us work through our issue.",
  "My TA Josh was extremely helpful not in only writing code, but in helping with motivation and the feeling of being completely lost/behind with some subjects and helped me get a better perspective and outlook on this week's project and the course in general.",
  "Josh and Chris were amazing in taking the complex structure of Javascript and breaking it down into simple terms.",
  "Just wanted to give Josh the TA another shoutout. I believe he's the role model software developer. He's been incredibly informative and encouraging during our Project 3.",
  "TAs Chris ***** and Joshua Diehl were incredibly helpful this week and took time beyond office hours to help in every way possible.  Very thankful for them!!",
  "Joshua was very patient helping answer my questions.  As we were problem solving he helped me understand what the computer was saying to me as I sent commands to it.",
  "Joshua Diehl has been very kind and helpful and communicated well!"
]

function Feedback() {
  return <div className="student-feedback">
    <h3 style={{ fontFamily: "var(--mate)", fontStyle: "italic", marginTop: "3rem", lineHeight: "1.2" }}>Student Feedback <br /> & <br /> Testimonials</h3>
    <h5 style={{ maxWidth: "300px", margin: "0 auto 5rem", fontFamily: "var(--mate)", fontStyle: "italic" }}>The following anonymous statements were excerpted from student surveys as part of a weekly KPI assessment</h5>
    <div style={{ backdropFilter: "blur(3px) brightness(60%)", paddingTop: "1rem", paddingBottom: "3rem", width: "100%" }}>
      {
        feedbacks.map(statement => {
          return <div key={statement.slice(-9, -1)}>
            <p>
              "{statement}"
            </p>
            <hr style={{ width: "150px", height: "3px", backgroundColor: "var(--accent)", borderRadius: "50%", border: "none", opacity: ".3" }} />
          </div>
        })
      }
    </div>
  </div>
}

const Etc = () => {
  return (
    <div className="category-container">
      <div className="category-header">
        {BackBtn()}
        {Title("Etc.")}
      </div>
      <Feedback />
    </div>
  );
};

export default Etc;