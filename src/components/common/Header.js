import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = {color:"red"};
    return (
        <nav>
            <NavLink activeStyle = {activeStyle} exact to = "/">
                Home
            </NavLink> 
            {" | "}
            <NavLink activeStyle = {activeStyle} to = "/about">
                About
            </NavLink> 
            {" | "}
            <NavLink activeStyle = {activeStyle} to ="/courses">
            Courses
            </NavLink>
        </nav>
    );
}

export default Header;