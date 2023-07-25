import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '@import': 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',

  '*': {
    boxSizing: 'border-box',

    margin: 0,
    padding: '.75rem',

    fontFamily: 'Poppins, sans-serif'
  }
})