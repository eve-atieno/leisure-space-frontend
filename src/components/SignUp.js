import React, { useState } from "react";

export default function SignUp({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();

        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password, password_confirmation: passwordConfirmation, })
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((user) => setUser(user));
                }
            });
    }
    return (
        <div className="banner">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" id="username" placeholder="Username"
                        autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-box">
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" placeholder="New Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password" />
                </div>
                <div className="input-box">
                    {/* <label htmlFor="password">Password Confirmation</label> */}
                    <input
                        type="password"
                        placeholder="Password Confirmation<"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
                <button className="btnx" type="submit">Sign Up</button>
            </form>
        </div>
    )
}