import React from 'react';

import Footer from "./components/Footer/Footer";
import {ThemeProvider} from "@mui/material";
import theme from "./styles/theme";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Courses from "./pages/Courses";
import CourseForm from "./components/courses/CourseForm";
import CourseDetail from "./pages/CourseDetail";
import Students from "./pages/Students";
import Instructors from "./pages/Instructors";
import PersonForm from "./components/people/PersonForm";
import PersonDetail from "./pages/PersonDetail";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <main className="main_app">
              <Router>
                  <NavBar />
                  <Switch>
                      <Route path="/" exact component={Courses} />

                      <Route path="/courses" exact component={Courses} />
                      <Route path="/courses/new" exact component={CourseForm} />
                      <Route path="/courses/:id" exact component={CourseDetail} />

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
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
