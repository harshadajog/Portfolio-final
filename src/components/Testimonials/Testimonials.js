import './Testimonials.style.scss';

function Testimonials() {
    return(
      <section>
       <div className="testimonials-section">
    <header className="header">
    </header>
    <section className="cards">
        <div className="card">
          <div className="card-content"> 
            <figure class="quote">
              <blockquote>
                I am very glad to have found Harshada to help me.
                I needed several complicated pages redesigned in short amount of time. 
                Fortunately Harshada solved all of my challenges quickly and I was back in business with an improved website. 
                In the future I will have her make an entirely new one for me since she has the definately has the skills and concepts to create a beautiful and functional website.
              </blockquote>
              <figcaption>
                &mdash; Gabriel Coke
                <p><cite>Director, Art Students' Atelier</cite></p>
              </figcaption>
            </figure>
          </div>
        </div>
      {/* </div> */}

      {/* <div className="column"> */}
        <div className="card">
        <div className="card-content"> 
            <figure class="quote">
              <blockquote>
              I had the opportunity to work with Harshada at Bill.com for over 3 years. 
              She worked on both automation with Selenium/Cucumber and front end development with AngularJS. Harshada is easy to work with and all members of the team enjoys working with her. 
              She is also very dedicated and dependable, and would a great contributor to any team.
              </blockquote>
              <figcaption>
                &mdash; Jeng Lung 
                <p><cite>Manager at Bill.com</cite></p>
              </figcaption>
            </figure>
          </div>
        </div>       
    </section>
  </div>
  </section>
    )
}
export default Testimonials;