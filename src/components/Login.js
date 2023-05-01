import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center bg-slate-900 h-auto rounded-lg shadow-2xl max-w-md w-11/12 mb-2 p-8">
          <h1 className="text-4xl mt-5 text-orange-600 font-bold">Log In</h1>
          <p className="text-white text-2xl">Welcome Back</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mt-8"
          >
            <div className="w-full mb-2 flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="Email"
                className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full mb-2 flex flex-col">
              <label
                htmlFor="password"
                className="text-gray-500 font-bold mb-2"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Password"
                className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button className="bg-orange-600 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full mt-4">
              Log In
            </button>
            <div className="flex flex-col items-center justify-center mt-4">
              <p className="text-white text-lg">Don't have an account?</p>
              <a href="/signup" className="text-orange-600 text-lg">
                sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
