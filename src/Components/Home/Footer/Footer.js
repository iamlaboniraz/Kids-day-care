import { faClock, faCoffee, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import bg1 from "../../../images/bg3.jfif";
const Footer = () => {
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage: `url(${bg1})`,
                height: "400px",
                backgroundSize: "cover"
            }}
        >
            <footer className="bg-secondary text-center text-white mt-4">

                <div className="container p-4">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle} /></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGithub} /></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        > <FontAwesomeIcon icon={faCoffee} /></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    </section>

                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for get our services</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" />
                                        <label className="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>



                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
            </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                    </section>

                    <section className="">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Services</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="/" className="text-white">Part Time</a>
                                    </li>
                                    <li>
                                        <a href="/" className="text-white">Full Time</a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Contact Info</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white"><FontAwesomeIcon icon={faLocationArrow}>
                                        </FontAwesomeIcon> Dhaka, Bangladesh</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+54202484343</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Sunday-Thursday: 7:00am - 12:00pm, Saturday:7:00am-5:00pm</a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Testimonial</h5>

                                <ul className="list-unstyled mb-0">

                                    <li>
                                        <a href="/" className="text-white">Excellent</a>
                                    </li>
                                    <li>
                                        <a href="/" className="text-white">Organized</a>
                                    </li>

                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">About us</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Mission</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Vision</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">Tahiya Jahan Laboni</a>
                </div>
            </footer>
        </div>

    );
};

export default Footer;