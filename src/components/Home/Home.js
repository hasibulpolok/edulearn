import Button from '@restart/ui/esm/Button';
import React from 'react';
import stimg1 from '../../images/student-1.jpeg';
import stimg2 from '../../images/student-2.jpg';

import { Card, Carousel, Col, Container, Form, FormControl, Image, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home-top">
                <br />
                <br />
                <h1 className="my-5 py-5 text-white fw-bolder text-center ">Find Your Online Course</h1>
                <>
                    <div className="Search-form">
                        <Form className="me-auto">
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <FormControl className="mx-auto w-50 py-3 " type="text" placeholder="Serach Course" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="buttonbrowse">
                        <button>Browse Categrories</button>
                    </div>
                </>
            </div>
            <div className="middle-container my-5 ms-5 ">
                <div className="details">
                    <h3>We Have The Best Online Education in The City</h3>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    similique
                    <li><strong>Full lifetime access</strong></li>
                    <li><strong>20+ downloadable res</strong></li>
                    <li><strong>Certificate of completion</strong></li>
                    <li><strong>Free Trial 7 Days</strong></li>
                    <br />
                    
                    <Nav.Link><Link className="text-white text-decoration-none fw-bold bg-danger p-2 my-2 rounded" to="/enroll">Enroll Now</Link></Nav.Link>

                </div>
                <div className="img ">
                    <img   className="img-fluid" src={stimg1}></img>
                </div>
                
                <div className="img my-5">
                    <img className="img-fluid" src={stimg2}></img>
                </div>

                

                <div className="details my-5">
                    <h3>We Have The Best Online Education in The City</h3>
                    <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique</p>

                    <ol>
                        <li><strong>Create account</strong></li>
                        <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>

                        <li><strong>Join Membershipt</strong></li>
                        <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>

                        <li><strong>Start Learning</strong></li>
                        <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>

                        <li><strong>Get Certificate</strong></li>
                        <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>

                    </ol>
                </div>
            </div>
            

            
        </>
    );
};

export default Home;