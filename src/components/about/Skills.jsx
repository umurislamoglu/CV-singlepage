import React from "react";
import SkillBadge from "./SkillBadge";

const Skills = () => {
  return (
    <div id="skills" className="p-5 shadow p-3 mb-5 bg-body rounded">
      <h3 className="fw-normal mb-3 px-5">Skills</h3>

      <div id="technologies" className="px-5">
        <p id="skillHeader" className="fw-normal mb-3">
          Technologies
        </p>
        <SkillBadge
          color="success"
          textColor="white"
          textColor="white"
          title="HTML"
        />
        <SkillBadge color="success" textColor="white" title="CSS" />
        <SkillBadge color="success" textColor="white" title="Bootstrap" />
        <SkillBadge color="success" textColor="white" title="JavaScript" />
        <SkillBadge color="success" textColor="white" title="ReactJs" />
        <SkillBadge color="success" textColor="white" title="JSX" />
        <SkillBadge color="success" textColor="white" title="Redux" />
        <SkillBadge color="success" textColor="white" title="Redux Thunk" />
        <SkillBadge color="success" textColor="white" title="Axios" />
        <SkillBadge color="success" textColor="white" title="JSON" />
        <SkillBadge color="success" textColor="white" title="T-SQL" />
        <SkillBadge color="success" textColor="white" title="PL-SQL" />
      </div>
      <div id="programs" className="mt-3 px-5 overflow-hidden">
        <p id="skillHeader" className="fw-normal mb-3">
          Programs
        </p>
        <SkillBadge
          color="warning"
          textColor="dark"
          title="Visual Studio Code"
        />
        <SkillBadge
          color="warning"
          textColor="dark"
          title="SQL Management Studio"
        />
        <SkillBadge color="warning" textColor="dark" title="Postman" />
        <SkillBadge color="warning" textColor="dark" title="Talend" />
        <SkillBadge color="warning" textColor="dark" title="Power BI" />
        <SkillBadge color="warning" textColor="dark" title="Excel" />
        <SkillBadge color="warning" textColor="dark" title="Tableau" />
        <SkillBadge
          color="warning"
          textColor="dark"
          title="SAP Business Objects"
        />
      </div>

      <div id="certificates" className="mt-3 px-5  overflow-hidden">
        <p id="skillHeader" className="fw-normal mb-3">
          Certicates{" "}
        </p>

        <SkillBadge
          color="secondary"
          textColor="white"
          title=" Microsoft Certicate of Achivement in Power BI Developement"
        />
        <SkillBadge
          color="secondary"
          textColor="white"
          title=" Tableau ile uygulamalı Veri Analizi"
        />
        <SkillBadge
          color="secondary"
          textColor="white"
          title=" İleri Seviye MSSQL ve Oracle SQL"
        />
        <SkillBadge
          color="secondary"
          textColor="white"
          title=" ALES (81.5 points)"
        />
        <SkillBadge
          color="secondary"
          textColor="white"
          title=" YDS (80 points)"
        />
      </div>
    </div>
  );
};

export default Skills;
