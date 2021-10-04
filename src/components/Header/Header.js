import logo from '../../images/logo.png';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>


            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link className="text-white text-decoration-none" to="/home"><img style={{width:"110px"}} src={logo}/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="text-white text-decoration-none" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="text-white text-decoration-none" to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link className="text-white text-decoration-none" to="/courses">Courses</Link></Nav.Link>
                            <Nav.Link><Link className="text-white text-decoration-none" to="/contact">Contact</Link></Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link><Link className="text-white text-decoration-none fw-bold bg-danger p-2 rounded" to="/enroll">Enroll Now</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="header-bg">

            </div>

        </>
    );
};

export default Header;