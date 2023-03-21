import { useState } from "react";
import { DisplayProps } from "../../Portal";
import emailjs from "@emailjs/browser";

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
    emailjs.send("service_4rfb3fe", "template_hoq4aqf", formState).then(
      (response) => console.log("SUCCESS!", response.status, response.text),
      (error) => console.log("FAILED...", error)
    );
  };

  return (
    <div className="grid-container-category">
      {backBtn()}
      <div className="contact grid-cell">
        <h4 className="cell-title">Contact</h4>
      </div>
      <div className="contact grid-cell">
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
      </div>
      <div className="contact grid-cell">
        <textarea
          className="contact-msg-input"
          onChange={handleInputChange}
          value={formState.message}
          name="message"
          id="message"
        />
      </div>
      <div className="contact grid-cell">
        <p onClick={handleSendEmail}>SEND</p>
      </div>
    </div>
  );
};

export default Contact;
