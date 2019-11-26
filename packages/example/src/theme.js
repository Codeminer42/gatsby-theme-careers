const colors = {
  black: '#010101',
  white: '#ffffff',

  mercury: '#e9e9e9',
  doveGray: '#6e6e6e',

  red: '#e40000',
}

colors.accent = colors.red

const sizes = {
  header: '70px',
  hero: '450px',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body: '"Dosis", sans-serif',
}

const fontSizes = [0, 12, 14, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 400, 500, 600, 700]

const borders = {
  jobs: `1px solid ${colors.mercury}`,
}

const theme = {
  colors,
  sizes,
  space,
  fonts,
  fontSizes,
  fontWeights,
  borders,
}

export default theme
