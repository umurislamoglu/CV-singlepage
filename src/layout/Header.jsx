import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="  d-flex  justify-content-center align-items-center sticky-top "
      style={{ backgroundColor: "#F2821A" }}
    >
      <div className="container">
        <nav className=" navbar w-100 d-flex flex-row justify-content-end" style={{ "list-style-type": "none" }}>
          
            <a href="#" className="text-decoration-none text-dark navbar-brand text-decoration-none text-dark flex-grow-1  websiteBrand"> Umur Islamoglu</a>
        
          
            <a href="#about" className="text-decoration-none text-white text-decoration-none  text-light nav-item p-2 bd-highlight"> About</a>
         
            <a href="#portfolio" className="text-decoration-none text-white text-decoration-none  text-light nav-item p-2 bd-highlight"> Portfolio</a>
         
            <a href="#comment" className="text-decoration-none text-white text-decoration-none  text-light nav-item p-2 bd-highlight"> Comments</a>
         
           <a href="#contact" className="text-decoration-none text-white text-decoration-none  text-light nav-item p-2 bd-highlight"> Contact</a>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
