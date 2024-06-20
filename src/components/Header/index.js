import React from 'react';
import { Nav } from './styled';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </Nav>    
    );
}