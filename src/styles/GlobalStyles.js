import styled, { createGlobalStyle } from 'styled-components';
import { primaryDarkColor, primaryColor } from '../config/colors'

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
    }

    a {
        text-decoration: none;
        color: ${primaryColor};
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    background: white;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
`;