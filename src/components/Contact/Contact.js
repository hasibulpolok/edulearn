import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <br /> <br />
            <h1 className="display-1 text-center">Contact Us</h1>

            <br /><br />


            <Form className="m-5">
                <Row className="mb-3 ">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label> YourName</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                </Row>



                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            <br />
                <Button className="btn-danger" variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>

        </div>
    );
};

export default Contact;