import image1 from '../../images/djnago.png';
import image2 from '../../images/flutter.png';
import image3 from '../../images/golang.png';
import image4 from '../../images/dart.png';

import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
const Courses = () => {
    return (
        <div>
            <br /> <br />
            <div className="upcoming-courses ms-4 mb-2">
                <h2 className="display-2 text-center fw-bold">Upcoming Courses</h2>
                <hr className=" bg-danger mx-auto " />

                <Row className="m-5">

                    <Course image={image1} title="Django Master Class" desc="Django is very popular these days.You can do the backend development with Django" />
                    <Course image={image2} title="Flutter Master Class" desc="Flutter is very popular and awesome for apps developemt. You can start for here" />
                    <Course image={image3} title="GoLang Master Class" desc="Golang is very popular and awesome. Its developed by google. You can start from Edulearn" />
                    <Course image={image4} title="Dart Master Class" desc="Dart is very very nice language with Dart you can build cross platform mobile apps" />


                </Row>
            </div>
        </div>

    );
};

export default Courses;