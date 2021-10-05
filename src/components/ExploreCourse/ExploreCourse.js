import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card,  Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreCourse = (props) => {
    const {  name, img, desc } = props.exp;
    return (
        
            <Card style={{ width: '18rem', marginBottom: "5px" }}>
                <Card.Img style={{ height: "100px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button className="btn btn-danger"><Nav.Link><Link className="text-white text-decoration-none fw-bold bg-danger p-2 my-2 rounded" to="/enroll">Start Course</Link></Nav.Link></Button>
                </Card.Body>
            </Card>
        
    );
};

export default ExploreCourse;