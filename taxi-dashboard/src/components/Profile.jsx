import React from 'react'
import styled from "styled-components";
import image from "../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";

export default function Profile() {
    return (
        <Section>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="title">
                <h2>Hemal Kaklotar</h2>
                <h5><HiOutlineLocationMarker/>Gujrat,India </h5>
            </div>
            <div className="info">
                <div className="container">
                    <h5>Days at work</h5>
                    <h3>28</h3>
                </div>
               
                <div className="container">
                    <h5>Rides</h5>
                    <h3>328</h3>
                </div>
                <div className="container">
                    <h5>Hours</h5>
                    <h3>432</h3>
                </div>
            </div>
        </Section>
    )
}
const Section = styled.section`
${cardStyles}
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:1.2rem;
.image{
    max-height: 12rem;

    img{
        height: 12rem;
        width: 12rem;
        object-fit: cover;
        border-radius: 50%;
        transform: 0.4s ease-in-out;
        &:hover{
            transform: scale(1.03);
        }

    }
}
.title{
    text-align: center;
    h2,h5{
        color: #ffc107;
        font-family: 'Lexend', sans-serif;
        letter-spacing: 3px;
    }
    h5{
        
    }
}
.info{
    display: flex;
    gap:1.1rem;
    
    .container{
        text-align:center;
        
        h5{
            font-size: 16px;
            color: #ffc107;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }
        h3{
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
}
`;