//create template for sites//create template for navbarimport React from "react";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Projects(props) {
    //add categories to nav headings
//   const {
//     categories = [],
//     setCurrentCategory,
//     currentCategory,
//   } = props;


//   const handleClick = (item) => {
//     console.log(item);
//     return item;
//   };

    return (
        <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5">
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Shoreline</h4>
                            <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;