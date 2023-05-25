import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = function(props) {
    return (
        <div style={{height: "200px", backgroundColor: "lightpink"}} >
            <h1>Navbar</h1>
            <NavLink to="/home" >
                <button>My Todos</button>
            </NavLink>
            <NavLink to="/form" >
                <button>New Todo</button>
            </NavLink>
        </div>
    )
};

export default Navbar;