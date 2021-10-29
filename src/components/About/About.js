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
        <div className="about-section" id="about">
            <Particle />
            <div className="about-card">
                My details bbbbbb
                <div className="my-details"></div>
                <div className="avatar">
            <img src={avatar} className="img-fluid" alt="avatar" />
            </div>
            </div>
            <div className="home-about-social">
                <p>
                Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                    href="https://github.com/harshadajog"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://twitter.com/harshadajog"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <AiOutlineTwitter />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.linkedin.com/in/harshada-jog-8137a02/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <FaLinkedinIn />
                    </a>
                </li>
                </ul>
            </div>
        </div>
    )
}
export default About;
