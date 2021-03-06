import React from 'react';
import stimg1 from '../../images/student-1.jpeg';
import stimg2 from '../../images/student-2.jpg';

import { Form, FormControl, Nav, } from 'react-bootstrap';
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
                        <button className="btn btn-danger"><Nav.Link><Link className="text-white text-decoration-none fw-bold bg-danger p-2 my-2 rounded" to="/courses">Browse Course</Link></Nav.Link></button>
                    </div>
                </>
            </div>
            <div className="middle-container ">
                
               <div className="d-flex flex-column flex-md-row">
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
                
               </div>

               <div className="d-flex flex-column flex-md-row">
               <div className="w-100 my-5">
                    <img className="img-fluid" src={stimg2}></img>
                </div>

                

                <div className="details my-5">

                    <ol>
                        <li><strong>Create account</strong></li>
                        <p>Create an account first to be a member of our community.</p>

                        <li><strong>Join Membershipt</strong></li>
                        <p>We have different types of membership , choose the type of yours!</p>

                        <li><strong>Start Learning</strong></li>
                        <p>WoW! Now you are a member of our community. Now you can start learning</p>

                        <li><strong>Get Certificate</strong></li>
                        <p>After completing the course you will get a professinal certificate!</p>

                    </ol>
                </div>
               </div>
              
            </div>
            

            
        </>
    );
};

export default Home;