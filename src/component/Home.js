import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import Footer from './Footer';
import image from './asset/image.jpg'
import project from './asset/project.png'
import effective from './asset/effective.png'
import bullhorn from './asset/bullhorn.png'
import chip from './asset/chip.png'
import consultant from './asset/consultant.png'
import consulting from './asset/consulting.png'
import stats from './asset/stats.png'
import structure from './asset/structure.png'
import dataanalytics from './asset/data-analytics.png'
import webdevelopment from './asset/web-development.png'
import callusimg1 from './asset/call-us-img1.png'
import callshap2 from './asset/call-shap2.png'
import callshap3 from './asset/call-shap3.png'
import servicesimg1 from './asset/services-img1.jpg'
import servicesimg2 from './asset/services-img2.jpg'
import servicesimg3 from './asset/services-img3.jpg'
import servicesimg4 from './asset/services-img4.jpg'
import servicesimg5 from './asset/services-img5.jpg'
import servicesimg6 from './asset/services-img6.jpg'

const Home = () => {
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
                                            className='d-sm-inline d-md-inline py-2 py-md-0 active'
                                        >
                                            Home
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to=""
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
                                            to=""
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            Careers
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to=""
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
                <div className="banner-slider-area">
                    <div id="carouselExampleDark" className="carousel slide pt-5">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="100">
                                <div className="styls1">
                                    <div className="carousel-caption">
                                        <div className="capt">
                                            <span>Only High Quality Services</span>
                                            <h1>Excellent IT Services for Your Success</h1>
                                            <p>
                                                Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                            </p>
                                            <div className="banner-btn">
                                                <Link
                                                    to="/About"
                                                    className='default-btn'
                                                >
                                                    Discover More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="100">
                                <div className="styls2">
                                    <div className="carousel-caption">
                                        <div className="capt">
                                            <span>Only High Quality Services</span>
                                            <h1>We Provide Best IT Services for Your Need</h1>
                                            <p>
                                                Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                            </p>
                                            <div className="banner-btn">
                                                <Link
                                                    to="/About"
                                                    className='default-btn'
                                                >
                                                    Discover More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="100">
                                <div className="styls3">
                                    <div className="carousel-caption">
                                        <div className="capt">
                                            <span>Only High Quality Services</span>
                                            <h1>Digital IT Service With Excellent Quality</h1>
                                            <p>
                                                Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                            </p>
                                            <div className="banner-btn">
                                                <Link
                                                    to="/About"
                                                    className='default-btn'
                                                >
                                                    Discover More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="work-process-area-two py-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color2">Our Working Process</span>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="work-process-card">
                                            <center className="d-sm-inline d-md-none">
                                                <img src={project} alt="images1" />
                                            </center>
                                            <div className="d-none d-md-block">
                                                <img src={project} alt="images1" />
                                            </div>
                                            <h3 className='center'>Discovery</h3>
                                            <div className="number">01</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="work-process-card">
                                            <center className="d-sm-inline d-md-none">
                                                <img src={chip} alt="images1" />
                                            </center>
                                            <div className="d-none d-md-block">
                                                <img src={chip} alt="images1" />
                                            </div>
                                            <h3 className='center'>Planning</h3>
                                            <div className="number">02</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="work-process-card">
                                            <center className="d-sm-inline d-md-none">
                                                <img src={effective} alt="images1" />
                                            </center>
                                            <div className="d-none d-md-block">
                                                <img src={effective} alt="images1" />
                                            </div>
                                            <h3 className='center'>Execute</h3>
                                            <div className="number">03</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="work-process-card">
                                            <center className="d-sm-inline d-md-none">
                                                <img src={bullhorn} alt="images1" />
                                            </center>
                                            <div className="d-none d-md-block">
                                                <img src={bullhorn} alt="images1" />
                                            </div>
                                            <h3 className='center'>Deliver</h3>
                                            <div className="number">04</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="choose-img-two">
                                    <img src={image} alt="About Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services-area-two py-5 services-area">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color1">Our Services</span>
                            <h2>We Provide a Wide Variety of IT Services</h2>
                            <center><p className="margin-auto">"We provide support, insight and solutions to companies throughout United States.By putting our clients at the core of all that we do, we are glad that we are as yet supporting our absolute business clients"</p></center>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item">
                                    <a>
                                        <img src={servicesimg1} alt="Blog Images" />
                                    </a>
                                    <div className="content">
                                        <img src={consultant} alt="images1" />
                                        <span><a>Software Development</a></span>
                                        <h3 className="lin"><a>Software Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item">
                                    <a>
                                        <img src={servicesimg2} alt="Blog Images" />
                                    </a>
                                    <div className="content">
                                        <img src={consulting} alt="images1" />
                                        <span>Cloud Services</span>
                                        <h3 className="lin"><a>Cloud Computing</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item">
                                    <a>
                                        <img src={servicesimg3} alt="Blog Images" />
                                    </a>
                                    <div className="content">
                                        <img src={webdevelopment} alt="images1" />
                                        <span><a>Mobile Development</a></span>
                                        <h3 className="lin"><a>Mobile Development</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item">
                                    <a>
                                        <img src={servicesimg4} alt="Blog Images" />
                                    </a>
                                    <div className="content">
                                        <img src={stats} alt="images1" />
                                        <span><a>Staffing </a></span>
                                        <h3 className="lin"><a>Professional Staffing solutions </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item">
                                    <a>
                                        <img src={servicesimg5} alt="Blog Images" />
                                    </a>
                                    <div className="content">
                                        <img src={structure} alt="images1" />
                                        <span><a>QA &amp; Testing</a></span> <br />
                                        <h3 className="lin"><a>QA &amp; Testing</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item">
                                    <a>
                                        <img src={servicesimg6} alt="Blog Images" />
                                    </a>
                                    <div className="content">
                                        <img src={dataanalytics} alt="images1" />
                                        <span><a>IT Consultancy </a></span>
                                        <h3 className="lin"><a>IT Consultancy </a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="call-us-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="call-contact">
                                    <a href="tel:+1(732)-838-4153" className="call-btn">+1 (732)-838-4153</a>
                                    <p>Get in touch with our specialists for a quick walk through of our services and know us better.</p>
                                    <Link
                                        to="/contact"
                                        className='default-btn btn-bg-two border-radius-5'
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="call-us-img">
                                    <img src={callusimg1} alt="Images" />
                                    <div className="call-shape d-none d-md-block">
                                        <div className="shape1">
                                            <img src={callshap2} alt="Images" />
                                        </div>
                                        <div className="shape2 shape2-rs">
                                            <img src={callshap3} alt="Images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="clients-area py-5">
                    <div className="container py-5">
                        <div className="section-title text-center">
                            <span className="sp-color2">Our Clients</span>
                            <h2>Our Clients Feedback</h2>
                        </div>
                        <div id="carouselExampleInterval" className="carousel slide my-5" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <div className="isd">
                                        <div className="carousel-caption">
                                            <h3 className='mb-3'>Xavier</h3>
                                            <p>“It’s my pleasure to work with Stack Delta. Even though the first opportunity they presented wasn’t the right fit for me, it did not stop them from finding me a position that suits my skill sets and qualifications. I was presented with an awesome opportunity. I appreciate their efforts in helping individuals like me find the right opportunity.”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <div className="isd">
                                        <div className="carousel-caption">
                                            <h3 className='mb-3'> Paul</h3>
                                            <p>
                                                “The staff at Stack Delta is incredibly responsive, professional, and honest. They were highly focused on finding roles that fit my criteria and my experience. They consider your flexibility, compensation and your work ability. I recommend others who are seeking new opportunities to contact Stack Delta.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <div className="isd">
                                        <div className="carousel-caption">
                                            <h3 className='mb-3'> Arjun</h3>
                                            <p>
                                                “Stack Delta has been very helpful towards finding me a role which matched my experience, skills and guided me throughout the process. I felt very comfortable asking any questions I had, and they have been very positive and professional. I would recommend Stack Delta to anyone looking for new employment opportunities.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <div className="isd">
                                        <div className="carousel-caption">
                                            <h3 className='mb-3'> Christina Cobb</h3>
                                            <p>
                                                “My involvement with working with Stack Delta has been exceptional. We are in consistent need of contractors for our clients. Some positions are temporary, and some are direct hire. Stack Delta submits resumes of professionals rapidly and efficiently. They give candidates who are proficient, talented, and meet the needs of various assignments. Stack Delta is proficient, productive, and dependable in offering remarkable candidates.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <div className="isd">
                                        <div className="carousel-caption">
                                            <h3 className='mb-3'> Michelle Smith</h3>
                                            <p>
                                                “We had the pleasure of working with Stack Delta recently. They do an amazing job to give us qualified candidates for our temporary and permanent staffing needs. They take excellent thought of the abilities and capabilities we are searching for and assist us with filling our situations as soon possible. I wouldn't hold back to suggest Stack Delta for temporary and temporary to permanent employment needs.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="client-circle d-none d-md-inline">
                        <div className="client-circle-1">
                            <div className="circle"></div>
                        </div>
                        <div className="client-circle-2">
                            <div className="circle"></div>
                        </div>
                        <div className="client-circle-3">
                            <div className="circle"></div>
                        </div>
                        <div className="client-circle-4">
                            <div className="circle"></div>
                        </div>
                        <div className="client-circle-5">
                            <div className="circle"></div>
                        </div>
                        <div className="client-circle-6">
                            <div className="circle"></div>
                        </div>
                        <div className="client-circle-7">
                            <div className="circle"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Home