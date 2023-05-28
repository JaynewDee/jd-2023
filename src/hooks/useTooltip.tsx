import { useState } from "react";

interface TooltipProps {
  children: JSX.Element[];
  text: string;
  available: boolean;
}

export function useTooltip({ children, text }: TooltipProps) {
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
