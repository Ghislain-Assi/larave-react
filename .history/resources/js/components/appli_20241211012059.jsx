import React from "react";
import MesRoutes from "../routes/index";
import { NavLink } from "react-router-dom";

const appli = () => {
    return (
        <>
            <nav>
                <NavLink to="/home1">Home 2</NavLink>
                <NavLink to="/home2">Home 2</NavLink>
            </nav>
        </>
    );
};

export default appli;
