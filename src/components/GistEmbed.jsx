import React, { useEffect, useRef } from "react";

/**
 * GistEmbed component for React 18+.
 * Usage: <GistEmbed gist="username/gistid" />
 */
const GistEmbed = ({ gist }) => {
  const gistContainer = useRef(null);

  useEffect(() => {
    if (!gist) return;
    const gistScript = document.createElement("script");
    gistScript.type = "text/javascript";
    gistScript.src = `https://gist.github.com/${gist}.js`;
    gistScript.async = true;

    // Remove previous children
    gistContainer.current.innerHTML = "";
    gistContainer.current.appendChild(gistScript);
  }, [gist]);

  return <div ref={gistContainer} />;
};

export default GistEmbed;
