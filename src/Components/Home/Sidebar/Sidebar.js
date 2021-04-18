
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
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
                            {/* <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/bookingList">Booking List</Link>
                            {/* <a class="nav-link" href="#">Link</a> */}
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Information
              </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/review">Review</Link>
                                {/* <a class="dropdown-item" href="#">Review</a> */}
                                <Link className="dropdown-item" to="/">Choose service for Booking</Link>
                                {/* <a class="dropdown-item" href="/">Choose service for Booking</a> */}
                                <div class="dropdown-divider"></div>
                                {/* <a class="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    //     <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
    //   <Navbar.Brand href="/">KIDS DAY CARE</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //     </Nav>
    //     <Nav>
    //       <Nav.Link><Link className="btn btn-secondary" to="/">Home</Link></Nav.Link>
    //       {/* <Nav.Link><Link className="btn btn-secondary" to="/services">Services</Link></Nav.Link> */}
    //       <Nav.Link><Link className="btn btn-secondary" to="/admin">Admin</Link></Nav.Link>
    //       {/* <Nav.Link><Link className="btn btn-secondary" to="/about">About us</Link></Nav.Link> */}
    //       <Nav.Link><Link className="btn btn-secondary" to="/blog">Blog</Link></Nav.Link>
    //       <Nav.Link><Link className="btn btn-secondary" to="/bookingList">Profile</Link></Nav.Link>
    //       {/* <Nav.Link><Link className="btn btn-secondary" to="/testimonials">Testimonials</Link></Nav.Link> */}
    //       <button className="btn btn-dark">
    //         <Nav.Link href="/login">
    //           {loggedInUser.name || loggedInUser.displayName ? loggedInUser.name || loggedInUser.displayName : 'Login'}
    //         </Nav.Link>
    //       </button>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>



















    //     <div class="d-flex" id="wrapper">
    //     <div class=" border-right" id="sidebar-wrapper">
    //         <div class="sidebar-heading">Kids Day Care</div>
    //         <div class="list-group list-group-flush">
    //             <a href="#" class="sideButton list-group-item list-group-item-action">BookList</a>
    //             <a href="#" class="sideButton list-group-item list-group-item-action ">Book</a>
    //             <a href="#" class="sideButton list-group-item list-group-item-action ">Review</a>
    //             <a href="#" class="sideButton list-group-item list-group-item-action">Events</a>
    //             <a href="#" class="sideButton list-group-item list-group-item-action">Profile</a>
    //             <a href="#" class="sideButton list-group-item list-group-item-action">Status</a>
    //         </div>
    //     </div>

    //     <div id="page-content-wrapper">

    //         <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    //             <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

    //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>

    //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
    //                     <li class="nav-item active">
    //                         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">Link</a>
    //                     </li>
    //                     <li class="nav-item dropdown">
    //                         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             Dropdown
    //           </a>
    //                         <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
    //                             <a class="dropdown-item" href="#">Action</a>
    //                             <a class="dropdown-item" href="#">Another action</a>
    //                             <div class="dropdown-divider"></div>
    //                             <a class="dropdown-item" href="#">Something else here</a>
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>

    //         <div class="container-fluid">
    //             <h1 class="mt-4">Simple Sidebar</h1>
    //             <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
    //             <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
    //         </div>
    //     </div>


    // </div>
  

        // <div className="w3-sidebar w3-teal w3-bar-block" style={{ width: "15%" }}>
        //     <Link style={{ marginTop: "30px" }} className="w3-bar-item w3-button sidebar" to="/manageProduct"><AllInboxIcon></AllInboxIcon> Manage Product</Link>
        //     <Link className="w3-bar-item w3-button sidebar" to="/admin"><AddIcon></AddIcon> Add Product</Link>
        //     <Link className="w3-bar-item w3-button sidebar" to="/admin"><EditIcon></EditIcon> Edit Product</Link>


        // </div>
    );
};

export default Sidebar;