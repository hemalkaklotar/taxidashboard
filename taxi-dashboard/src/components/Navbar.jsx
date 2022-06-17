import React from 'react'
import styled from 'styled-components';
import {BiSearch}from 'react-icons/bi';
export default function Navbar() {
    return (
        <Nav>
            <div className="title">
                <h4>HI,Hemal</h4>
                <h1>Welcome to <span>MY TAXI DASHBOARD</span></h1>
            </div>
            <div className="search">
                <BiSearch/>
                <input type="text" placeholder='Search...'/>

            </div>
        </Nav>
    )
}

const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items: center;
.title{
    h1{
        span{
            color:#ffc107;
            letter-spacing: 4px;
            font-family: 'Lexend', sans-serif; 
        }
    }
}

.search{
    display: flex;
    align-items: center;
    justify-content:center;
    background: #212121;
    padding: 1rem 4rem 1rem 1rem;
    font-family: 'Lexend', sans-serif; 
    gap:1.2rem;
    border-radius:1rem;
    svg{
        font-size: 16px;
        color: #ffc107;
    }
    input[type=text]{
        background: transparent;
        outline: none;
        border: none;
        &::placeholder{
            font-family: 'Montserrat', sans-serif;
            font-size: 15px;
            color: #ffc107;
        }
        &:focus{
            color: #ffc107;
        }
    }
}
`;