import React, { useState } from "react";
import './LogIn.css';

export default function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => setUser(user));
            }
        });
    }
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Name:
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Email" />
                </label>
                <label>
                    Password :
                    <input type="password" id="password" value={password}
                        autoComplete="current-password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                </label>
            </form>
        </div>
    )
}