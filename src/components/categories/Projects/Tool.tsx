import { SetStateAction, Dispatch } from "react";
import { useTooltip } from "../../../hooks/";
import { ToolType } from "./data";

const unavailable = ["MongoDB", "Rust", "Python", "JavaScript"];

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

  const isAvailable = !unavailable.includes(tool.name);

  return useTooltip({
    children: component(),
    text: !isAvailable
      ? "Iframe unavailable"
      : "Click to activate iframe",
    available: isAvailable
  });
}
