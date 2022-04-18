import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div class="footer-dark mt-3">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Tax Advising</a></li>
                                    <li><a href="#">Tax Filling</a></li>
                                    <li><a href="#">One Hour tax consulting</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Address</a></li>
                                    <li><a href="#">Others</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>Independent Tax Consultant</h3>
                                <p> Contact Me: +068856249</p>
                            </div>
                        </div>
                        <p class="copyright">Independent Tax Consultant © 2022</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;