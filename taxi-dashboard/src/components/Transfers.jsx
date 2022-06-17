import React from 'react'
import styled from 'styled-components'

import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

export default function Transfers() {
    const transactions = [
        {
          image: avatarImage,
          name: "From Kishan Sheth",
          time: "Today, 16:36",
          amount: "+$50",
        },
        {
          image: avatarImage,
          name: "To Lauras Santos",
          time: "Today, 08:49",
          amount: "-$25",
        },
        {
          image: avatarImage,
          name: "From Jadon S.",
          time: "Yesterday, 14:36",
          amount: "+$150",
        },
      ];
    return (
        <Section>
            <div className="title">
                <h2>Your's Transactions</h2>
            </div>
            <div className="transactions">{
            transactions.map((transaction,index)=>{
                return(
                   <div className="transaction" key={index}>
                       <div className="transaction__title">
                           <div className="transaction__title__image">
                               <img src={transaction.image} alt="" />
                           </div>
                           <div className="transaction__title__details">
                               <h3>{transaction.name}</h3>
                               <h5>{transaction.time}</h5>
                           </div>
                       </div>
                       <div className="transaction_ammount">
                           <span>{transaction.amount}</span>
                       </div>
                   </div>
                );
            })}
            </div>
            <a href="#" className="view">View all 
            <HiArrowNarrowRight/>
            </a>
        </Section>
    )
}
const Section =styled.section`
${cardStyles}
display: flex;
flex-direction: column;
gap:1rem;
.title{
    h2{
        font-family: 'Lexend', sans-serif;
        color:#ffc107;
    }
}
.transactions{
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-top: 1rem;
    .transaction{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .transaction__title{
            display:flex;
            gap:1rem;  
            .transaction__title__image{
                img{
                    height: 3rem;
                    width:3rem;clear
                    border-radius: 50%;
                }
            }        
        }
        .transaction_ammount{
            text-align:center;
            background-color: #d7e41e1d;
            padding: 0.3rem 0.8rem;
            width: 4.4rem;
            
            border-radius: 1.2rem;
            &:hover{
                background-color: #ffc107;
                color:black;
            }
        }
    }    
}
.view{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color:#ffc107;
    font-weight: bold;
    gap:1.3rem;
    letter-spacing: 1px;
    font-size: 15px;
    transition: 0.3s ease-in-out;
    &:hover{
        padding: 0.2rem 0.5rem;
    }
    svg{
    }
}
`;