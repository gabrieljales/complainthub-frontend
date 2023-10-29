import { extendTheme } from '@chakra-ui/react';

/**
 * Define um tema personalizado para a aplicação.
 *
 * @type {Theme}
 */
const customTheme = extendTheme({
  fontSizes: {
    xs: '8px',
    sm: '10px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

export default customTheme;
