import React from "react";
import School from "./School";

const Education = () => {
  return (
    <div id="education" className=" p-5 shadow p-3 mb-5 bg-body rounded">
      <h3 className="fw-normal mb-3 px-5">Education</h3>

      <School
        schoolName="Hacettepe University"
        department="Financial Management"
        degree="Masters"
        grade="3,50"
        imgUrl="https://upload.wikimedia.org/wikipedia/tr/thumb/2/28/Hacettepe_%C3%9Cniversitesi_Logosu.svg/1200px-Hacettepe_%C3%9Cniversitesi_Logosu.svg.png"
        date="2015 - 2019 "
      />
      <School
        schoolName="Hacettepe University"
        department="Business Administration"
        degree="Bachelors"
        grade="2,81"
        imgUrl="https://upload.wikimedia.org/wikipedia/tr/thumb/2/28/Hacettepe_%C3%9Cniversitesi_Logosu.svg/1200px-Hacettepe_%C3%9Cniversitesi_Logosu.svg.png"
        date="2010 - 2015"
      />
      <School
        schoolName="Anadolu University"
        department="International Reloations"
        degree="Bachelors"
        grade="2,50"
        imgUrl="https://upload.wikimedia.org/wikipedia/tr/archive/7/7f/20200406212041%21Anadolu_%C3%9Cniversitesi_logo.png"
        date="2011 - 2015 "
      />
    </div>
  );
};

export default Education;
