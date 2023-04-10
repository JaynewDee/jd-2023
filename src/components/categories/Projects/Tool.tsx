import useTooltip from "../../../hooks/useTooltip";

export function Tool(
  tool: { name: string; url: string },
  setModalState: any,
  key: number
) {
  const toggleIframe = () => setModalState(tool.url);

  const component = () => (
    <span className="tool" key={key} onClick={toggleIframe}>
      {tool.name}
    </span>
  );

  const unavailable = ["MongoDB", "Rust"];

  return useTooltip({
    children: component(),
    text: unavailable.includes(tool.name)
      ? "Iframe unavailable"
      : "Click to activate iframe",
    available: !unavailable.includes(tool.name)
  });
}
