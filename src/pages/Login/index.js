import React from 'react';
import { useDispatch } from 'react-redux'

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login(){  
    const dispatch = useDispatch();
    
    function handleClick(e){
        e.preventDefault();
        dispatch({
            type: 'BUTTON_CLICK',
        });
    }
    
    return (
        <Container>
        <Title>
            Login
        </Title>
        <br />
        <button type='button' onClick={handleClick}>
            Enviar
        </button>
        </Container>
    );
}