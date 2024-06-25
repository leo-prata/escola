import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { get } from 'lodash'
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register(){  
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        let formErrors = false;

        if(nome.length<3 || nome.length > 20){
            formErrors = true;
            toast.error('Nome de tamanho inválido');
        }

        if(password.length<3 || password.length > 20){
            formErrors = true;
            toast.error('Senha de tamanho inválido');
        }

        if(!isEmail(email)){
            formErrors = true;
            toast.error('Email inválido');
        }

        if(formErrors) return;

        try{
            await axios.post('/users/', {
                nome,
                password,
                email
            })

            toast.success("Conta criada com sucesso!");
            history.push('/');
        }catch(err){
            const errors = get(err, 'response.data.errors', []); //.errors vem do objeto criado para armazenar os erros lá na API
            errors.map(error => toast.error(error));
        }
        
    }
    
    return (
        <Container>
            <Title>Crie sua conta!</Title>

            <Form onSubmit={handleSubmit}>
                <label htmlFor='nome'>
                    Nome:
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
                </label>

                <label htmlFor='email'>
                    Email:
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </label>

                <label htmlFor='password'>
                    Password:
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                </label>
                <button type='submit'>Criar minha conta</button>
            </Form>
        </Container>
    );
}