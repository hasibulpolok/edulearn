import React from 'react';
import { Row } from 'react-bootstrap';
import useSetdata from '../../hook/useSetdata';
import ExploreCourse from '../ExploreCourse/ExploreCourse';

const ExploreCourses = (props) => {
  const excourses = useSetdata()
    return (
        <div>
            <br /> <br />
            <div className="explore-courses ms-4 mb-2">
                <h2 className="display-2 text-center fw-bold">{props.children}</h2>
                {props.children == null ? "" : <hr className=" bg-danger mx-auto " />}
                <Row className="m-5">
                    {
                        excourses.slice(4, 8).map(excourse => <ExploreCourse exp={excourse}/>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default ExploreCourses;