// import React, { useState } from "react";
// import './LogIn.css';

// function Login({ setUser }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch("/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 const user = await response.json();
//                 setUser(user);
//             } else {
//                 throw new Error("Login failed.");
//             }
//         } catch (error) {
//             // console.error(error);
//             alert("Please SignUp first or try to logIn with excisting account!")
//             // handle login error
//         }
//     };

//     return (
//         <div className="container">
//             <form className="form" onSubmit={handleFormSubmit}>
//                 <h1>Login</h1>
//                 <label htmlFor="username">Email</label>
//                 <input
//                     type="text"
//                     id="username"
//                     autoComplete="off"
//                     value={username}
//                     placeholder="Enter Email"
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     value={password}
//                     placeholder="Enter password"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default Login;


