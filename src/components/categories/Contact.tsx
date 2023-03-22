import { useState } from "react";
import { DisplayProps } from "../../Portal";
import emailjs from "@emailjs/browser";
import Title from "./Title";

//

const Contact: React.FC<DisplayProps> = ({ backBtn }) => {
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
    emailjs
      .send(
        "service_4rfb3fe",
        "template_hoq4aqf",
        formState,
        "hXdGf86bwNCK2LZuE"
      )
      .then(
        (response) => console.log("SUCCESS!", response.status, response.text),
        (error) => console.log("FAILED...", error)
      )
      .then(() => setFormState({ name: "", email: "", message: "" }));
  };

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("Contact")}
      </div>
      <div className="contact-container">
        <div className="visitor-details">
          <div className="labelled-input">
            <label htmlFor="name">your name</label>
            <input
              onChange={handleInputChange}
              value={formState.name}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="labelled-input">
            <label htmlFor="email">your email</label>
            <input
              onChange={handleInputChange}
              value={formState.email}
              type="text"
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="contact-message">
          <textarea
            placeholder="YOUR MESSAGE"
            className="contact-msg-input"
            onChange={handleInputChange}
            value={formState.message}
            name="message"
            id="message"
          />
        </div>
        <div className="contact grid-cell">
          <p className="send-btn" onClick={handleSendEmail}>
            SEND
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
