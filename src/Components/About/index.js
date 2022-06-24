//create template for navbarimport React from "react";
import React from "react";
import ReactLogo from "../../assets/img/logo.png"
//import { capitalizeFirstLetter } from "../../Utils/helpers";

function About(props) {

    return (
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Brought to you with React and Bootstrap</h2>
                        <p className="text-white-50">
                            Michael is a full-stack web developer with a certificate in web development from the Ohio State University.
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src={ReactLogo} alt="React Logo" />
            </div>
        </section>
    );
};

export default About;