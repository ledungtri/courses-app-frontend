import React from 'react';
import Paper from '@mui/material/Paper';
import './NavBar.css';
import {AppBar, Link, Typography} from "@mui/material";

function NavBar() {

    const style = {
        display: 'flex',
        listStyleType: 'none'
    }

    return (
        <AppBar position="static">
            <Typography variant="h4">School Management App</Typography>
            <nav>
                <ul style={style}>
                    <li>
                        <Paper className='card'><Link href={"/courses"}>Courses</Link></Paper>
                    </li>
                    <li>
                        <Paper className='card'><Link href={"/students"}>Students</Link></Paper>
                    </li>
                    <li>
                        <Paper className='card'><Link href={"/instructors"}>Instructors</Link></Paper>

                    </li>
                </ul>
            </nav>
        </AppBar>
    );
}

export default NavBar;
