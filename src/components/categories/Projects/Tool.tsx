import { SetStateAction, Dispatch } from "react";
import { useTooltip } from "../../../hooks/";
import { ToolType } from "./data";

export function Tool(
  tool: ToolType,
  setModalState: Dispatch<SetStateAction<string>>,
  setActiveImageSrc: Dispatch<SetStateAction<string>>,
  key: number
) {
  const toggleIframe = () => { 
    setModalState(tool.url); 
    setActiveImageSrc("") 
  };

  const component = () => (
    <span className="tool" key={key} onClick={toggleIframe}>
      {tool.name}
    </span>
  );

  const unavailable = ["MongoDB", "Rust", "Python", "JavaScript"];

  return useTooltip({
    children: component(),
    text: unavailable.includes(tool.name)
      ? "Iframe unavailable"
      : "Click to activate iframe",
    available: !unavailable.includes(tool.name)
  });
}
