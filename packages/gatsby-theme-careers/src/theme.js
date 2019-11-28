const colors = {
  black: '#010101',
  white: '#ffffff',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;",
}

const fontSizes = [0, 14, 18, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 400, 500, 600, 700]

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
}

export default theme
