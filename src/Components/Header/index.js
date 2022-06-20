//create template for navbarimport React from "react";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {
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
        <header classNameName="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                        <a className="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;