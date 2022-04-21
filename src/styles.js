import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --bck: ${props => props.theme.bck};
        --frg: ${props => props.theme.frg};
        --txt: ${props => props.theme.txt};
        --txt2: ${props => props.theme.txt2};
        --shadow: ${props => props.theme.shadow};
    }
`