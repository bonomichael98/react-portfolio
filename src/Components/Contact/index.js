//create template for navbarimport React from "react";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Contact(props) {
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
        <section className="contact-section bg-black">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
        // <header classNameNameName="masthead">
        //     <div classNameName="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        //         <div classNameName="d-flex justify-content-center">
        //             <div classNameName="text-center">
        //                 <h1 classNameName="mx-auto my-0 text-uppercase">Grayscale</h1>
        //                 <h2 classNameName="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
        //                 <a classNameName="btn btn-primary" href="#about">Get Started</a>
        //             </div>
        //         </div>
        //     </div>
        // </header>
    );
}

export default Contact;