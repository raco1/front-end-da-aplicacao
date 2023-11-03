import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}

body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
    color: ${({ theme }) => theme.COLORS.DEFAULT_TEXT_COLOR};
}

body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
}
a{
    text-decoration: none;
}
button, a{
    cursor: pointer;
    transition: filter 200ms;
}
button:hover{
    filter: brightness(0.9);
}
input, textarea{
    outline: 0;
}
`;