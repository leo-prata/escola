import styled, { createGlobalStyle } from 'styled-components';
import { errorColor, successColor } from '../config/colors'
import 'react-toastify/ReactToastify.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body{
        font-family: 'Helvetica', serif;
        background: linear-gradient(to right, rgb(71, 71, 71), rgb(51, 50, 50));
        color: white;
        
    }

    html, body, #root{
        //height: 100%;
    }

    button{
        cursor: pointer;
        background: rgb(15, 15, 15);
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
        color: white;
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

    input {
        background: rgb(48, 48, 48);
        color: white;
    }
`;

export const Container = styled.section`
    max-width: 1200px;
    min-height: 520px;
    background: rgb(36, 34, 34);
    margin: 30px auto 30px;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);    
`;