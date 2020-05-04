import React, {useState, useEffect} from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"; 
import { toast } from "react-toastify";

const ManageCoursePage = props => {
    const [error, setError] = useState ({});
    const [course, setCourse] = useState ({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "" 
    });

    useEffect (() => {
        const slug = props.match.params.slug //from the path "/courses/:slug"
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
        }
    },[props.match.params.slug]);

    function handleChange (event) {
        const updatedCourse = {
            ...course,
            [event.target.name]: event.target.value
        };
        setCourse(updatedCourse); 
    }

    function handleSubmit (event){
        event.preventDefault ();
        if (!formIsValid ()) return;
        courseApi.saveCourse (course).then ( () => {
            props.history.push ("/courses");
            toast.success ("Course saved")
        });
    }

    function formIsValid (){
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author ID is required";
        if (!course.category) _errors.category = "Category is required";

        setError(_errors);
        //Form is valid if _errors object has no properties.
        return Object.keys(_errors).length === 0;
    }
    
    return (
        <>
            <h2>Manage Courses</h2>
            <CourseForm 
            course={course}
            error={error} 
            onChange={handleChange}
            onSubmit={handleSubmit}
            />
        </>
    );
};



export default ManageCoursePage;