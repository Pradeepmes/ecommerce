import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import Mobiledata from "../data/mobile-data.json";

import mimage from "../assets/images/mobileone.jpeg";

const Electronics = () => {
  //const navigate = useNavigate();
  const [mdata] = useState(Mobiledata);

 /* useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);*/

  return (
    <div className="mobile-details-container">
      {mdata.map((item) => (
        <div key={item.id} className="mobile-card">
          <div className="mobile-image">
            <img src={mimage} alt={mimage} />
          </div>
          <div className="mobile-info">
            <h2>{item.mobile}</h2>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
            <p><strong>Rating:</strong> ⭐ {item.rating}</p>
            <p><strong>RAM:</strong> {item.ram_gb} GB</p>
            <p><strong>Storage:</strong> {item.storage_gb} GB</p>
            <p><strong>Screen:</strong> {item.screen_inch}"</p>
            <p><strong>SIM:</strong> {item.sim_type}</p>
            <p><strong>Network:</strong> {item.network_generation}</p>
            <p><strong>OS:</strong> {item.operating_system}</p>
            <p><strong>Discount:</strong> {item.discount_percent}%</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Electronics;
