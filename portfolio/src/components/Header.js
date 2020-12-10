import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-blue">

      <div className="navbar-brand" id="name">
        {/* nav bar image */}
        <img src="https://res.cloudinary.com/dkdwgbmxs/image/upload/v1607557486/navbarimg_wd3w9c.png" style={{height: "75px", width: "75px", display: "inline-block"}} alt="logo" className="pb-2"/>
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
            <Link 
              to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about" 
                    ? "nav-link active" 
                    : "nav-link"
                } 
              >
                About
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="portfolio" 
                className={
                  window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link" 
                } 
              >
                Portfolio
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/contact"
                className={
                  window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                } 
              >
                Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;