import React from 'react';

const About = (props) => {
    return(
        <div className="about">
          <div>
            <h5>v1.2.0</h5>
            <p>Created By <a rel="noopener noreferrer" target="_blank" href="https://www.trycatchclasses.com/">SumTech</a></p>
          </div>
          <div className="about-user">
            <a href="/"><i className="fa fa-facebook fa-fw"></i></a>		
            <a href="https://github.com/sumit-hue"><i className="fa fa-github fa-fw"></i></a>
            <a href="/"><i className="fa fa-codepen fa-fw"></i></a>	
            <a href="/"><i className="fa fa-user-o fa-fw"></i></a>
          </div>
        </div>
    );
}

export default About;