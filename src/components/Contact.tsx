import { useState } from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";
import emailjs from "@emailjs/browser";
const Contact: React.FC<CategoryProps> = ({ setDisplay }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSendEmail = (e: any) => {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formState).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  const goBack = () => setDisplay("");

  return (
    <div className="grid-container">
      <div className="return grid-cell" onClick={goBack}>
        <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
      </div>
      <div className="message grid-cell">
        <h4 className="cell-title">Contact</h4>
      </div>
    </div>
  );
};

export default Contact;
