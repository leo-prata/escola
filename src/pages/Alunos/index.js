import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { AlunosContainer, Title, NovoAluno } from './styled';
import { FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import axios from '../../services/axios';
import { toast } from 'react-toastify';

export default function Aluno(){  
    const [alunos, setAlunos] = React.useState([]);

    React.useEffect(() => {
        async function getData(){
            const response = await axios.get('/alunos');    
            setAlunos(response.data); 
        }

        getData();
    }, []);

    function handleAskDelete(e){
        e.preventDefault();

        const exclamation = e.currentTarget.nextSibling;
        exclamation.setAttribute('display', 'block');
        e.currentTarget.remove();
    }

    async function handleDelete(e, id, index){
        e.persist();
        try{
            await axios.delete(`/alunos/${id}`);
            const novosAlunos = [...alunos];
            novosAlunos.splice(index, 1);
            setAlunos(novosAlunos);
        }catch(err){
            const status = get(err, 'response.status', 0);
            if(status === 401){
                toast.error('Login necessáiro');
            } else{
                toast.error('Ocorreu um erro');
            }
        }
    }
    
    return (
        <Container>
            <Title>Alunos</Title>

            <NovoAluno to='/aluno/'>Novo aluno</NovoAluno>

            <AlunosContainer>
                {alunos.map((aluno, index) => (
                    <div key={String(aluno.id)}>
                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>
                        <div className='actionButtons'>
                            <Link to={`/aluno/${aluno.id}/edit`}> <FaEdit size={15} /> </Link>
                            <Link onClick={handleAskDelete} to={`/aluno/${aluno.id}/delete`}> <FaWindowClose size={15} /> </Link>
                            <FaExclamation 
                                display='none' 
                                cursor='pointer'
                                onClick={e => handleDelete(e, aluno.id, index)}
                                className='excl'
                            />
                        </div>
                    </div>
                ))}
            </AlunosContainer>
        </Container>
    );
}

/*{alunos.map(aluno => (
    <div key={String(aluno.id)}>
        <img crossOrigin="" src={aluno.Fotos[0].url} alt=''></img>
    </div>
))}
*/