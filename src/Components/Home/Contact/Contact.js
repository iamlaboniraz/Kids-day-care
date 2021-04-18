import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import bg1 from "../../../images/bg8.jfif";
const Contact = () => {
    return (
        <div

            style={{
                backgroundImage: `url(${bg1})`,
                height: "900px",
                backgroundSize: "cover"
            }}
        >
                <div class=" container contact">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact-info">

                                <img style={{ width: '100px', height: "90px" }} src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                                <h2 className="contactTitle">Contact Us</h2>
                                <hr/>
                                <h4>Contact with us for any query</h4>

                                <div>
                                    <p>
                                        <hr/>
                                        <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                                        <strong>Office:</strong> Dhaka,Bangladesh<br />
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <strong>Phone:</strong> +1 5589 55488 55 <br />
                                        <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> <strong>Email:</strong> info@example.com <br />
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="contact-form">
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="fname">First Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="lname">Last Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="email">Email:</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="comment">Comment:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="5" id="comment"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-default">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    );
};

export default Contact;