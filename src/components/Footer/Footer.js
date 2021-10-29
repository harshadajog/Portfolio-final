import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
} from "react-icons/ai";

import './Footer.style.scss';
function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">   
          <div className="copywright-section">
            <p>© {year} by Harshada Jog</p>
          </div>
          <div className="social-links-section"> 
    
            <ul className="social-links">
              <li className="social-icons">
              <a
                  href="https://github.com/harshadajog"
                  target="_blank"
                  rel="noreferrer"
                  className="icons"
                >
                  <AiFillGithub />
                  </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshada-jog-8137a02/"
                  target="_blank"
                  rel="noreferrer"
                  className="icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
    )}
export default Footer;