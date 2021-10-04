import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import dartim from '../../images/dart.png';
import djangoim from '../../images/djnago.png';
import flutterim from '../../images/flutter.png';
import golangim from '../../images/golang.png';

const About = () => {
    return (
        <div>
            <br />
            <h3 className="display-1 text-center my-5">About us</h3>

            <p className="fw-bold text-center">
                Hello,
                Edulearn is an online platform where you can choose your favourite courses and start learning
            </p>
            <p className="fw-bold text-center">
                Edulearn is very popular these days. We always help students to slove theri problems.
                We take Conceptual Session everyday <br /> so that students can clear their all concept. You can choose any
                course here and can start learning <br /> from today and you don't have to go any where just choose and start from your home ('-')
            </p>
            <div>

                <div className="upcoming-courses ms-4 mb-2">
                    <h2 className="display-2 text-center fw-bold">Upcoming Courses</h2>
                    <hr className=" bg-danger mx-auto " />

                    <Row>
                        <Col md={3} xs={12}>
                            <Card style={{ width: '18rem', marginBottom: "5px" }}>
                                <Card.Img style={{ height: "100px" }} variant="top" src={djangoim} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={12} >
                            <Card style={{ width: '18rem', marginBottom: "5px" }}>
                                <Card.Img variant="top" style={{ height: "100px" }} src={flutterim} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={12}>
                            <Card style={{ width: '18rem', marginBottom: "5px" }}>
                                <Card.Img style={{ height: "100px" }} variant="top" src={dartim} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} xs={12}>
                            <Card style={{ width: '18rem', marginBottom: "5px" }}>
                                <Card.Img style={{ height: "100px" }} variant="top" src={golangim} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>

    );
};

export default About;