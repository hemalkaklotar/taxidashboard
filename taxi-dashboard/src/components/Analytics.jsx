import React from 'react'
import styled from 'styled-components'
import {cardStyles} from './ReusableStyles'

import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

export default function Analytics() {
    return (
        <Section>
            <div className="analytic">
                <div className="content">
                    <h5>Spent this month</h5>
                    <h2>$ 682.5</h2>
                </div>
                <div className="logo">
                    <BsFillCalendar2WeekFill/>
                </div>
            </div>
            <div className="analytic">
                <div className="logo">
                    <IoStatsChart/>
                </div>
                <div className="content">
                    <h5>Earnings</h5>
                    <h2>$ 350.40</h2>
                </div>
            </div>
            <div className="analytic">
            <div className="logo">
                <BiGroup/>
            </div>
                <div className="content">
                <h5>New clients</h5>
                    <h2>350</h2>
                </div>
               
            </div>
            <div className="analytic">
                <div className="content">
                    <h5>Activity</h5>
                    <h2>$ 510.40</h2>

                </div>
                <div className="logo">
                    <FiActivity/>
                </div>
            </div>
        
        </Section>
    )
}
const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
gap:1rem;
    .analytic{
        ${cardStyles};
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition:0.3s ease-in-out;

        &:hover{
            background-color: #ffc107;
            color:black;
            svg{
            color: white;
            }
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            padding: 1.4rem;
            border-radius: 50%;
            svg{
                font-size: 1.5rem;
            }
        }
        .content{
            h5,h2{
            font-family: 'Montserrat', sans-serif;
            }
            h5{
                font-size: 14px;
                font-weight: 200;
                letter-spacing: 1px;
                margin-bottom: 5px;
            }

        }
    }

`;
