import React from "react";
// import { API_HOST } from "../config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";

import Courses from "./courses/Courses";
import CourseDetail from "./courses/courseDetail";
import CourseForm from "./courses/CourseForm";

import Students from "./people/Students";
import Instructors from "./people/Instructors";
import PersonDetail from "./people/personDetail";
import PersonForm from "./people/PersonForm";

function Body() {
  return (
    <main>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Courses} />

          <Route path="/courses" exact component={Courses} />
          <Route path="/courses/new" exact component={CourseForm} />
          <Route path="/courses/:id" component={CourseDetail} />

          <Route path="/students" component={Students} />
          <Route path="/instructors" component={Instructors} />
          <Route path="/people/new" exact component={PersonForm} />
          <Route path="/people/:id" component={PersonDetail} />

          {/* TODO: Edit pages for Course and Person */}
          {/* TODO  Create New pages for Course and Person */}
          {/* TODO: Search page */}
        </Switch>
      </Router>
    </main>
  );
}

export default Body;
