import React, { useState } from "react";
<<<<<<< HEAD

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
=======
import './SignUp.css';

function SignUp({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });
            if (response.ok) {
                const user = await response.json();
                setUser(user);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="signup-container">
            <div className="banner">
                <div className="portfolio pdx">
                    <div className="portfolio-description pd">
                        <h2>Welcome! <span>To Our Site</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Valiptatum</p>
                        <div className="portfolio-social-icons">
                            <a href="/"><i className="bi bi-facebook"></i></a>
                            <a href="/"><i className="bi bi-linkedin"></i></a>
                            <a href="/"><i className="bi bi-telegram"></i></a>
                            <a href="/"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="login-form px">
                    <div className="form-box">
                        <form onSubmit={handleSubmit}>
                            <h1>Sign Up</h1>
                            <div className="input-box">
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    autoComplete="off"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="New Password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    placeholder="Password Confirmation"
                                    autoComplete="current-password"
                                    value={passwordConfirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                />
                            </div>
                            <button className="btnx" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
>>>>>>> 2cda5f56287e9acebc7aa0a2396177b73bf252d5
}

export default SignUp;
