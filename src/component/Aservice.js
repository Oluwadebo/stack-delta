import React from 'react'
import { Link } from "react-router-dom";
import homefourimg from './asset/home-four-img.png'
import footerlogo from './asset/footer-logo.png'
import download from './asset/download.png'
import servicesimg1 from './asset/services-img1.jpg'
import servicesimg2 from './asset/services-img2.jpg'
import servicesimg3 from './asset/services-img3.jpg'
import servicesimg4 from './asset/services-img4.jpg'
import servicesimg5 from './asset/services-img5.jpg'
import servicesimg6 from './asset/services-img6.jpg'


const Aservice = () => {
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
                            <img src={download} alt="amaricanexpress" className="logo" />
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
                                    <Link
                                        to=""
                                        className='cart stye d-block d-md-inline py-2 py-md-0'
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to=""
                                        className='cart stye d-block d-md-inline py-2 py-md-0'
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to=""
                                        className='d-block d-md-inline py-2 py-md-0 active'
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        to=""
                                        className='cart stye d-block d-md-inline py-2 py-md-0'
                                    >
                                        Careers
                                    </Link>
                                    <Link
                                        to=""
                                        className='cart stye d-block d-md-inline py-2 py-md-0'
                                    >
                                        Contact
                                    </Link>
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
                </nav>
                <div className="ad">
                    <button onClick={scrollup} className="fa fa-angles-up scr"></button>
                </div>
                <div className="banner-four-area">
                    <div className="container-fluid container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 sty my-md-0 my-5">
                                <div className="banner-four-content text-white">
                                    <h1>Services</h1>
                                    <ul>
                                        <li>
                                            <Link to="" className="sig">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-angles-right"></i>
                                        </li>
                                        <li>Services</li>
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
                <div className="blog-area mt-5 pb-70">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color2">Our Services</span>
                            <h2>We Provide a Wide Variety of It Services</h2>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/" className="lin">
                                            <img src={servicesimg1} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/" className="lin">
                                                Software Development
                                            </Link>
                                        </h3>
                                        <p>We carry resources who are skilled IT professionals in creating, designing, deploying testing and supporting software. Our experience makes us stand out from other software development.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/" className="lin">
                                            <img src={servicesimg2} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/" className="lin">
                                                Mobile Development
                                            </Link>
                                        </h3>
                                        <p>Make complex enterprise software, guarantee dependable software integration, modernize your inheritance framework.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/" className="lin">
                                            <img src={servicesimg3} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/" className="lin">
                                                QA &amp; Testing
                                            </Link>
                                        </h3>
                                        <p>Our specialists perform absolute, multi-stage testing and evaluating the functions in every phases of testing your product.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/" className="lin">
                                            <img src={servicesimg4} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/" className="lin">
                                                IT Consultancy Services
                                            </Link>
                                        </h3>
                                        <p>Trust our best personalities to eliminate work process trouble spots, carry out new tech, and merge application portfolios. Our strategic methodology of IT counseling incorporates the most common way of finding the improvement needs of the endeavor followed by examining the market status wherein its capacities. Subsequently, associations could continually endeavor to repeat their business and IT methodologies.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/" className="lin">
                                            <img src={servicesimg5} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/" className="lin">
                                                Professional Staffing Solutions
                                            </Link>
                                        </h3>
                                        <p>We give total professional staffing services and great arrangement of professional. Our consultants, guarantee fruitful, on-time conveyance of any undertaking, extensive or compact. We deliver our proficient professional staffing solutions across all industries and niches. We hold specialization in many sectors including finance, healthcare, technology, telecommunication, engineering and administrative.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/" className="lin">
                                            <img src={servicesimg6} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/" className="lin">
                                                Cloud Computing
                                            </Link>
                                        </h3>
                                        <p>Our specialists can assist you with transform, scale and deal with your business by modernizing your inheritance server farms to the Cloud. We have recognized best innovation pioneers to achieve your requirements working as cloud professional. . We connect you with the ideal individuals to assist you with fostering your own Cloud system.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aservice