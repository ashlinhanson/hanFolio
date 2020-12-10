import React from "react";
import ProjectCard from "../ProjectCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";


const Portfolio = () => {

    return(
    <div>
        {/* <!--Portfolio--> */}
        <h1 className="folioheader">Project Examples</h1>
        {/* <!--top row of card--> */}
            <div className="card my-5" id="backgroundCard">
                <div className="container-folio">
                    <div className="col-md-12">
                        <div className="row">
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Portfolio;