import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

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
        }
        setEmail("");
        setName("");
        setMessage("");
    };

    return (
        <form onSubmit={handleMail}>
            <input name="name" value={name} onChange={handleInputChange} placeholder="Name" />
            <input name="email" value={email} onChange={handleInputChange} placeholder="Email" />
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <textarea name="message" value={message} onChange={handleInputChange} placeholder="Message" />
            <button>Send</button>
        </form>
    );
}
