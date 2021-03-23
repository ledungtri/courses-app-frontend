import React from 'react';
import { Link } from 'react-router-dom';

const navLinkStyle = {
    flex: "1 1 auto",
    border: "solid 1px dimgray",
    textDecoration: "none",
    color: "white"
}

function NavLink(props) {
    return <Link to={props.href} style={navLinkStyle}> {props.label} </Link>
}

export default NavLink;