import React from "react";
import liLogo from "../assets/images/linkedin_logo.svg";
import tLogo from "../assets/images/twitter_logo.svg";
import ghLogo from "../assets/images/github_logo.svg";

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/claricetran">
                <img alt="github logo" src={ghLogo} />
            </a>
            <a href="https://www.linkedin.com/in/claricetran/">
                <img alt="linkedin logo" src={liLogo} />
            </a>
            <a href="https://twitter.com/c_l_a_rice">
                <img alt="twitter logo" src={tLogo} />
            </a>
            <div>
                <h3>© 2023 Clarice Tran</h3>
            </div>
        </footer>
    );
}
