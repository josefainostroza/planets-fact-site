import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
    font-family: "League Spartan"
    margin: 0;
    color:rgb(255, 255, 255);
    background-color: #070724;
    background-image: url('/assets/background-stars.svg);
    background-size: cover;
    
    }

    h1,h2,h3{
        font-family: Antonio';
        margin-block: 0;
    }
`;
