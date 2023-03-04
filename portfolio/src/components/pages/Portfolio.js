import React from "react";
import Project from "../Project";
import images from "../../assets/images/projects/index";
import "../css/Portfolio.css";

const projects = [
    {
        img: images[0],
        alt: "Don't Wake Up - story game",
        link: "https://claricetran.github.io/dont-wake-up/",
        name: "Don't Wake Up",
        repo: "https://github.com/claricetran/dont-wake-uphttps://github.com/claricetran/dont-wake-up",
    },
    {
        img: images[1],
        alt: "RoomEASE",
        link: "https://roomease.herokuapp.com/",
        name: "RoomEASE",
        repo: "https://github.com/maximusDecimalusMeridius/roomease",
    },
    {
        img: images[2],
        alt: "Tech Blog",
        link: "https://tech-blahg.herokuapp.com/",
        name: "Tech Blog",
        repo: "https://github.com/claricetran/tech-blog",
    },
    {
        img: images[3],
        alt: "Just Another Text Editor",
        link: "https://ja-txt-editor.herokuapp.com/",
        name: "Just Another Text Editor",
        repo: "https://github.com/claricetran/text-editor",
    },
    {
        img: images[4],
        alt: "Note Taker",
        link: "https://notetake.herokuapp.com/",
        name: "Note Taker",
        repo: "https://github.com/claricetran/note-taker",
    },
    {
        img: images[5],
        alt: "Weather Dashboard",
        link: "https://claricetran.github.io/weather-dashboard/",
        name: "Weather Dashboard",
        repo: "https://github.com/claricetran/weather-dashboard",
    },
];

export default function Portfolio() {
    return (
        <main>
            {projects.map((project) => {
                return <Project img={project.img} alt={project.alt} link={project.link} name={project.name} repo={project.repo} />;
            })}
        </main>
    );
}
