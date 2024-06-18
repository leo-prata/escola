import React from 'react';
import { Nav } from './styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(){
    const buttonClicked = useSelector(state => state.buttonClick); // " state.buttonClick " vindo do Store  
    return(
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/teste'>Teste</Link>
            {buttonClicked ? 'Clicked' : 'Not Clicked'}
        </Nav>    
    );
}