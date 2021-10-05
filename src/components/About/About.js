import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import dartim from '../../images/dart.png';
import djangoim from '../../images/djnago.png';
import flutterim from '../../images/flutter.png';
import golangim from '../../images/golang.png';

const About = (props) => {
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
            
        </div>

    );
};

export default About;