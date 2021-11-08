import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioItems = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
<h3 className="fw-normal mb-3 px-5 mt-5 fs-1 ">Portfolio</h3>

      </div>

      <PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="Crypto Tracker App"
        projectDesciption="Cryptocurrency tracking app with Web Socket and REST api"
        technologies={JSON.stringify([
          "HTML",
          "CSS",
          "Bootstrap",
          "Reactstrap",
          "JavaScript",
          "ReactJs",
          "Styled Components",
          "Web Socket",
          "REST Api",
          "React-Router",
        ])}
        githubUrl="https://github.com/umurislamoglu/cryptoapp"
        apiUrl={JSON.stringify([
          "https://newsapi.org",
          "https://api.pro.coinbase.com/",
          "wss://ws-feed.pro.coinbase.com ",
        ])}
      />

      <PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="Northwind Application"
        projectDesciption="Basic E-Commerce site with CRUD operations."
        technologies={JSON.stringify([
          "HTML",
          "CSS",
          "Bootstrap",
          "Reactstrap",
          "JavaScript",
          "ReactJs",
          "Styled Components",
          "Web Socket",
          "REST Api",
          "React-Router",
          "Redux",
          "Axios",
          "Redux Thunk",
          "Firebase",
        ])}
        githubUrl="https://github.com/umurislamoglu/northwind-app-react"
        apiUrl={JSON.stringify(["https://northwind.vercel.app/"])}
      />

      <PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="Covid-19 Viewer Site"
        projectDesciption=" Daily Covid-19 statistics application."
        technologies={JSON.stringify([
          "HTML",
          "CSS",
          "Bootstrap",
          "Reactstrap",
          "JavaScript",
          "ReactJs",
          "Styled Components",
          "Web Socket",
          "REST Api",
          "React-Router",
          "Redux",
          "Axios",
          "Redux Thunk",
          "React Simple Maps",
          "Leaflet",
        ])}
        githubUrl="https://github.com/umurislamoglu/covid-19-viewer"
        apiUrl={JSON.stringify(["https://corona.lmao.ninja/v2/"])}
      />

      <PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="Github Profile Finder"
        projectDesciption="Github profile finder application which uses Github api."
        technologies={JSON.stringify([
          "HTML",
          "CSS",
          "Bootstrap",
          "Reactstrap",
          "JavaScript",
          "ReactJs",
          "Styled Components",
          "Context Api",
          "React-Router",
          "REST API",
        ])}
        githubUrl="https://github.com/umurislamoglu/githubprolehunt"
        apiUrl={JSON.stringify(["https://api.github.com/"])}
      />

      <PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="HR Management System Backend api"
        projectDesciption=" A REST api project which manages the HR Management System."
        technologies={JSON.stringify([
          "Java",
          "Spring Boot",
          "REST",
          " N-Tier Architecture",
          "MsSQL",
          "Hibernate",
          "Lombok",
          "SOAP Integration",
        ])}
        githubUrl="https://github.com/umurislamoglu/HRMS"
        apiUrl={JSON.stringify([])}
      />
      <PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="Blog Site"
        projectDesciption="A blog site which uses Firebase Authentication and Database with basic CRUD operations"
        technologies={JSON.stringify([
          "HTML",
          "CSS",
          "Bootstrap",
          "Reactstrap",
          "JavaScript",
          "ReactJs",
          "Styled Components",
          "Redux",
          "Redux Thunk",
          "eact-Router",
          "Firebase",
        ])}
        githubUrl="https://github.com/umurislamoglu/blog-app-react"
        apiUrl={JSON.stringify([])}
      />

<PortfolioItem
        imgUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        projectTitle="To Do Application"
        projectDesciption="Basic To do App with ReactJS."
        technologies={JSON.stringify([
          "HTML",
          "CSS",
          "Bootstrap",
          "Reactstrap",
          "JavaScript",
          "ReactJs",
          "Styled Components",
          "LocalStorage",
          
        ])}
        githubUrl="https://github.com/umurislamoglu/Todo-App-React"
        apiUrl={JSON.stringify([])}
      />


     
    </div>
  );
};

export default PortfolioItems;
