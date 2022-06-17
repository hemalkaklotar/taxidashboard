import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
export default function Sidebar(){
    const [currentlink,setcurrent]=useState(1);
    const[navbarstate, setnavbarstate]=useState(false);
    const html=document.querySelector("html");
    html.addEventListener("click",()=>setnavbarstate(false));
    return (
       <>
            <Section>
                <div className="top">
                    <div className="brand">
                        <FaTaxi />
                        <span>My Texi</span>
                    </div>
                    <div className="toggle"></div>
                    <div className="links">
                        <ul>
                            <li onClick={()=>setcurrent(1)} className={currentlink ===1 ? "active":""}>
                                <a href="#"><MdSpaceDashboard/><span> Dashboard</span></a>
                            </li>
                            <li onClick={()=>setcurrent(2)} className={currentlink ===2 ? "active":""}>
                                <a href="#"><RiDashboard2Fill/><span> Riders</span></a>
                            </li>
                            <li onClick={()=>setcurrent(3)} className={currentlink ===3 ? "active":""}>
                                <a href="#"><FaAddressCard/><span> Payment Details</span></a>
                            </li>
                            <li onClick={()=>setcurrent(4)} className={currentlink ===4 ? "active":""}>
                                <a href="#"><GiTwirlCenter/><span> Learning Center</span></a>
                            </li>
                            <li onClick={()=>setcurrent(5)} className={currentlink ===5 ? "active":""}>
                                <a href="#"><BsFillChatTextFill/><span> FAQs</span></a>
                            </li>
                            <li onClick={()=>setcurrent(6)} className={currentlink ===6 ? "active":""}>
                                <a href="#"><IoSettings/><span> Settings</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
            </Section>
            <ResponsiveNav state={navbarstate} className={navbarstate?"show":""}> 
                <div className="responsive__links">
                <ul>
                            <li onClick={()=>setcurrent(1)} className={currentlink ===1 ? "active":""}>
                                <a href="#"><MdSpaceDashboard/><span> Dashboard</span></a>
                            </li>
                            <li onClick={()=>setcurrent(2)} className={currentlink ===2 ? "active":""}>
                                <a href="#"><RiDashboard2Fill/><span> Riders</span></a>
                            </li>
                            <li onClick={()=>setcurrent(3)} className={currentlink ===3 ? "active":""}>
                                <a href="#"><FaAddressCard/><span> Payment Details</span></a>
                            </li>
                            <li onClick={()=>setcurrent(4)} className={currentlink ===4 ? "active":""}>
                                <a href="#"><GiTwirlCenter/><span> Learning Center</span></a>
                            </li>
                            <li onClick={()=>setcurrent(5)} className={currentlink ===5 ? "active":""}>
                                <a href="#"><BsFillChatTextFill/><span> FAQs</span></a>
                            </li>
                            <li onClick={()=>setcurrent(6)} className={currentlink ===6 ? "active":""}>
                                <a href="#"><IoSettings/><span> Settings</span></a>
                            </li>
                        </ul>
                </div>
            </ResponsiveNav>
       </>
    )
    
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  .top{
      display: flex;
      flex-direction: column;
      width: 100%;
      .toggle{
          display: none;
      }
      .brand{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 25px;
          gap:2rem;
          svg{
              color:#ffc107;
              font-size: 1.6rem;
          }
          span{
              font-size: 1.5rem;
              color: #ffc107;
              font-family: 'Lexend', sans-serif; 
              font-weight: 800;
          }
      }   
      .links{
            display: flex;
            justify-content: center;
            ul{
                list-style: none;
                display: flex;
                flex-direction: column;
                gap:1rem;
                li{
                    padding: 0.6rem 1.3rem;
                    border-radius: 0.6rem;
                    &:hover{
                        background-color: #ffc107;
                        a{
                            color: black;
                        }
                    }
                    a{
                        display: flex;
                        text-decoration: none;
                        color: white;
                        gap:1rem;
                    }
                }
                .active{
                        background-color: #ffc107;
                        a{
                            color: black;
                        }
                    }
            }   
      }
     
  }
  .logout{
      padding: 0.4rem 1.3rem;
      border-radius: 0.6rem;
        &:hover{
            background-color: #da0037;
        }
        a{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-decoration: none;
            color:white;
            font-weight: 400;
            letter-spacing: 2px;
        }
      }
      @media screen and (min-width:280px) and (max-width:1080px) {
          position: initial;
          width: 100%;
          height: max-content;
          padding: 1rem;
          .top{
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              padding: 0 1rem;
              .toggle{
                  display: block;
                  color:white;
                  z-index:10;
                  svg{
                      font-size: 1, 4rem;
                  }
              }
              .brand{
                  gap:1rem;
                  justify-content: flex-start;
              }
          }
        .top > .links,
        .logout{
            display: none;
        }
      }
  `;
const ResponsiveNav = styled.nav`
position: fixed;
right:-10vh;
top: 0;
z-index:20;
background-color: black;
height: 100vh;
width: ${(state)=>(state? "60%":"0%")};
transition: 0.4s ease-in-out;
display: none;
padding: 1rem;
.responsive__links{
    ul{
                list-style: none;
                display: flex;
                flex-direction: column;
                gap:1rem;
                li{
                    padding: 0.6rem 1.3rem;
                    border-radius: 0.6rem;
                    &:hover{
                        background-color: #ffc107;
                        a{
                            color: black;
                        }
                    }
                    a{
                        display: flex;
                        text-decoration: none;
                        color: white;
                        gap:1rem;
                    }
                }
                .active{
                        background-color: #ffc107;
                        a{
                            color: black;
                        }
                    }
            } 
   
}
`;
