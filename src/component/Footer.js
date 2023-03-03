import React from 'react'
import footerlogo from './asset/footer-logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer-area footer-bg">
                <div className="container">
                    <div className="footer-top pt-5 pb-5">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link
                                            to="/"
                                        >
                                            <img src={footerlogo} alt="Images" />
                                        </Link>
                                    </div>
                                    <div className="footer-widget">
                                        <h3>Newsletter</h3>
                                        <p>Join our newsletter and get latest updates.</p>
                                        <div className="newsletter-area">
                                            <form className="newsletter-form" width="100">
                                                <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" id="newsemail" required />
                                                <button type="submit" className="subscribe-btn disabled aaa">
                                                    <i className="fa fa-paper-plane"></i>
                                                </button>
                                                <div id="" className="form-result"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-6"></div>
                            <div className="col-lg-7 col-sm-6">
                                <div className="footer-widget pl-2">
                                    <h3>Services</h3>
                                    <ul className="footer-list">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        Software Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        Mobile Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        Digital Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        QA &amp; Testing
                                                    </Link>
                                                </li>
                                            </div>
                                            <div className="col-lg-6">
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        IT Consultancy services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        Cloud Computing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services" className='a'>
                                                        <i className="fa fa-angle-right pe-1"></i>
                                                        Professional Staffing solutions
                                                    </Link>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right-area">
                        <div className="copy-right-text text-center">
                            <p>
                                Copyright © 2023 Stack Delta. All Rights Reserved by
                                <Link
                                    to="/"
                                    className='a mx-2'
                                >
                                    Stack Delta
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer