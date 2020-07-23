import React from 'react';
import { Link } from 'react-router-dom';
//import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
    return (
        <div className="color">
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/Reports">Reports</Link>
                    </li> */}
                    <li>
                        <Link to="/Teams">Team List</Link>
                    </li>

                </ul>
            </nav>

            {/* <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="danger" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/components/Home">Team Capacity</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="/components/Reports">Previous Sprint</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/components/Users">Users</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar> */}
        </div>
    )
}

export default NavBar;