import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { AlunosContainer } from './styled';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import axios from '../../services/axios';

export default function Aluno(){  
    const [alunos, setAlunos] = React.useState([]);

    React.useEffect(() => {
        async function getData(){
            const response = await axios.get('/alunos');    
            setAlunos(response.data); 
        }

        getData();
    }, []);
    
    return (
        <Container>
            <h1>Alunos</h1>

            <AlunosContainer>
                {alunos.map(aluno => (
                    <div key={String(aluno.id)}>
                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>
                        
                        <Link to={`/aluno/${aluno.id}/edit`}> <FaEdit size={15} /> </Link>
                        <Link to={`/aluno/${aluno.id}/delete`}> <FaWindowClose size={15} /> </Link>
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