import React from 'react'
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
const data = [
  { data: 4500 },
  {
    data: 5000,
  },
  {
    data: 4700,
  },
  {
    data: 4400,
  },
  {
    data: 4800,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6580,
  },
  {
    data: 6780,
  },
  {
    data: 6680,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 5900,
  },
  {
    data: 5700,
  },
  {
    data: 5500,
  },
  {
    data: 5300,
  },
  {
    data: 5100,
  },
  {
    data: 5090,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6780,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6700,
  },
  {
    data: 7000,
  },
  {
    data: 7300,
  },
  {
    data: 7500,
  },
  {
    data: 7700,
  },
  {
    data: 8090,
  },
  {
    data: 8190,
  },
  {
    data: 7990,
  },

  {
    data: 7700,
  },
  {
    data: 7500,
  },
  {
    data: 7300,
  },
  {
    data: 7000,
  },
  {
    data: 6700,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6780,
  },
  {
    data: 6300,
  },
  {
    data: 6000,
  },
  {
    data: 5800,
  },

  {
    data: 5490,
  },
  {
    data: 6000,
  },
  {
    data: 8000,
  },
];

export default function Earning() {
    return (
        <Section>
            <div className="top">
                <div className="info">
                    <h2>Your's Earning</h2>
                    <h1>$ 682.4</h1>
                    <div className="growth">
                        <span>+2.45%</span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <ResponsiveContainer height="100%" width="100%">
                    <AreaChart width={500}
                    height={400}
                    data={data}
                    margin={{top:0, left:0, right:0, bottom:0}}
                    >

                        <Tooltip cursor={false}/>
                        <Area 
                        animationBegin={800}
                        animationDuration={2000}
                        type="monotone"
                        dataKey="data" 
                        stroke="#ffc107"
                        fill="#8068233e"
                        strokeWidth={4}

                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Section>
    )
}

const Section=styled.section`
display:flex;
flex-direction:column;
justify-content: space-between;
min-height: 20rem;
${cardStyles}
padding:1rem 0 0 0;
.top{
    .info{
        display: flex;
        flex-direction: column;
        
        align-items: center;
        gap:0.3rem;
        h1{
            font-size: 2rem;
        }
        h2{
            font-family: 'Lexend', sans-serif;
        color:#ffc107;
        }
        .growth{
            background-color: #d7e41e1d;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            transition: 0ms.3s ease-in-out;
        }
    }
}
.chart{
    height: 70%;
    .recharts-default-tooltip{
        background-color: transparent!important;
        border:transparent!important;
        color:ffc107!important;
        height: 35px;
        text-align:center;
    }
}
`;