import React from "react";
import Project from "../Project";
import images from "../../assets/images/projects/index";
import "../css/Portfolio.css";

const projects = [
    {
        id: 1,
        img: images[0],
        alt: "Don't Wake Up - story game",
        link: "https://claricetran.github.io/dont-wake-up/",
        name: "Don't Wake Up",
        repo: "https://github.com/claricetran/dont-wake-up",
    },
    {
        id: 2,
        img: images[1],
        alt: "RoomEASE",
        link: "https://roomeasedeploy-8fdb93312210.herokuapp.com/",
        name: "RoomEASE",
        repo: "https://github.com/maximusDecimalusMeridius/roomease",
    },
    {
        id: 7,
        img: images[6],
        alt: "Happy Tappers",
        link: "https://happytappers.netlify.app/",
        name: "Happy Tappers",
        repo: "https://github.com/BRosencrans/happy-tappers-frontend",
    },
    {
        id: 3,
        img: images[2],
        alt: "Tech Blog",
        link: "https://tech-blahg.herokuapp.com/",
        name: "Tech Blog",
        repo: "https://github.com/claricetran/tech-blog",
    },
    {
        id: 4,
        img: images[3],
        alt: "Just Another Text Editor",
        link: "https://ja-txt-editor.herokuapp.com/",
        name: "Just Another Text Editor",
        repo: "https://github.com/claricetran/text-editor",
    },
    {
        id: 5,
        img: images[4],
        alt: "Note Taker",
        link: "https://notetake.herokuapp.com/",
        name: "Note Taker",
        repo: "https://github.com/claricetran/note-taker",
    },
    {
        id: 6,
        img: images[5],
        alt: "Weather Dashboard",
        link: "https://claricetran.github.io/weather-dashboard/",
        name: "Weather Dashboard",
        repo: "https://github.com/claricetran/weather-dashboard",
    },
];

export default function Portfolio() {
    return (
        <main id="projects">
            {projects.map((project) => {
                return <Project key={project.id} img={project.img} alt={project.alt} link={project.link} name={project.name} repo={project.repo} />;
            })}
        </main>
    );
}
