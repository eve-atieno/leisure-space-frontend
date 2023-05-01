import { da } from "date-fns/locale";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [change, setOnChange] = useState(false);
  const [admin , setAdmin] = useState();

  // login
 const login = (email, password, userType) => {
  fetch("https://leisure.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, userType }),
  })
  .then((res) => res.json())
  .then((response) => {
    setOnChange(!change);
    if (response.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.error,
      });
    } else if (response.user) {
      setUser(response.user);
      sessionStorage.setItem("user", JSON.stringify(response.user));
      sessionStorage.setItem("jwtToken", response.jwt);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LoggedIn successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
    } else if (response.admin) {
      setAdmin(response.admin);
      sessionStorage.setItem("admin", JSON.stringify(response.admin));
      sessionStorage.setItem("jwtToken", response.jwt);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LoggedIn successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/spaces");
    }
  });
};

  // Register
  const register = (name, email, password, confirmPassword) => {
    fetch("https://leisure.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registered successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          // Delay the navigation by 1.5 seconds
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      });
  };
  
  
 
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };


  const contextData = {
    user,
    login,
    register,
    logout,
    admin,
  };
// fetch user
  // useEffect(() => {
  //   fetch("", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response)
      
  //     });
  // }, []);

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}