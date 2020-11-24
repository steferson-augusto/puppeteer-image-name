import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-color: ${props => props.theme.colors.background};
    --text-color: ${props => props.theme.colors.text};
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --surface: ${props => props.theme.colors.surface};
    --error: ${props => props.theme.colors.error};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font: 400 16px Roboto, sans-serif;
  }

  .toast {
    max-width: 70vw;
    border-radius: 3px;
    background-color: var(--surface);
  }

  .toast-error {
    max-width: 70vw;
    border-radius: 3px;
    background-color: var(--error);
  }
`
