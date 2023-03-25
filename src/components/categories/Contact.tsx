import { useState } from "react";
import { DisplayProps } from "../../Portal";
import emailjs from "@emailjs/browser";
import Title from "./Title";
import { GoMail as Mail } from "react-icons/go";
//

const Contact: React.FC<DisplayProps> = ({ backBtn }) => {
  const [formState, setFormState] = useState({
    name: "",
    message: ""
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSendEmail = () => {
    if (formState.message.length < 3) return;

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
      .then(() => setFormState({ name: "", message: "" }));
  };

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">
          {Mail({})}
          {Title("Contact")}
          {Mail({})}
        </div>
      </div>
      <div className="contact-container">
        <div className="visitor-details">
          <label htmlFor="name">your name </label>
          <input
            onChange={handleInputChange}
            value={formState.name}
            type="text"
            name="name"
            id="name"
            placeholder="CHUCK NORRIS"
          />
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
        <div className="contact">
          <p className="send-btn" onClick={handleSendEmail}>
            SEND
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
