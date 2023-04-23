import {useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login ({ setUser }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let navigator = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
            sessionStorage.setItem('user', user)
          });
          navigator("/")
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    } 

    return (

        <div className="container">
            

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
            // onSubmit={handleFormSubmit}
            >
                <h1>Login</h1>
                <label htmlFor="username">Email</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="username"
                    autoComplete="off"
                    // value={username}
                    placeholder="Enter Email"
                    // onChange={(e) => setUsername(e.target.value)}
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

    //     <>
    //     <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
    //   <div className="flex flex-col items-center justify-center bg-slate-900 h-auto rounded-lg shadow-2xl max-w-md w-11/12 mb-2 p-8">
    //     <h1 className="text-4xl mt-5 text-orange-600 font-bold">Log In</h1>
    //     <p className="text-white text-2xl">Welcome Back</p>
    //     <form
    //         onSubmit={handleSubmit}
    //      className="flex flex-col items-center justify-center mt-8">
          
    //       <div className="w-full mb-2 flex flex-col">
    //         <label htmlFor="email" className="text-gray-500 font-bold mb-2">
    //           Email
    //         </label>
    //         <input
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //           type="text"
    //           id="email"
    //           placeholder="Email"
    //           className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
    //           required
    //         />
    //       </div>
    //       <div className="w-full mb-2 flex flex-col">
    //         <label
    //           htmlFor="password"
    //           className="text-gray-500 font-bold mb-2"
    //         >
    //           Password
    //         </label>
    //         <input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //           type="password"
    //           id="password"
    //           placeholder="Password"
    //           className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
    //           required
    //         />
    //       </div>
    //       <button className="bg-orange-600 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full mt-4">
    //         Log In
    //       </button>
    //     </form>
    //   </div>
    // </div>
    //     </>
