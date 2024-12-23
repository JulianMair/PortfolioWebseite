import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../data/projects.json";

function Projects() {


  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meine Projekte</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={`Bild von ${project.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
