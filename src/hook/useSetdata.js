import { useEffect, useState } from "react";

function useSetdata() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return courses;
}
export default useSetdata;