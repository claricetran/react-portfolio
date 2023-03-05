import React from "react";
import logos from "../../assets/images/skills/index.js";
import resume from "../../assets/files/clarice_tran_resume.pdf";
import "../css/Resume.css";

export default function Resume() {
    return (
        <main>
            <h2 id="download">
                <a href={resume} download>
                    Download Resume
                </a>
            </h2>

            <h2>Skills:</h2>
            <ul>
                <li>
                    <img src={logos[0]} className="logos" alt="html badge" />
                    HTML
                </li>
                <li>
                    <img src={logos[1]} className="logos" alt="css badge" />
                    CSS - Bootstrap
                </li>
                <li>
                    <img src={logos[2]} className="logos" alt="javascript badge" />
                    JavaScript
                </li>
                <li>
                    <img src={logos[3]} className="logos" alt="node.js badge" />
                    Node.js
                </li>
                <li>
                    <img src={logos[4]} className="logos" alt="express.js badge" />
                    Express.js
                </li>
                <li>
                    <img src={logos[5]} className="logos" alt="SQL badge" />
                    SQL - Sequelize
                </li>
                <li>
                    <img src={logos[6]} className="logos" alt="Mongo badge" />
                    NoSQL - MongoDB, Mongoose
                </li>
                <li>
                    <img src={logos[7]} className="logos" alt="React badge" />
                    React
                </li>
            </ul>
            <h2>Awards:</h2>
            <ul>
                <li>
                    <a href="https://claricetran.github.io/dont-wake-up/">Don't Wake Up</a> - Best UX/UI and People's Choice Award
                </li>
                <li>
                    <a href="https://roomease.herokuapp.com/">RoomEASE</a> - Best Functionality and People's Choice Award
                </li>
            </ul>
            <h2>Experience: </h2>
        </main>
    );
}
