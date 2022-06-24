import React from "react";

function Header(props) {
    //add categories to nav headings

    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center" id="home">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Bono</h1>
                        <br></br>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Full Stack</h2>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Full Stop</h2>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;