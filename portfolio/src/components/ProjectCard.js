import React from "react";
//import { Image } from 'cloudinary-react';
import projects from "../assets/projects.json";

function ProjectCard() {

    return(
    <div>
        {projects.map(project => (
            <div className="col-md-4">
                <div className="card">
                    <img src={project.imageURL} className="card-img-top" alt={project.name} style={{height: "350px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">
                                {project.summary}
                            </p>
                            <a href={project.deployLink} target="_blank" className="btn btn-primary">Check it out</a>
                            <a href={project.gitHubLink} target="_blank" className="btn btn-primary">View the code</a>
                        </div>
                </div>
            </div>
        ))};
    </div>
    );
}

export default ProjectCard;