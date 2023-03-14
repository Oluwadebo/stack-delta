import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import homefourimg from './asset/home-four-img.png'
import aboutimg1 from './asset/about-img1.jpg'
import chooseimg from './asset/choose-img.jpg'
import practice from './asset/practice.png'
import help from './asset/help.png'
import Vision from './asset/Vision.jpeg'
import cybersecurity from './asset/cyber-security.png'
import computer from './asset/computer.png'
import effective from './asset/effective (1).png'
import consultant from './asset/consultant (2).png'
import consulting from './asset/2637253.png'
import implement from './asset/implement.png'

const AaboutUs = () => {
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
                                            className='active d-block d-md-inline py-2 py-md-0'
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
                                            to=""
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
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
                <div className="banner-four-area">
                    <div className="container-fluid container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 sty my-md-0 my-5">
                                <div className="banner-four-content text-white">
                                    <h1>About Us </h1>
                                    <ul>
                                        <li>
                                            <Link to="/" className="sig">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-angles-right"></i>
                                        </li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pe-0">
                                <div className="banner-four-img mx-md-0 mx-3 mt-md-0 mt-3">
                                    <img src={homefourimg} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-area py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-play">
                                    <img src={aboutimg1} alt="About Images" />
                                    <div className="about-play-content">
                                        <span>Watch Our Intro Video</span>
                                        <h2>Perfect Solution for IT Services!</h2>
                                        <div className="play-on-area">
                                            <a href="https://www.youtube.com/watch?v=tUP5S4YdEJo" className="play-on popup-btn"><i className="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content mx-2">
                                    <div className="section-title">
                                        <h2>Right Partner for Software Innovation</h2>
                                        <p>
                                            We provide support, insight and solutions to companies throughout United States. By putting our clients at the core of all that we do, we are glad that we are as yet supporting our absolute business client.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <ul className="about-list text-start">
                                                <li><i className="fa fa-check-circle"></i>Strong expertise </li>
                                                <li><i className="fa fa-check-circle"></i>Committed to Quality</li>
                                                <li><i className="fa fa-check-circle"></i>Cooperative</li>
                                                <li><i className="fa fa-check-circle"></i>Supportive</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <ul className="about-list about-list-2 text-start">
                                                <li><i className="fa fa-check-circle"></i>Assuring</li>
                                                <li><i className="fa fa-check-circle"></i>Adaptable</li>
                                                <li><i className="fa fa-check-circle"></i>Reliable</li>
                                                <li><i className="fa fa-check-circle"></i>Exceptionally Responsive Simple to Work With </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-area py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="choose-content mx-4">
                                    <div className="section-title">
                                        <span className="sp-color1">Why Choose Us</span>
                                        <h2>We Provide Truly Prominent It Solutions.</h2>
                                        <p>
                                            We are an IT Consulting and Software development company providing turn-key IT solutions to various clients. Our main areas of focus are IT training and consulting services to various clients.
                                        </p>
                                        <p>
                                            we create opportunities for people to reach their potential. This includes our clients, candidates, and employees. Our company values of passion, determination, work as a team, enjoying what we do and making a difference are as evident now as they have ever been and are an integral part of our business.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-6">
                                            <div className="choose-content-card">
                                                <div className="content d-md-flex d-inline">
                                                    <img src={practice} alt="Images" />
                                                    <h3>Experience</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <div className="choose-content-card">
                                                <div className="content d-md-flex d-inline">
                                                    <img src={help} alt="Images" />
                                                    <h3>Quick Support</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="choose-img">
                                    <img src={chooseimg} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-area py-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="about-content mx-2">
                                        <div className="section-title inner-title text-cente ">
                                            <h1>OUR VISION</h1>
                                            <h5>  Exceeding client expectations </h5>
                                            <h5>
                                                <p>  To extend the Minute Men family by surpassing our clients' requirements through responsibility, morals, and respectability while giving a superior future to our partners, workers, and their families.
                                                </p>
                                            </h5>
                                        </div>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="about-img">
                                        <img src={Vision} alt="About Images" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src={aboutimg1} alt="About Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="security-area py-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color2">IT Security &amp; Computing</span>
                            <h2>Searching for a Solution! We Provide Truly Prominent IT Solutions</h2>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-sm-6">
                                <div className="security-card">
                                    <i>
                                        <center>
                                            <img src={cybersecurity} alt="About Images" />
                                        </center>
                                    </i>
                                    <h3><a>Business Security</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="security-card">
                                    <i>
                                        <center>
                                            <img src={computer} alt="About Images" />
                                        </center>
                                    </i>
                                    <h3><a>Manage IT Service</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="security-card">
                                    <i>
                                        <center>
                                            <img src={effective} alt="About Images" />
                                        </center>
                                    </i>
                                    <h3><a>Product Analysis</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="security-card">
                                    <i>
                                        <center>
                                            <img src={implement} alt="About Images" />
                                        </center>
                                    </i>
                                    <h3><a>Analytic Solution</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="security-card">
                                    <i>
                                        <center>
                                            <img src={consulting} alt="About Images" />
                                        </center>
                                    </i>
                                    <h3><a>Finest Quality</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="security-card">
                                    {/* <i className="flaticon-consultant"></i> */}
                                    <i>
                                        <center>
                                            <img src={consultant} alt="About Images" />
                                        </center>
                                    </i>
                                    <h3><a>Risk Management</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AaboutUs