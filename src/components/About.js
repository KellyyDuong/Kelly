import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';


class About extends React.Component {

   render () {
    const one = (
        <p>
          I am currently a second year <b>Mathematics</b> major at
          <a href="utexas.edu">
            {" "}
            University of Texas at Austin
          </a>
          . I am currently seeking <b>internships</b> to gain experience during my 
          undergraduate career. Upon graduation, I hope to work full-time in the role
          of a <b className="role"> Software Engineer. </b> 
        </p>
      );
      const two = (
        <p>
          Outside of school, I'm interested in trying new foods and restaurants. 
          I also play a lot of video games. And watch k-dramas.
        </p>
      );

      const desc_items = [one, two];

      const tech_stack = [
        "Java",
        "Python",
        "React.js",
        "HTML & CSS",
        "Javascript",
        "R-Studio",
      ];

      const tech_items = tech_stack.map(stack => <li>{stack}</li>);
  

    return (
        <div id="about">
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me.jpg"} alt="Kelly"/>
            </div>
          </div>
      </div>
    )
   };
}

export default About;
