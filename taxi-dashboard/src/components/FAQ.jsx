import React from 'react'
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";
export default function FAQ() {
    const faqs = [
        {
          icon: <AiFillCalendar />,
          text: "How to manage time and get good marks for trips",
        },
        {
          icon: <MdTimelapse />,
          text: "How to regulate transactions over time",
        },
        {
          icon: <IoMdCash />,
          text: "Withdrawing money through an ATM",
        },
      ];
    return (
        <Section>
            <div className="title">
                <h2>Information for Drivers</h2>
                </div>
                <div className="faqs">
                 {
                    faqs.map((faq,index)=>{
                        return (
                            <div className="faq"  key={index}>
                                <div className="info">
                                    {faq.icon}
                                    <h4>{faq.text}</h4>
                                </div>
                                <IoIosArrowForward/>
                            </div>
                        )
                    })
                }
            </div>
            
        </Section>
    )
}
const Section=styled.section`
${cardStyles};
.title{
    h2{
        font-family: 'Lexend', sans-serif;
        color:#ffc107;
    }
}
.faqs{
        .faq{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 0;
            .info{
                display: flex;
                h4{
                    font-weight: 300;
                    letter-spacing: 2px;

                }
            }
            svg{
                margin-right: 1rem;    
                font-size:15px ;
            }
        }
    }
`;