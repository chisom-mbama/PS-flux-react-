import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1> Page Not Found</h1>
            <p>
                <Link to="/"> Back to Home </Link>
            </p>
        </div>
    );
}

export default NotFoundPage;