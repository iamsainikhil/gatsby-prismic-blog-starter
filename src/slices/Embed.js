import React from "react"
import Gist from "react-gist"

const iframeStyle = {
  minWidth: "200px",
  minHeight: "500px",
  width: "100%",
  height: "100%",
  border: "0",
  borderRadius: "4px",
  overflow: "auto",
  margin: "1rem auto",
}

/**
 * return the ID part of the URL
 * @param {*} url
 */
const getGistId = url => {
  return url.split("/").slice(-1).join("")
}

const Embed = ({ data: { primary } }) => {
  {
    if (primary.platform === "GitHub") {
      return <Gist id={getGistId(primary.embed.embed_url)} />
    }
    return (
      <iframe
        src={primary.embed.embed_url}
        style={iframeStyle}
        title={`${primary.platform} Embed`}
      ></iframe>
    )
  }
}

export default Embed
