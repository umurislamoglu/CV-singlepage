import React from "react";
import Bio from "../components/about/Bio";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import Skills from "../components/about/Skills";

const About = () => {
  return (
    <div id="about">
      <div className="greeting d-flex justify-content-start align-items-center">
        <h1 className="container px-5" style={{ "fontSize": "50px" }}>
          Umur Islamoglu
        </h1>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center position-relative">
          <img
            src="https://avatars.githubusercontent.com/u/74820307?s=96&v=4"
            alt="image"
            className="rounded-circle position-absolute top-0 start-50 translate-middle border border-4 border-secondary"
            style={{ width: "250px" }}
            
          />
        </div>
        <div id="aboutContent">
          
          <Bio />
          <Skills />

          <Education />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;
