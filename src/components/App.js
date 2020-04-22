import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch } from "react-router-dom";

const App = () => {
   
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component = {HomePage}/>
                <Route path="/about" component = {AboutPage}/>
                <Route path="/courses" component = {CoursesPage}/>
                <Route component = {NotFoundPage}/>
            </Switch>   
        </div>
    );
}

export default App;