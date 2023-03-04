import React from "react";
import ghLogo from "../assets/images/github_logo.svg";

export default function Project(props) {
    return (
        <div class="card">
            <img src={props.img} alt={props.alt} class="card-img" />
            <div class="card-info">
                <h3>
                    <a href={props.link}>
                        <b>{props.name}</b>
                    </a>
                </h3>
                <a href={props.repo}>
                    <img src={ghLogo} alt="repo" />
                </a>
            </div>
        </div>
    );
}
