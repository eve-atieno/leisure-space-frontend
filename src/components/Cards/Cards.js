import React from "react";
import "./styles.css";
//import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Card({ spaces, setSpace }) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <Link to={`/booking/${spaces.id}`}>
        <div className="card-box text-black">
          <img
            className="card-img"
            src={spaces.media[1].image_url}
            alt="space"
          />

          <div className="card-info-flex mt-1">
            <h4 className="name">{spaces.name}</h4>
          </div>
          <p
            className="location"
            style={{ margin: 0, color: "var(--font-grey" }}
          >
            {spaces.location}
          </p>
          <p
            className="description"
            style={{ margin: 0, color: "var(--font-grey" }}
          >
            {spaces.description}
          </p>
          <p
            className="price"
            style={{
              margin: "0.2rem",
              fontSize: "1rem",
              color: "var(--font-black)",
            }}
          >
            <span style={{ fontWeight: "600" }}>Ksh{spaces.price}</span> night
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
