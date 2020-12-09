import React from "react";
import { Image } from 'cloudinary-react';
import "../assets/projects.json";

function ProjectCard(props) {
    <div className="col-md-4">
            <div className="card">
              <img src={props.projects.imageURL} className="card-img-top" alt="" style="height: 350px"/>
              <div className="card-body">
                <h5 className="card-title">{props.projects.name}</h5>
                <p className="card-text">
                    {props.projects.summary}
                </p>
                <a href={props.projects.deployLink} target="_blank" className="btn btn-primary">Check it out</a>
                <a href={props.projects.gitHubLink} target="_blank" className="btn btn-primary">View the code</a>
              </div>
            </div>
    </div>
}

export default ProjectCard;