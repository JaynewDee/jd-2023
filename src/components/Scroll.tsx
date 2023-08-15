import { useState } from "react";
import {
  BsArrowUpCircleFill as ArrowUp,
  BsArrowDownCircleFill as ArrowDown,
} from "react-icons/bs";

const ScrollTop = () => {
  return (
    <div>
      <button className="scroll-btn scroll-top-btn" type="button">
        {ArrowUp({ size: "1rem", color: "white" })}
      </button>
    </div>
  );
};

const ScrollBot = () => {
  return (
    <div>
      <button className="scroll-btn scroll-bottom-btn" type="button">
        {ArrowDown({ size: "1rem", color: "white" })}
      </button>
    </div>
  );
};

export const ScrollOverlay = () => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      onMouseOver={() => setHoverState(true)}
      onFocus={() => {}}
      onMouseLeave={() => setHoverState(false)}
    >
      <div
        style={
          hoverState ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className="scroll-overlay"
      >
        <ScrollTop />
        <ScrollBot />
      </div>
    </div>
  );
};
