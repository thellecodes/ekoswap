import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#ffffff',
  black: '#000000',
  ekoswap: {
    primary: '#FEF2AF',
    secondary: '#233CEC',
    silver: '#DFDEFA',
    brown: '#402B40',
  },
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
};

const styles = {
  global: () => ({
    html: {
      fontSize: { base: '14px', md: '18px' },
      scrollBehaivor: 'smooth',
    },
    body: {
      fontFamily: '"Poppins", sans-serif',
      background: 'ekoswap.primary',
      color: 'brand.dark.100',
      tansition: 'all 0.2s ease-in-out',
    },
    button: {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
      },
    },
    a: {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
      },
    },
    img: {
      userSelect: 'none',
    },
  }),
};

export const theme = extendTheme({ styles, colors, breakpoints });
