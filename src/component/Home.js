import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import Footer from './Footer';
import download1 from './asset/download.jpg'

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
                                            className='d-block d-md-inline py-2 py-md-0 active'
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
                <div class="banner-slider-area">
                    <div class="banner-slider owl-carousel owl-theme owl-loaded owl-drag">
                        <div class="owl-stage-outer owl-height" style="height: 696.938px;">
                            <div class="owl-stage" style="transform: translate3d(-4072px, 0px, 0px); transition: all 0.25s ease 0s; width: 7126px;">
                                <div class="owl-item cloned cls" style="width: 988px; margin-right: 30px;">
                                    <div class="banner-item item-bg2">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>We Provide Best IT Services for Your Need</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" style="width: 988px; margin-right: 30px;"><div class="banner-item item-bg3">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>Digital IT Service With Excellent Quality</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item" style="width: 988px; margin-right: 30px;"><div class="banner-item item-bg1">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>Excellent IT Services for Your Success</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>
                                                            {/* <a href="contact.html" class="default-btn btn-bg-one border-radius-50 ml-20">Get A Quote <i class='bx bx-chevron-right'></i></a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item" style="width: 988px; margin-right: 30px;"><div class="banner-item item-bg2">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>We Provide Best IT Services for Your Need</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item active" style="width: 988px; margin-right: 30px;"><div class="banner-item item-bg3">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>Digital IT Service With Excellent Quality</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" style="width: 988px; margin-right: 30px;"><div class="banner-item item-bg1">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>Excellent IT Services for Your Success</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>
                                                            {/* <a href="contact.html" class="default-btn btn-bg-one border-radius-50 ml-20">Get A Quote <i class='bx bx-chevron-right'></i></a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" style="width: 988px; margin-right: 30px;"><div class="banner-item item-bg2">
                                        <div class="d-table">
                                            <div class="d-table-cell">
                                                <div class="container">
                                                    <div class="banner-item-content">
                                                        <span>Only High Quality Services</span>
                                                        <h1>We Provide Best IT Services for Your Need</h1>
                                                        <p>
                                                            Ensuring your innovation plan is lined up with your business strategy to eliminate risks and total cost of ownership. We are situated to serve a wide range of staffing requirements of diverse business areas. We engage ourselves in your business to craft a roadmap to ensure your IT platform is advanced for your current and future necessities.
                                                        </p>
                                                        <div class="banner-btn">
                                                            <a href="about.html" class="default-btn btn-bg-one border-radius-50">Discover More
                                                                <i class="bx bx-chevron-right"></i></a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>
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
                                    <img src={download1} className="img-fluid d-block mx-auto imgd" alt="..." />
                                    <div className="carousel-caption see">
                                        <h3>Xavier</h3>
                                        <p>“It’s my pleasure to work with Stack Delta. Even though the first opportunity they presented wasn’t the right fit for me, it did not stop them from finding me a position that suits my skill sets and qualifications. I was presented with an awesome opportunity. I appreciate their efforts in helping individuals like me find the right opportunity.”</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src={download1} className="img-fluid d-block mx-auto imgd" alt="..." />
                                    <div className="carousel-caption see">
                                        <h3> Paul</h3>
                                        <p>
                                            “The staff at Stack Delta is incredibly responsive, professional, and honest. They were highly focused on finding roles that fit my criteria and my experience. They consider your flexibility, compensation and your work ability. I recommend others who are seeking new opportunities to contact Stack Delta.”
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src={download1} className="img-fluid d-block mx-auto imgds" alt="..." />
                                    <div className="carousel-caption see">
                                        <h3> Aman </h3>
                                        <p>
                                            “The team at Stack Delta has been amazing to work with. The team truly exceeds all expectations and provides qualified candidate profiles for our hiring needs. The type of candidates we receive from Stack Delta is remarkable - throughout the course of recent years we have had various promising workers for hire come through on impermanent bases who are currently a portion of our most grounded extremely durable increases to our staff. The staff is extremely watchful and brief with answering inquiries such as historical verifications, start dates, etc. The staff is proficient, productive, and dependable in offering extraordinary service.”
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src={download1} className="img-fluid d-block mx-auto imgd" alt="..." />
                                    <div className="carousel-caption see">
                                        <h3> Arjun</h3>
                                        <p>
                                            “Stack Delta has been very helpful towards finding me a role which matched my experience, skills and guided me throughout the process. I felt very comfortable asking any questions I had, and they have been very positive and professional. I would recommend Stack Delta to anyone looking for new employment opportunities.”
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src={download1} className="img-fluid d-block mx-auto imgde" alt="..." />
                                    <div className="carousel-caption see">
                                        <h3> Christina Cobb </h3>
                                        <p>
                                            “My involvement with working with Stack Delta has been exceptional. We are in consistent need of contractors for our clients. Some positions are temporary, and some are direct hire. Stack Delta submits resumes of professionals rapidly and efficiently. They give candidates who are proficient, talented, and meet the needs of various assignments. Stack Delta is proficient, productive, and dependable in offering remarkable candidates.”
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src={download1} className="img-fluid d-block mx-auto imgde" alt="..." />
                                    <div className="carousel-caption see">
                                        <h3> Michelle Smith</h3>
                                        <p>
                                            “We had the pleasure of working with Stack Delta recently. They do an amazing job to give us qualified candidates for our temporary and permanent staffing needs. They take excellent thought of the abilities and capabilities we are searching for and assist us with filling our situations as soon possible. I wouldn't hold back to suggest Stack Delta for temporary and temporary to permanent employment needs.”
                                        </p>
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