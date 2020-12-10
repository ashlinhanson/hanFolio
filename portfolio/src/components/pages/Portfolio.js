import React from "react";
import ProjectCard from "../ProjectCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";


const Portfolio = () => {

    return(
    <div>
        <div className="container text-center col-md-10 p-3 mb-5 rounded">
            <div className="text-info pl-3 mb-2">
                <h1 className="folioheader">Project Examples</h1>
            </div>
                <ProjectCard />
        </div>
    </div>
    );
}

export default Portfolio;