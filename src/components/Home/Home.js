import React from "react";
import Particle from "../../resources/Particle";
import home from '../../assets/avatars/website-setup/home1.png'
import profilePic from '../../assets/profile_pic.jpg';
import './Home.style.scss';

// https://stackoverflow.com/questions/49886123/trying-to-create-a-typing-effect-on-reactjs

function Home() {
  return (
    <section>
       <div className="home-section" id="home">
        <Particle />   
          <div className="home-header">
            <img src={profilePic} alt="profile pic" className="img-fluid" />
              <h4 className="heading-name">
                Hi, I am Harshada.
              </h4>
              </div>
              <div className="home-detail">
              <img src={home} alt="home pic" className="img-fluid" />
                <span>I love building user experiences</span>
                <p>that are <span style={{'color': "#4285F4"}}>beautiful</span> and <span style={{'color': "#4285F4"}}>serve a purpose</span>.</p>
                <p>I am also learning Full-Stack Development by volunteering at Code For San Jose.</p>
              </div>
        </div>
    </section>          
  );
}

export default Home;
