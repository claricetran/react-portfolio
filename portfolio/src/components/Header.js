import React from "react";
import clarice from "../assets/images/header.svg";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
            <img src={clarice} alt="Clarice Tran" id="title" className="animate__animated animate__fadeInDown" />
            <Navigation />
        </header>
    );
}
