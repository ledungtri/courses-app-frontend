import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

import NavLink from "./NavLink";


const NavBar = withStyles({
    root: {
        display: 'flex',
        flexFlow: "row wrap",
        position: "static"
    }
  })(AppBar);

function Nav() {
    return ( 
        <NavBar>
            <NavLink href="/courses" label="Courses"/>
            <NavLink href="/students" label="Students"/>
            <NavLink href="/instructors" label="Instructors"/>
        </NavBar>
    );
}

export default Nav;
