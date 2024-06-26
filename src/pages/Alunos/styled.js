import styled from 'styled-components';

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
`

export const Title = styled.h1`
    text-align: center;
`