import React from "react";
//import { Image } from 'cloudinary-react';
import projects from "../assets/projects.json";
import "./pages/styles/index.css";

function ProjectCard() {

    return(
    <div className="row p-3 mx-auto">
        {projects.map(project => (
                <div className="card m-2 p-2 mx-auto" key={project.name} style={{width: "350px"}}>
                    <img src={project.imageURL} className="card-img-top" alt={project.name} style={{height: "350px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">
                                {project.summary}
                            </p>
                            <a href={project.deployLink} target="_blank" rel="noreferrer" className="btn">Check it out</a>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="btn">View the code</a>
                        </div>
                </div>
        ))};
    </div>
    );
}

export default ProjectCard;