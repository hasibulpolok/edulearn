import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import dartim from '../../images/dart.png';
import djangoim from '../../images/djnago.png';
import flutterim from '../../images/flutter.png';
import golangim from '../../images/golang.png';



const Course = () => {
    return (
        <div>
            <br /> <br />
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
                                <Button className="btn btn-danger">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
        

                </Row>
            </div>
        </div>
    );
};

export default Course;