import { createGlobalStyle } from 'styled-components'

export const defaultTheme = {
  white: '#FFF',

  gray100: '#E1E1E6',
  gray300: '#C4C4CC',
  gray400: '#8D8D99',
  gray500: '#7C7C8A',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',

  green300: '#00B37E',
  green500: '#00875F',
  green700: '#015F43',

  red500: '#AB222E',
  red700: '#7A1921',

  yellow500: '#FBA94C',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${defaultTheme.gray500};
    }

    body {
        background: ${defaultTheme.gray900};
        color: ${defaultTheme.gray300};
        -webkit-font-smoothing: antialiased;
    }

    border, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
