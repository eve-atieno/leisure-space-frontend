// import React from "react";
// import './NavBar.css'
// import { Link } from "react-router-dom";
// import InputSearch from "./InputSearch";

// function NavBar({ user, setUser }) {
//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }
//   return (
//     <header>
//       <nav>
//         <ul className="nav-left">
//         <Link to="/"><i class="bi bi-apple"></i> <br/>AirBnb</Link>
//         </ul>
//         <ul className="nav-center">
//         <InputSearch/>
//         </ul>
//             {user ? (
//               <button onClick={handleLogoutClick}>Logout</button>
//             ) : (
//               <ul className="nav-right">
//                  <Link to="/signup">Signup</Link>
//                   <hr />
//                  <Link to="/login">Login</Link>
//               </ul>
//             )}
//       </nav>
//     </header>
//   );
// }

// export default NavBar;
