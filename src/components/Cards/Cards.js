import React from "react";
import "./styles.css";
//import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import hotel from "../../assets/hotels/hotel-1.jpeg";




function Card() {
  return (
    <div className="card-container">
        <div className="card-box">
          <img src={hotel} className="card-img" alt="img"/>
            <div className="card-info-flex">
                <h4 className="name">Diani Beach</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Mombasa</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>Beach and sunset views</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 400</span> night</p>
        </div>
        <div className="card-box">
          <img src={hotel} className="card-img" alt="img"/>
            <div className="card-info-flex">
                <h4 className="name">Desert Home</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Turkana</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>2km from Turkana</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 400</span> night</p>
        </div>
        <div className="card-box">
          <img src={hotel} className="card-img" alt="img"/>
            <div className="card-info-flex">
                <h4 className="name">lux homes</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Kilimani</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>pool infront</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 600</span> night</p>
        </div>
        <div className="card-box">
          <img src={hotel} className="card-img" alt="img"/>
            <div className="card-info-flex">
                <h4 className="name">Tent homes</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Maasai Mara</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>10km from Narok</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 300</span> night</p>
        </div>
        <div className="card-box">
          <img src={hotel} className="card-img" alt="img"/>
            <div className="card-info-flex">
                <h4 className="name">Luxurius home</h4>
                
            </div>
            <p className="location" style={{margin:0,color: "var(--font-grey"}}>Naivasha</p>
            <p className="description" style={{margin:0,color: "var(--font-grey"}}>Flamigos and sunset views</p>
            <p className="price" style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--font-black)" }}><span style={{ fontWeight: "600"}}>$ 100</span> night</p>
        </div>
        
    </div>
    
  );
}

export default Card;