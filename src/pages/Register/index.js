import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';
import * as actions from '../../store/modules/auth/actions';


export default function Register(){ 
    const dispatch = useDispatch(); 
    
    /*const id = useSelector((state) => state.auth.user ? state.auth.user.id : state.auth.id,);
    const nomeStored = useSelector((state) => state.auth.user ? state.auth.user.nome : state.auth.nome,);
    const emailStored = useSelector((state) => state.auth.user ? state.auth.user.email : state.auth.email,); */
    const id = useSelector((state) => state.auth.user.id);
    const nomeStored = useSelector((state) => state.auth.user.nome);
    const emailStored = useSelector((state) => state.auth.user.email);
  
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');

    React.useEffect(() => {
        if(!id) return;
        setNome(nomeStored);
        setEmail(emailStored);
    }, [emailStored, id, nomeStored]);

    async function handleSubmit(e){
        e.preventDefault();
        let formErrors = false;

        if(nome.length<3 || nome.length > 20){
            formErrors = true;
            toast.error('Nome de tamanho inválido');
        }

        if(!id && (password.length<3 || password.length > 20)){
            formErrors = true;
            toast.error('Senha de tamanho inválido');
        }

        if(!isEmail(email)){
            formErrors = true;
            toast.error('Email inválido');
        }

        if(formErrors) return;

        dispatch(actions.registerRequest({ nome, email, password, id}));
    }
    
    return (
        <Container>
            <Title>{id ? 'EDITAR DADOS DA CONTA' : 'CRIE SUA CONTA!'}</Title>

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
                <button type='submit'>{id ? 'ATUALIZAR DADOS' : 'CRIAR MINHA CONTA'}</button>
            </Form>
        </Container>
    );
}