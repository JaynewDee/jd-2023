import { useState } from "react";
import { useNewTab } from "./useNewTab";

export function useIframeTool(
  tool: { name: string; url: string },
  key: number
) {
  const [iframeActive, setIframeActive] = useState(false);

  const handleMouseEnter = () => setIframeActive(true);

  const handleMouseLeave = () => setIframeActive(false);

  return (
    <>
      {iframeActive && (
        <iframe src={tool.url} className="tool-hover-iframe"></iframe>
      )}
      <span
        className="tool"
        key={key}
        onClick={() => useNewTab(tool.url)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {tool.name}
      </span>
    </>
  );
}
