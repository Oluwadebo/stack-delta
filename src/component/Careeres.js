import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import clientuserimg1 from './asset/client-user-img1.png'
import Footer from './Footer';

const Careeres = () => {
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-light fixed-top coles">
                    <div className="container">
                        <a className="navbar-brand">
                            <img src={download} alt="stack-delta" className="logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <div className="row">
                                <div className="col-12">
                                    <h3>
                                        <Link
                                            to="/"
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            Home
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to="/aboutUs"
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            About Us
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to="/services"
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            Services
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to="/careers"
                                            className='active d-block d-md-inline py-2 py-md-0'
                                        >
                                            Careers
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to="/contact"
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            Contact
                                        </Link>
                                    </h3>
                                    <span className='d-none d-md-inline'>
                                        <span>Support By : <a href="tel:+1(732)-838-4153" className='lin'>+1 (732)-838-4153</a></span>
                                        <Link
                                            to="https://facebook.com/stackdelta22"
                                            className='lin fa fa-facebook' target="_blank"
                                        >
                                        </Link>
                                        <Link
                                            to=""
                                            className='lin fa fa-twitter' target="_blank"
                                        >
                                        </Link>
                                        <Link
                                            to="https://www.linkedin.com/company/stack-delta"
                                            className='lin fa fa-linkedin-square' target="_blank"
                                        >
                                        </Link>
                                        <Link
                                            to="https://www.instagram.com/stackdelta22/"
                                            className='lin fa fa-instagram' target="_blank"
                                        >
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ad">
                        <button onClick={scrollup} className="fa fa-angles-up scr"></button>
                    </div>
                </nav>
                <div className="talk-area py-5">
                    <div className="container py-md-5 py-0">
                        <div className="talk-content text-center my-md-5 mt-5">
                            <div className="section-title text-center">
                                <span className="sp-color1 section-title1 d-none d-md-inline">Career</span>
                                <h1>WE'RE HIRING..</h1>
                            </div>
                            <a href="#individualscreen" className="default-btn btn-bg-two border-radius-5">Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="about-area about-bg2 py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="clients-slider-img">
                                    <img src={clientuserimg1} alt="Images"/>
                                    <div className="clients-slider-circle"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-3 mx-2">
                                    <div className="section-title">
                                        <span className="sp-color2">We are Hiring</span>
                                        <h2>Stack Delta is a consulting and technology services company specializing in industry-specific solutions, strategic outsourcing, and integration services.</h2>
                                        <p>Stack Delta provides range of contractual/non-contractual consulting jobs from its respective clients in different domains and industries. We provide different nature of consulting jobs/hires depends on the client's requirements</p>
                                        <p className='pabout'>•	<i> Contractual</i></p>
                                        <p className='pabout'>• <i> Contract-to-Hire</i></p>
                                        <p className='pabout'>•	<i> Direct Hire</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Careeres