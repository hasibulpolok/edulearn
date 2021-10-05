

import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useSetdata from '../../hook/useSetdata';
const Courses = (props) => {
    const courses = useSetdata()
    return (
        <div>
            <br /> <br />
            <div className="upcoming-courses ms-4 mb-2">
                <h2 className="display-2 text-center fw-bold">{props.children}</h2>
                <hr className=" bg-danger mx-auto " />

                <Row className="m-5">
                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.id}
                            course={course} />)
                    }

                </Row>
            </div>
        </div>

    );
};

export default Courses;