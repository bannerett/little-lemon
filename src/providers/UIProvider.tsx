import { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/karla';
import '@fontsource/markazi-text';

const theme = extendTheme({
  colors: {
    primary: {
      green: '#495E57',
      yellow: '#F4CE14',
    },
    secondary: {
      orange: '#EE9972',
      beige: '#FBDABB',
      grey: '#EDEFEE',
      dark: '#333333',
    },
  },
  fonts: {
    body: 'Karla, sans-serif',
    heading: 'Markazi Text, serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  components: {
    Button: {
      baseStyle: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.25,
        textTransform: 'capitalize',
        borderRadius: 16,
      },
      defaultProps: {
        fontSize: 18,
      },
    },
    Text: {
      baseStyle: {
        lineHeight: 1.25,
        fontSize: 'xl',
      },
    },
  },
});

function UIProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default UIProvider;
