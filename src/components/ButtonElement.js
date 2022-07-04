import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#fff' : '#000')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '24px 70px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#000' : '#fff')};
    font-size: ${({fontbig}) => (fontbig ? '30px' : '20px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 3;
    font-weight: 600;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #FF7700;
        color: #000;
    }
`