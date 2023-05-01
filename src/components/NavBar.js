import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Logo from "../assets/Images/navbar.png";
import Profile from "../assets/Images/download (3).png";

const NavBar = () => {
  const navigate = useNavigate();
  const { setUser, setAdmin } = useContext(AuthContext); // Get user and admin from context

  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
    setUser(null);
    setAdmin(false); // Set admin to false on logout
    navigate("/");
  };

  const user = JSON.parse(sessionStorage.getItem("user"));
  const admin = JSON.parse(sessionStorage.getItem("admin"));

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav class="flex items-center justify-between shadow-md backdrop-blur-lg flex-wrap bg-navy blue-500 p-6 opacity-90">
        <div className="ml-4 md:ml-11 mt-2 md:mt-0">
          <img src={Logo} alt="logo" className="w-16 md:w-20 h-16 md:h-20" />
        </div>
        <div className="w-full block md:flex md:items-center md:w-auto">
          <div className="text-lg text-center md:flex-grow">
            <div className="md:hidden flex items-center justify-end">
              <button
                className="text-white hover:text-orange-600 focus:text-orange-600 focus:outline-none mr-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color="orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color="orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:items-center w-full justify-between md:w-auto 
              text-black text-sm font-bold uppercase mt-2 md:mt-0`}
            >
              <div class="text-lg text-center  lg:flex-grow">
                <Link
                  to="/"
                  class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
                >
                  HOME
                </Link>
                <Link
                  to="/spaces"
                  class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
                >
                  SPACES
                </Link>

                {admin && (
                  <>
                    <Link
                      to="/addspace"
                      class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
                    >
                      ADD SPACE
                    </Link>
                  </>
                )}
                {!user && !admin && (
                  <>
                    <Link
                      to="/login"
                      class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
                    >
                      LOGIN
                    </Link>
                  </>
                )}
                {(user || admin) && (
                  <>
                    <p class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-black-600 mr-4 ">
                      Hello, {user ? user.name : admin ? admin.name : "Guest"}
                    </p>
                    <Link
                      to="/profile"
                      class="block mt-4 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 "
                    >
                      <img
                        src={Profile}
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <Link
                      onClick={handleLogout}
                      to="/login"
                      class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
                    >
                      LOG OUT
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
