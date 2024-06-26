import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {get} from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props){  
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        
        let formErrors = false;

        if(password.length<3 || password.length > 20){
            formErrors = true;
            toast.error('Senha inválida');
        }

        if(!isEmail(email)){
            formErrors = true;
            toast.error('Email inválido');
        }

        if(formErrors) return;

        dispatch(actions.loginRequest({email, password, prevPath}));
    }

    return (
        <Container>
            <Title>LOGIN</Title>

            <Form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    Email:
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </label>

                <label htmlFor='password'>
                    Password:
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                </label>
                <button type='submit'>ENTRAR</button>
            </Form>
        </Container>
    );
}