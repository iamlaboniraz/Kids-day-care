import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";
import "./ProfileNavbar.css";
const ProfileNavbar = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Home Page</button>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                        <Link className="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/bookingList">Booking List</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Information
              </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/review">Review</Link>
                                <Link className="dropdown-item" to="/">Choose service for Booking</Link>
                                <div class="dropdown-divider"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default ProfileNavbar;