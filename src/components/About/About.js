import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import Particle from "../../resources/Particle";
  import avatar from '../../assets/avatars/avatar1.png';
import './About.style.scss';
function About() {
    return (
        <section>
        <div className="home-section" id="home">
         <Particle />   
            <div className="home-header">
             {/* <img src={profilePic} alt="profile pic" className="img-fluid" /> */}
               <h4 className="heading-name">
                    My Philosophy - TBD
               </h4>
               </div>
               <div className="home-detail">
                    <img src={avatar} alt="home pic" className="img-fluid" />
                    {/* <span>I am a Software Engineer. I love to build user experiences</span>
                    <p>that are <span style={{'color': "#4285F4"}}>beautiful</span> and <span style={{'color': "#4285F4"}}>serve a purpose</span>.</p> */}
                </div>
                <div className="home-about-social">
                    <p>Feel free to connect with me</p>
                    <div className="home-about-social-links">
                        <div>
                            <a href="https://github.com/harshadajog"
                                target="_blank" rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                ><AiFillGithub />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/harshada-jog-8137a02/"
                                target="_blank" rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                ><FaLinkedinIn />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/harshadajog"
                                target="_blank" rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                ><AiFillGithub />
                            </a>
                        </div>
                    </div>
            </div>        
        </div>
     </section>  




        // <div className="about-section" id="about">
        //     <Particle />
        //     <div className="about-card">
        //         My details bbbbbb
        //         <div className="my-details"></div>
        //         <div className="avatar">
        //     <img src={avatar} className="img-fluid" alt="avatar" />
        //     </div>
        //     </div>
        //     <div className="home-about-social">
        //         <p>
        //         Feel free to <span className="purple">connect </span>with me
        //         </p>
        //         <ul className="home-about-social-links">
        //         <li className="social-icons">
        //             <a
        //             href="https://github.com/harshadajog"
        //             target="_blank"
        //             rel="noreferrer"
        //             className="icon-colour  home-social-icons"
        //             >
        //             <AiFillGithub />
        //             </a>
        //         </li>
        //         <li className="social-icons">
        //             <a
        //             href="https://twitter.com/harshadajog"
        //             target="_blank"
        //             rel="noreferrer"
        //             className="icon-colour  home-social-icons"
        //             >
        //             <AiOutlineTwitter />
        //             </a>
        //         </li>
        //         <li className="social-icons">
        //             <a
        //             href="https://www.linkedin.com/in/harshada-jog-8137a02/"
        //             target="_blank"
        //             rel="noreferrer"
        //             className="icon-colour  home-social-icons"
        //             >
        //             <FaLinkedinIn />
        //             </a>
        //         </li>
        //         </ul>
        //     </div>
        // </div>
    )
}
export default About;
