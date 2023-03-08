import React from 'react'
import { Link } from "react-router-dom";
import homefourimg from './asset/home-four-img.png'
import download from './asset/download.png'
import servicesimg1 from './asset/services-img1.jpg'
import servicesimg2 from './asset/services-img2.jpg'
import servicesimg3 from './asset/services-img3.jpg'
import servicesimg4 from './asset/services-img4.jpg'
import servicesimg5 from './asset/services-img5.jpg'
import servicesimg6 from './asset/services-img6.jpg'
import Footer from './Footer';


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
                                            to=""
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            About Us
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to="/services"
                                            className='d-block d-md-inline py-2 py-md-0 active'
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
                <div className="blog-area mt-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color2">Our Services</span>
                            <h2>We Provide a Wide Variety of It Services</h2>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="/services" className="lin">
                                            <img src={servicesimg1} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services" className="lin">
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
                                        <Link to="/services" className="lin">
                                            <img src={servicesimg2} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services" className="lin">
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
                                        <Link to="/services" className="lin">
                                            <img src={servicesimg3} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services" className="lin">
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
                                        <Link to="/services" className="lin">
                                            <img src={servicesimg4} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services" className="lin">
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
                                        <Link to="/services" className="lin">
                                            <img src={servicesimg5} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services" className="lin">
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
                                        <Link to="/services" className="lin">
                                            <img src={servicesimg6} alt="Blog Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services" className="lin">
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
                <section className="clients-area py-5">
                    <div className="container py-5">
                        <div className="section-title text-center">
                            <span className="sp-color2">Our Clients</span>
                            <h2>We are Trusted clients across the United States</h2>
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

export default Aservice