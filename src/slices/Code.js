import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import light from "prism-react-renderer/themes/github"
import dark from "prism-react-renderer/themes/vsDark"
import { useThemeUI } from "theme-ui"

// import "prismjs/themes/prism-solarizedlight.css"
// import "../styles/prism-theme.css"

const Code = ({ data: { primary } }) => {
  const { theme, colorMode } = useThemeUI()

  return (
    <Highlight
      {...defaultProps}
      theme={colorMode === "light" ? light : dark}
      code={primary.code.text}
      language={primary.lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            backgroundColor: theme.colors.code,
            marginLeft: primary.type === "list" ? "2.5rem" : null,
          }}
        >
          <div
            className={className}
            style={{
              ...style,
              margin: "0.25rem auto 0.5rem auto",
              color: theme.colors.accent,
              backgroundColor: theme.colors.code,
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
}

export default Code
