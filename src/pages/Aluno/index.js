import React from 'react';
import { Title, Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import axios from '../../services/axios';
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }){  
    const id = get(match, 'params.id', 0);
    const dispatch = useDispatch();

    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');

    React.useEffect(() => {
        if(!id) return;
        async function getData(){
            try{
                const { data } = await axios.get(`/alunos/${id}`);
                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setEmail(data.email);
                setIdade(data.idade);
                setPeso(data.peso);
                setAltura(data.altura);          
                 
            }catch(err){
                const status = get(err, 'response.status', 0);
                const errors = get(err, 'response.data.errors', []);
                
                if(status === 400){
                    errors.map(error => toast.error(error));
                }
                history.push('/');
            }
        }
        getData();
    }, [id]);

    async function handleSubmit(e){
        e.preventDefault();
        
        let formErrors = false;
        if (nome.length < 3 || nome.length > 255) {
          toast.error('Nome precisa ter entre 3 e 30 caracteres');
          formErrors = true;
        }
        if (sobrenome.length < 3 || sobrenome.length > 255) {
          toast.error('Sobrenome precisa ter entre 3 e 30 caracteres');
          formErrors = true;
        }   
        if (!isEmail(email)) {
          toast.error('E-mail inválido');
          formErrors = true;
        }
        if (!isInt(String(idade))) {
          toast.error('Idade inválida');
          formErrors = true;
        }
        if (!isFloat(String(peso))) {
          toast.error('Peso inválido');
          formErrors = true;
        }  
        if (!isFloat(String(altura))) {
          toast.error('Altura inválida');
          formErrors = true;
        }  
        if (formErrors) return;

        try{
            if(id){
                await axios.put(`/alunos/${id}`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso,
                    altura
                })
                toast.success('Aluno atualizado!');
                history.push(`/`);
            } else{
                await axios.post('/alunos/', {
                    nome,
                    sobrenome,
                    idade,
                    email,
                    peso,
                    altura
                })
                toast.success('Aluno criado!');
                history.push(`/`);
            }
        }catch(err){
            const status = get(err, 'response.status', 0);
            const data = get(err, 'response.data', {});
            const errors = get(data, 'errors', []);
      
            if (errors.length > 0) {
              errors.map((error) => toast.error(error));
            } else {
              toast.error('Erro desconhecido');
            }
      
            if (status === 401) dispatch(actions.loginFailure());
          }
    }

    return (
        <Container>
            <Title>{id ? 'Editar aluno' : 'Novo aluno' }</Title>

            <Form onSubmit={handleSubmit}>
                <label htmlFor='nome'>
                    Nome:
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
                </label>

                <label htmlFor='sobrenome'>
                    Sobrenome:
                    <input type='text' value={sobrenome} onChange={e => setSobrenome(e.target.value)}></input>
                </label>

                <label htmlFor='email'>
                    Email:
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </label>
                
                <label htmlFor='idade'>
                    Idade:
                    <input type='number' value={idade} onChange={e => setIdade(e.target.value)}></input>
                </label>

                <label htmlFor='peso'>
                    Peso:
                    <input type='number' value={peso} onChange={e => setPeso(e.target.value)}></input>
                </label>

                <label htmlFor='altura'>
                    Altura:
                    <input type='number' value={altura} onChange={e => setAltura(e.target.value)}></input>
                </label>

                <button type='submit'>Enviar</button>

            </Form>
        </Container>
    );
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
}