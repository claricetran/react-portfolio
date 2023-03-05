import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="animate__animated animate__fadeIn">
            <NavLink to="/" exact="true" className={(navData) => (navData.isActive ? "navbar-link active" : "nav-link")}>
                ABOUT ME
            </NavLink>

            <NavLink to="/portfolio" className={(navData) => (navData.isActive ? "navbar-link active" : "nav-link")}>
                PORTFOLIO
            </NavLink>

            <NavLink to="/contact" className={(navData) => (navData.isActive ? "navbar-link active" : "nav-link")}>
                CONTACT
            </NavLink>

            <NavLink to="/resume" className={(navData) => (navData.isActive ? "navbar-link active" : "nav-link")}>
                RESUME
            </NavLink>
        </nav>
    );
}
