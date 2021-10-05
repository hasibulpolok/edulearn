import logo from '../../images/logo.png';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>


            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link className="text-white text-decoration-none" to="/home"><img style={{width:"110px"}} src={logo} alt={"logo"}/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="text-white text-decoration-none" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="text-white text-decoration-none" to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link className="text-white text-decoration-none" to="/courses">Courses</Link></Nav.Link>
                            <Nav.Link><Link className="text-white text-decoration-none" to="/contact">Contact</Link></Nav.Link>
                           
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