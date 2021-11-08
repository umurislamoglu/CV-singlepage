import React from "react";
import Company from "./Company";

const Experience = () => {
  return (
    <div id="experience" className=" p-5 shadow p-3 mb-5 bg-body rounded">
      <h3 className="fw-normal mb-3 px-5">Experience</h3>
      <Company
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/2039px-Vodafone_icon.svg.png"
        companyName="Vodafone"
        title="Business Intelligence Consultant"
        date="Dec 2020 - Today"
        responsibilities={JSON.stringify([
          "Responsible for Group KPI's",
          "Automating the data and analysis needs of Finance department",
        ])}
      />
      <Company
        imgUrl="https://proserbilisim.com/Resim/Hizmet/3xs1stonrvc.png"
        companyName="Aytemiz Akaryakıt Dağıtım A.Ş."
        title="Reporting and Analysis Specialist"
        date="Mar 2019 - Dec 2020"
        responsibilities={JSON.stringify([
          "Responsible for operational reporting to the executives",
          "Responsible for Performance Analysis and Activity Report",
          "Automating the reporting environment",
          "Supporting the Non-Fuel Sales Department with Stock, Sales and PriceAnalysis Reports",
        ])}
      />
        <Company
        imgUrl="https://logos-world.net/wp-content/uploads/2021/02/HSBC-Emblem.png"
        companyName="HSBC Bank A.Ş."
        title="Finance Assistant Specialist"
        date="Dec 2017 - May 2018"
        responsibilities={JSON.stringify([
          "Supporting the Regulatory department",
          "Responsible for reporting KPI's to regulatory autorities such as TCMB,BDDK and Treasury",
          "Fullling Adhoc Reporting needs<"
        ])}
      />

 

      
    </div>
  );
};

export default Experience;
