import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import chooseimg1 from './asset/choose-img1.jpg'
import clientuserimg1 from './asset/client-user-img1.png'
import Footer from './Footer';
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from 'react';

const Careeres = () => {
    const [file, setfile] = useState("");

    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    let number = new RegExp(`(?=.*[0-9])`);
    const getfile = (e) => {
        let myfile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(myfile)
        reader.onload = () => {
            setfile(reader.result);
        }
    }
    // console.log(file);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            AOI: "",
            Notes: "",
        },
        onSubmit: (values) => {
            let infor = {name:values.name,email:values.email,number:values.number,AOI:values.AOI,Notes:values.Notes,Resume:file}
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
                .min(10, "must be Your reachable number"),
            email: yup
                .string()
                .required("Please Enter Your Email")
                .email("must be a valid email"),
            AOI: yup
                .string()
                .required("Please Enter Your Area of Interest")
                .min(3, "must be Your Subject"),
            Notes: yup
                .string()
                .required("Write your Notes"),
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
                                    <img src={clientuserimg1} alt="Images" />
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
                <div className="contact-form-area py-3" id="individualscreen">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Let's Send Us a your Profile</h2>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-5">
                                <div className="choose-img-two">
                                    <img src={chooseimg1} height="500" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-form">
                                    <form action="" onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Full Name <span>*</span></label>
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
                                                    <label>Your Email Id <span>*</span></label>
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
                                                    <label>Your Contact Number <span>*</span></label>
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
                                                    <label>Area of Interest <span>*</span></label>
                                                    <input type="text" name="AOI" className={
                                                        formik.errors.AOI && formik.touched.AOI
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Area of Interest" />
                                                    {formik.touched.AOI && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.AOI}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Upload Your Resume <span>*</span></label>
                                                    <input type="file" className='form-control fstyle' onChange={(e) => getfile(e)} accept=".doc,.docx" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Notes <span>*</span></label>
                                                    <textarea name="Notes" className={
                                                        formik.errors.Notes && formik.touched.Notes
                                                            ? "form-control fstyle is-invalid"
                                                            : "form-control fstyle"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} cols="30" rows="4" placeholder="Your Message"></textarea>
                                                    {formik.touched.Notes && (
                                                        <div style={{ color: "red" }} className="my-2">
                                                            {formik.errors.Notes}
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
            </div>
        </>
    )
}

export default Careeres