import React from 'react';
import { Nav } from './styled';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { toast } from 'react-toastify';

export default function Header(){
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    function handleLogout(e){
        e.preventDefault();

        dispatch(actions.loginFailure());
        history.push('/');
        toast.success('Logout realizado');

    }
    
    return(
        <Nav>
            <img src='/icon.png' alt='icon' />
            
            <div className='links'>
            <Link to='/'>Home</Link>
            
            {isLoggedIn ? (
                <Link to='/register'>Edit</Link>
            ) : (
                <Link to='/register'>Register</Link>
            )}
              
            {isLoggedIn ? (
                <Link onClick={handleLogout} to='/logout'>Logout</Link>
            ) : (
                <Link to='/login'>Login</Link>
            )}
            
            {isLoggedIn && <FaCircle size={24} color='#66ff33' />}
            </div>            
        </Nav>    
    );
}