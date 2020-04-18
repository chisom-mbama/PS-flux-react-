import React from "react";

const renderRow = (course) => {
    return(
       
            <tr key= {course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
            </tr>   
         );
     }

const CourseList = (props) => {
    return (
        <table className = "table">
             <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>{props.courses.map(renderRow)}</tbody>
        </table>
    );
}

export default CourseList;