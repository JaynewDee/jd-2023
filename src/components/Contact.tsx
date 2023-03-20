import { CategoryProps } from "../BaseGrid";

const Contact: React.FC<CategoryProps> = () => {
  return (
    <div className="grid-container">
      <div className="message grid-cell">
        <h4 className="cell-title">Message</h4>
      </div>
    </div>
  );
};

export default Contact;
