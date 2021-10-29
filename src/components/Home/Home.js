import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "../../resources/Particle";
import home from '../../assets/avatars/website-setup/home1.png'
import profilePic from '../../assets/profile_pic.jpg';
import './Home.style.scss';

// https://stackoverflow.com/questions/49886123/trying-to-create-a-typing-effect-on-reactjs

function Home() {
  return (
    <section>
       <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
            <img src={profilePic} alt="home pic" className="img-fluid" />
              <h3 className="heading-name">
                Hi, I am Harshada.
              </h3>
              <p>Welcome Home.</p>
              <div style={{'padding-top': "3.0rem"}}>
              <span>I am a Software Engineer, passionate about crafting user experiences</span>
              <p>that are <span style={{'color': "#4285F4"}}>beautiful</span> and <span style={{'color': "#4285F4"}}>serve a purpose</span>.</p>
              </div>
            </Col>
            <Col md={4} className="avatar">
              <img src={home} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>          
  
      // {/* <div className="home-section" id="home">
      //   <Particle /> 
      //   <header className="header">
      //     <h2>Hi, I'm Harshada.</h2>
      //     <p>Welcome Home.</p>
      //   </header>
      //   <section className="cards">
      //       <div className="avatar"> 
      //         <img src={home} className="img-fluid" alt="avatar" />
      //         </div>
      //         <div className="details">
      //           <span>I am a Software Engineer, passionate about crafting user experiences</span>
      //           <p>that are <span style={{'color': "#4285F4"}}>beautiful</span> and <span style={{'color': "#4285F4"}}>serve a purpose</span>.</p>       
      //         </div>
      //   </section>
      // </div> */}
  );
}

export default Home;
