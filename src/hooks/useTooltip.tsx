import { useState } from "react";

interface TooltipProps {
  children: any;
  text: string;
  available: boolean;
}

export default function Tooltip({ children, text, available }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
