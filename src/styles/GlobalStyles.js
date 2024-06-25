import styled, { createGlobalStyle } from 'styled-components';
import { primaryDarkColor, primaryColor, errorColor, successColor } from '../config/colors'
import 'react-toastify/ReactToastify.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background: ${primaryDarkColor};
        color: ${primaryDarkColor}
    }

    html, body, #root{
        height: 100%;
    }

    button{
        cursor: pointer;
        background: ${primaryColor};
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 3px;
        font-weight: 600;
        transition: all 250ms;
    }

    button:hover {
        filter: brightness(85%);
    }

    a {
        text-decoration: none;
        color: ${primaryColor};
    }

    ul {
        list-style: none;
    }

    body .Toastify.Toastify__toast-container .Toastify__toast--success{
        background: ${successColor};
    }

    body .Toastify.Toastify__toast-container .Toastify__toast--error{
        background: ${errorColor};
    }

`;

export const Container = styled.section`
    max-width: 700px;
    background: white;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);    
`;