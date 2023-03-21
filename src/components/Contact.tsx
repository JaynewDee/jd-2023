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
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const newState = {
      ...formState,
      [name]: value
    };
    setFormState(newState);
  };
  const handleSendEmail = (e: any) => {
    emailjs.send("service_4rfb3fe", "template_hoq4aqf", formState).then(
      (response) => console.log("SUCCESS!", response.status, response.text),
      (error) => console.log("FAILED...", error)
    );
  };

  const goBack = () => setDisplay("");

  return (
    <div
      className="grid-container"
      style={{
        gridArea: "2 / 1 / 12 / 4"
      }}
    >
      <div
        className="return grid-cell"
        onClick={goBack}
        style={{ gridArea: "1 / 2 / 2 / 1 " }}
      >
        <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
      </div>
      <div className="contact grid-cell" style={{ gridArea: "1 / 3 / 2 / 4" }}>
        <h4 className="cell-title" style={{}}>
          Contact
        </h4>
      </div>
      <div className="contact grid-cell" style={{ gridArea: "2 / 1 / 3 / 4" }}>
        <div className="visitor-details">
          <input
            onChange={handleInputChange}
            value={formState.name}
            type="text"
            name="name"
            id="name"
          />
          <input
            onChange={handleInputChange}
            value={formState.email}
            type="text"
            name="email"
            id="email"
          />
        </div>
      </div>
      <div
        className="contact grid-cell"
        style={{
          gridArea: "3 / 1 / 6 / 4"
        }}
      >
        <textarea
          className="contact-msg-input"
          onChange={handleInputChange}
          value={formState.message}
          name="message"
          id="message"
        />
      </div>
      <div className="contact grid-cell" style={{ gridArea: "7 / 1 / 8 / 4" }}>
        <p>SEND</p>
      </div>
    </div>
  );
};

export default Contact;
