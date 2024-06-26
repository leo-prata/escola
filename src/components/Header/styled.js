import styled from 'styled-components';
import { primaryColor } from '../../config/colors'

export const Nav = styled.nav`
    background: ${primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Alterado de right para space-between */

    .links {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    a{
        color: whitesmoke;
        margin: 0 10px 0;
        font-weight: bold;
    }
    img {
        width: 40px;
        height: 40px;
    }
`;