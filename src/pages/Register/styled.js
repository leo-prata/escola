import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    align-items: center;
    
    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 300px;
    }

    input {
        height: 40px;
        border: 1px solid gray;
        border-radius: 3px;
        font-size: 18px;
        padding: 0 7px;
        margin-top: 4px;

        &:focus {
            border: 1px solid rgb(15, 15, 15);
        }
    }
`

export const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 50px;
`