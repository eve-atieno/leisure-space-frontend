import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";



function App() {

  return (
  
   
      <Routes>
        <Route path="/" element={[<Home/>,<Footer/>]} />
        <Route path="/booking" element={[<NavBar/>,<BookingPage />]} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/spaces" element={<Spaces />} /> */}
      </Routes>
    
      
  
  );
}

export default App;