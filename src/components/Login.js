import React, { useState } from "react";
import './LogIn.css';

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const user = await response.json();
                setUser(user);
            } else {
                throw new Error("Login failed.");
            }
        } catch (error) {
            // console.error(error);
            alert("Please SignUp first or try to logIn with excisting account!")
            // handle login error
        }
    };

    return (
        <div className="container">
            

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Email</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    placeholder="Enter Email"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;


