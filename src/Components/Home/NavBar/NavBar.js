import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserAlt, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  const [loggedInUser] = useContext(UserContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Navbar.Brand href="/">KIDS DAY CARE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link><Link className="btn btn-secondary" to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</Link></Nav.Link>
          <Nav.Link><Link className="btn btn-secondary" to="/admin"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Admin</Link></Nav.Link>
          <Nav.Link><Link className="btn btn-secondary" to="/blog">Blog</Link></Nav.Link>
          <Nav.Link><Link className="btn btn-secondary" to="/bookingList"><FontAwesomeIcon icon={faUserAltSlash}></FontAwesomeIcon> Profile</Link></Nav.Link>
          <button className="btn btn-dark">
            <Nav.Link href="/login">
              {loggedInUser.name || loggedInUser.displayName ? loggedInUser.name || loggedInUser.displayName : 'Login'}
            </Nav.Link>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;