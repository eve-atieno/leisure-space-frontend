import React from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import hotel from "../../assets/hotels/hotel-1.jpeg";




function Card() {
  return (
    <div class="mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div class= "wx-270px ">
          <img src={hotel} className="card-img" alt="img"/>
            <div className="card-info-flex">
                <h3 className="card-title">Place</h3>
                <div className="card-rating">
                    <StarRateRoundedIcon />
                    <p>4.88</p>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Card;