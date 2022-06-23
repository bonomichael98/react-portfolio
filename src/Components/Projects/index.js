
import React from "react";

function Projects(props) {
    //add categories for images
  const {
    img,
    title,
    githubLink,
    type,
    alt
    } = props;

    return (
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={img} alt={alt} /><a href={githubLink}></a></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>{title}</h4>
                            <p className="text-black-50 mb-0">{type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;