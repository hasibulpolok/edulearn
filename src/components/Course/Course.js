import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Course = (props) => {
    return (
        <Col md={3} xs={12}>
        <Card style={{ width: '18rem', marginBottom: "5px" }}>
            <Card.Img style={{ height: "100px" }} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button className="btn btn-danger"><Nav.Link><Link className="text-white text-decoration-none fw-bold bg-danger p-2 my-2 rounded" to="/enroll">Start Course</Link></Nav.Link></Button>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Course;