import React from "react";
import profilePic from "../../assets/images/clarice.png";
import "../css/About.css";

export default function About() {
    return (
        <section>
            <img src={profilePic} alt="Clarice" id="profile" />
            <h2>About Me</h2>
            <p>
                I've lived in the Greater Seattle Area my whole life. I graduated from the University of Washington with a degree in psychology. I've recently reignited my interest and passion for
                coding. I am a junior fullstack developer. Check out my resume by clicking the link above to see what I am proficient in.
            </p>
        </section>
    );
}
