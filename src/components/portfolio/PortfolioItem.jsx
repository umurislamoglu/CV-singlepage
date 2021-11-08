import React from "react";
import SkillBadge from "./../about/SkillBadge";

const PortfolioItem = (props) => {
  const {
    imgUrl,
    projectTitle,
    projectDesciption,
    technologies,
    githubUrl,
    apiUrl,
  } = props;

  const technologiesArr = JSON.parse(technologies);

  const apiUrlArr = JSON.parse(apiUrl);

  return (
    <div className="card row mt-5 d-flex flex-row justify-content-between shadow  bg-white border-0">
      
        <img src={imgUrl} alt="" style={{ height: "400px" }} className="col-lg-3 col-sm-6 card-image-left p-0" loading="lazy" />
     
      <div
        className="card-body col-lg-9 col-sm-6 pl-4 portfolioContent "
        
      >
        <div className="card-title fw-normal bg-white fs-3 ">{projectTitle}</div>
        <div className="card-text fw-light">{projectDesciption}</div>
        <div className="card-title fw-normal fs-4 mt-3">Technologies:</div>
        <div className="card-text ">
          {technologiesArr.map((technology, idx) => {
            return (
              <SkillBadge
                color="success"
                textColor="white"
                title={technology}
                key={idx}
              />
            );
          })}
        </div>
        {apiUrlArr.length > 0 && <div>
          <div className="card-title fw-normal fs-4 mt-3">Api URL:</div>
        <div className="card-text">
          {apiUrlArr.map((apiUrl, idx) => {
            return (
              <a
                href={apiUrl}
                className="fw-light mx-3 text-decoration-none text-dark"
                key={idx}
              >
                {" "}
                {apiUrl}{" "}
              </a>
            );
          })}
        </div></div>}
        {githubUrl && <div>
          <div className="card-title fw-normal fs-4 mt-3">Github URL:</div>
        <div className="card-text">
          <a
            href={githubUrl}
            className="fw-light mx-3 text-decoration-none text-dark"
          >
            {projectTitle}
          </a>
        </div>
          </div>}
       
      </div>
    </div>
  );
};

export default PortfolioItem;
