import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../css/Contact.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleMail = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid.");
            return;
        } else {
            setErrorMessage("");
        }

        setEmail("");
        setName("");
        setMessage("");
    };

    return (
        <main>
            <form onSubmit={handleMail} className="animate__animated animate__zoomIn animate__fadeOut">
                <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" />
                <input type="text" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <textarea name="message" value={message} onChange={handleInputChange} placeholder="Message" />
                <button type="submit">Send</button>
            </form>
        </main>
    );
}
