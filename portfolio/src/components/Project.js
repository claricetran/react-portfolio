import React from "react";
import ghLogo from "../assets/images/github_logo.svg";

export default function Project(props) {
    return (
        <figure className="animate__animated animate__zoomIn animate__fadeOut">
            <img src={props.img} alt={props.alt} className="card-img" />
            <figcaption
            // className="animate__animated animate__fadeInDown animate__fadeOutUp"
            >
                <a href={props.link} className="pLink" target="_blank" rel="noreferrer">
                    <b>{props.name}</b>
                </a>

                <a href={props.repo} className="pRepo" target="_blank" rel="noreferrer">
                    <img src={ghLogo} alt="repo" className="card-logo" />
                </a>
            </figcaption>
        </figure>
    );
}
