import { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';

const folder = process.env.NEXT_PUBLIC_BASE_URL;

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Asap';
        src: url(${folder}/fonts/Asap-VariableFont_wdth,wght.ttf)
            format('truetype-variations');
        font-weight: 500, 700;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        min-height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Asap', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 12px;
        color: white;
        scroll-behavior: smooth;

        ${up('md')} {
            font-size: 16px;
        }
    }

    body::before {
        content: '';
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, rgba(0,0,0,0.9780287114845938) 0%, rgba(209,88,233,1) 80%, rgba(255,255,255,1) 100%);
        z-index: -1;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    hr {
        width: 80%;
        margin: 10px 0;

        ${up('md')} {
            display: none;
        }
    }

    h1 {
        font-size: 35px;

        ${up('md')} {
            font-size: 60px;
        }
    }

    h2 {
        font-size: 24px;

        ${up('md')} {
            font-size: 40px;
        }
    }

    p {
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 1.4em;

        ${up('md')} {
            font-size: 20px;
        }
    }
`;
