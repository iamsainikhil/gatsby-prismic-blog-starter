export default {
  useBodyStyles: true,
  useCustomProperties: true,
  initialColorMode: 'dark',
  useColorSchemeMediaQuery: true,
  useLocalStorage: true,
  breakpoints: ['30em', '47em', '64em', '100em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  borders: [0],
  colors: {
    text: '#000',
    background: '#ffff',
    primary: '#333',
    secondary: '#5b5b5b',
    muted: '#f6f6f6',
    highlight: '#9f9f9f',
    gray: '#6c6c6c',
    accent: '#3f3f3f',
    gatsby: '#352065',
    code: '#fdf6e3',
    shade1: '#d2d2d2',
    shade2: '#e0e0e0',
    modes: {
      dark: {
        text: '#fff',
        background: '#181818',
        primary: '#d2d2d2',
        secondary: '#b2b2b2',
        muted: '#202020',
        highlight: '#3c3c3c',
        gray: '#999',
        accent: '#e0e0e0',
        gatsby: '#b2b2b2',
        code: '#1b1b1b',
        shade1: '#0a0a0a',
        shade2: '#262626'
      }
    }
  },
  fonts: {
    body: "'Inter', 'Lato', sans-serif",
    heading: "'Inter', 'Lato', sans-serif",
    code: "'Fira Code', monospace",
    title: "'Damion', 'Inter', 'Lato', sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  textStyles: {
    title: {
      fontFamily: 'title',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [3, 4, 5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      variant: 'textStyles.body'
    },
    h1: {
      variant: 'textStyles.title',
      fontSize: [4, 5, 6]
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: [3, 4, 5]
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: [2, 3, 4]
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    p: {
      fontSize: [1, 2, 3]
    },
    em: {
      fontSize: [0, 1, 2]
    },
    a: {
      color: 'gatsby',
      textDecoration: 'underline',
      '&:hover': {
        color: 'secondary',
        textDecoration: 'none'
      }
    },
    blockquote: {
      fontSize: [1, 2, 3],
      variant: 'textStyles.body',
      margin: '1.45rem',
      padding: '0 0 0 1rem',
      borderColor: 'gatsby',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderLeftWidth: 2,
      borderRightWidth: 0,
      borderBottomWidth: 0
    },
    pre: {
      fontFamily: 'code',
      fontSize: [0, 1],
      p: [1, 2],
      color: 'text',
      bg: 'code',
      borderColor: 'accent',
      borderStyle: 'solid',
      borderWidth: 2
    },
    code: {
      fontFamily: 'code',
      fontSize: 1,
      color: 'muted',
      bg: 'gatsby',
      px: 1
    },
    inlineCode: {
      fontFamily: 'code',
      color: 'secondary',
      bg: 'muted',
      px: 2
    },
    ul: {
      listStyleType: 'square'
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'text',
        borderBottomStyle: 'solid'
      }
    },
    th: {
      backgroundColor: 'muted',
      verticalAlign: 'bottom',
      borderBottomWidth: 8
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: 4
    },
    hr: {
      border: 0,
      borderBottom: '8px solid',
      borderColor: 'text'
    },
    buttons: {
      primary: {
        color: 'background',
        bg: 'primary',
        '&:hover': {
          bg: 'text'
        }
      },
      secondary: {
        color: 'background',
        bg: 'secondary'
      }
    }
  }
}
