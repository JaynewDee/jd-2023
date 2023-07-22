import { SetStateAction, Dispatch } from "react";
import { useTooltip } from "../../../hooks/";
import { ToolType } from "./data";

const unavailableIframes = ["MongoDB", "Rust", "Python", "JavaScript", "AWS"];



export function Tool(
  tool: ToolType,
  setModalState: Dispatch<SetStateAction<string>>,
  setActiveImageSrc: Dispatch<SetStateAction<string>>,
) {
  const toggleIframe = () => {
    setModalState(tool.url);
    setActiveImageSrc("")
  };

  const component = () => (
    <span className="tool" onClick={toggleIframe}>
      {tool.name}
    </span>
  );

  const isAvailable = !unavailableIframes.includes(tool.name);

  return useTooltip({
    children: component(),
    text: !isAvailable
      ? "Iframe unavailable"
      : "Click to activate iframe",
    available: isAvailable
  });
}
