import React from "react"
// import "prismjs/themes/prism-solarizedlight.css"
import Highlight, { defaultProps } from "prism-react-renderer"

const Code = ({ data: { primary } }) => (
  <Highlight {...defaultProps} code={primary.code.text} language={primary.lang}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        <div
          className={className}
          style={{
            ...style,
            margin: "0.25rem auto 0.5rem auto",
            color: "#f7f8f9",
          }}
        >
          <span>{primary.lang.toUpperCase()}</span>
        </div>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default Code
