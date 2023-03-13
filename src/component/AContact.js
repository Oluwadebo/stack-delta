import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import Contactus from './asset/ContactUs.jpg'
import Footer from './Footer';
import * as yup from "yup";
import { useFormik } from "formik";

const AContact = () => {
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    let number = new RegExp(`(?=.*[0-9])`);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            msgsubject: "",
            message: "",
        },
        onSubmit: (values) => {

        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Please Enter Your Name")
                .min(3, "must be Your Name"),
            number: yup
                .string()
                .required("Please Enter Your number")
                .matches(number, "Must be a number")
                .min(10, "must be Your number"),
            email: yup
                .string()
                .required("Please Enter Your Email")
                .email("must be a valid email"),
            msgsubject: yup
                .string()
                .required("Please Enter Your Subject")
                .min(3, "must be Your Subject"),
            message: yup
                .string()
                .required("Write your message"),
        }),
    })
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
                                            to=""
                                            className='cart stye d-block d-md-inline py-2 py-md-0'
                                        >
                                            Careers
                                        </Link>
                                    </h3>
                                    <h3>
                                        <Link
                                            to="/contact"
                                            className='active d-block d-md-inline py-2 py-md-0'
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
                                    <h1>Contact Us</h1>
                                    <ul>
                                        <li>
                                            <Link to="/" className="sig">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-angles-right"></i>
                                        </li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pe-0">
                                <div className="banner-four-img mx-md-0 mx-3 mt-md-5 mt-3">
                                    <img src={Contactus} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form-area py-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Let's Send Us a Message Below</h2>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-4">
                                <div className="contact-info mx-2">
                                    <span>Contact Info</span>
                                    <h2>Let's Connect With Us</h2>
                                    <p>Get in touch with our specialists for a quick walk through of our services and know us better. </p>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <i className="fa fa-phone"></i>
                                                <h3>Phone Number</h3>
                                                <a href="tel:+1(732)-838-4153">+1 (732)-838-4153</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <i className="fa fa-map"></i>
                                                <h3>Address</h3>
                                                <span>16 Parkwood Drive, South Amboy, NJ 08879, USA</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <i className="fa fa-message"></i>
                                                <h3>Contact Info</h3>
                                                <a href="mailto:info@stackdelta.com, info@stackdelta.com">Info@stackdelta.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="contact-form">
                                    <form action="" onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Name <span>*</span></label>
                                                    <input type="text" name="name" id="name" className={
                                                        formik.errors.name && formik.touched.name
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Name" />
                                                    {formik.touched.name && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.name}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Email <span>*</span></label>
                                                    <input type="email" name="email" id="email" className={
                                                        formik.errors.email && formik.touched.email
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Email" />
                                                    {formik.touched.email && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Phone Number <span>*</span></label>
                                                    <input type="text" name="number" maxLength={11} className={
                                                        formik.errors.number && formik.touched.number
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Phone Number" />
                                                    {formik.touched.number && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.number}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Subject <span>*</span></label>
                                                    <input type="text" name="msgsubject" className={
                                                        formik.errors.msgsubject && formik.touched.msgsubject
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Your Subject" />
                                                    {formik.touched.msgsubject && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.msgsubject}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Your Message <span>*</span></label>
                                                    <textarea name="message" className={
                                                        formik.errors.message && formik.touched.message
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} cols="30" rows="4" placeholder="Your Message"></textarea>
                                                    {formik.touched.message && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-center mt-3">
                                                <button type="submit" className="default-btn btn-bg-two border-radius-50">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
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

export default AContact