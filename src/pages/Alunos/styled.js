import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunosContainer = styled.div`
    color: black;
    margin-top: 25px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
    }

    div + div {
        border-top: 1px solid #eee;
    }
    .actionButtons {
        display: flex;
        gap: 10px; 
    }

    .excl {
        color: ${colors.primaryColor}
    }
`

export const Title = styled.h1`
    text-align: center;
`

export const NovoAluno = styled(Link)`
    display: block;
    padding: 10px;
`