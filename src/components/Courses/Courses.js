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

                <Row>

                    <Course image={image1} title="Django Master Class" desc="" />
                    <Course image={image2} title="Flutter Master Class" desc="" />
                    <Course image={image3} title="GoLang Master Class" desc="" />
                    <Course image={image4} title="Dart Master Class" desc="" />


                </Row>
            </div>
        </div>

    );
};

export default Courses;