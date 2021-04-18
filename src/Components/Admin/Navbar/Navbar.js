import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() =>{
        fetch('http://localhost:5055/isAdmin',{
            method : "POST",
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        {/* <button class="btn btn-primary" id="menu-toggle">Home Page</button> */}
        <Link class="btn btn-primary" id="menu-toggle"  to="/">Home Page</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        

        {isAdmin && 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                <Link className="nav-link" to="/manageService">Manage Service<span class="sr-only">(current)</span></Link>
                    {/* <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> */}
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/addService">Add Service</Link>
                    {/* <a class="nav-link" href="#">Link</a> */}
                </li>

                <li class="nav-item">
                <Link className="nav-link" to="/bookingInfo">Booking Information</Link>
                    {/* <a class="nav-link" href="#">Link</a> */}
                </li>


                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Information
      </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/">Home</Link>
                        {/* <a class="dropdown-item" href="#">Review</a> */}
                        <Link className="dropdown-item" to="/makeAdmin">Add Admin</Link>
                        {/* <a class="dropdown-item" href="/">Choose service for Booking</a> */}
                        <div class="dropdown-divider"></div>
                        {/* <a class="dropdown-item" href="#">Something else here</a> */}
                    </div>
                </li>
            </ul>
        </div>} 
      
    </nav>
</div>
    );
};

export default Navbar;