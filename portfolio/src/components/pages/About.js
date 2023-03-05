import React from "react";
import profilePic from "../../assets/images/clarice.png";
import "../css/About.css";

export default function About() {
    return (
        <main className="animate__animated animate__zoomIn animate__fadeOut">
            <img src={profilePic} alt="Clarice" id="profile" />

            <p id="bio">
                I've lived in the Greater Seattle Area my whole life. I graduated from the University of Washington with a degree in psychology. I've recently reignited my interest and passion for
                coding. I'm an enjoyer of video games. I like working with animation and image manipulation through coding.
            </p>
        </main>
    );
}
