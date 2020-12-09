import React from "react";

function Header(props) {
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <div className="navbar-brand" id="name">
        {/* nav bar image */}
        <img src="./assets/navbarimg.png" style="height: 75px; width: 75px; display: inline-block" alt="logo" className="pb-2"/>
        Ashli Hanson
      </div>
      {/* dropdown menu for navbar */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* navbar links */}
      <div className="collapse navbar-collapse py-2 justify-content-end" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a 
            className="nav-link" 
            href="#about" 
            onClick={() => props.handlePageChange("About")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link" 
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link" 
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
}

export default Header;