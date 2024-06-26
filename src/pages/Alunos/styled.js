import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunosContainer = styled.div`
    
    color: white;
    margin-top: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    div {
        width: 100%;
        max-width: 500px; 
        display: flex;
        flex-direction: row; 
        align-items: center; 
        justify-content: center; 
        padding: 10px;
        gap: 125px; 
        border: 0.5px solid rgb(172, 172, 172);
        border-radius: 3px;
        margin-bottom: 4px;
    }

    .actionButtons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        border: none;
    }

    .excl {
        color: white;
    }
    
`

export const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`

export const NovoAluno = styled(Link)`
    display: inline-block; 
    margin-top: 25px;
    text-align: center;
    padding: 10px 20px; 
    background-color: rgb(15, 15, 15); 
    color: white; 
    border-radius: 5px; 
    font-size: 16px; 
    justify-content: center;

`