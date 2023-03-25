import { useState } from "react";
import { DisplayProps } from "../../Portal";
import { GoMail as Mail } from "react-icons/go";
import IconTitle from "../partials/IconTitle";
import { useMailHandler } from "../../hooks/useMailHandler";

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

  const handleSendEmail = () => useMailHandler(formState, setFormState);

  const FormInput = (value: string, name: string, placeholder: string = "") => (
    <input
      onChange={handleInputChange}
      value={value}
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("CONTACT", Mail)}
      </div>
      <div className="contact-container">
        <div className="visitor-details">
          <label htmlFor="name">your name </label>
          {FormInput(formState.name, "name", "CHUCK NORRIS")}
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
