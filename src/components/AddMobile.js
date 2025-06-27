import React, { useState,useContext } from "react";
import MobileList from "./MobileList";
import { MobileContext } from "../pages/MobileContext";

const AddMobile = () => {

  const { allData, setAllData  } = useContext(MobileContext);

  const [mobileData, setMobiledata] = useState({
    mobile: "",
    brand: "",
    price: "",
    rating: "",
    ram_gb: "",
    storage_gb: "",
    screen_inch: "",
    sim_type: "",
    discount_percent: "",
    network_generation: "",
    operating_system: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMobiledata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/mobiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mobileData),
      });

      const data = await res.json();
      setAllData((prev) => [...prev, data]);
      console.log("Mobile added:", data);
    } catch (error) {
      console.error("Error adding mobile:", error);
    }
  };

  return (
    <div className="add-mobile-form">
      <h5>Add Mobile</h5>
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group">
            <label>Mobile</label>
            <input type="text" required name="mobile" value={mobileData.mobile} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <select name="brand" value={mobileData.brand} onChange={handleChange}>
              <option value="">Select brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Xiaomi">Xiaomi</option>
            </select>
          </div>
       

        
          <div className="form-group">
            <label>Price (₹)</label>
            <input type="number" name="price" value={mobileData.price} onChange={handleChange} />
          </div>
          
        </div>

        <div className="form-row">
            <div className="form-group">
            <label>Rating</label>
            <input type="number" step="0.1" name="rating" value={mobileData.rating} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>RAM (GB)</label>
            <input type="number" name="ram_gb" value={mobileData.ram_gb} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Storage (GB)</label>
            <input type="number" name="storage_gb" value={mobileData.storage_gb} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Screen Size (Inch)</label>
            <input type="number" step="0.1" name="screen_inch" value={mobileData.screen_inch} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>SIM Type</label>
            <select name="sim_type" value={mobileData.sim_type} onChange={handleChange}>
              <option value="">Select SIM Type</option>
              <option value="Single SIM">Single SIM</option>
              <option value="Dual SIM">Dual SIM</option>
            </select>
          </div>
          <div className="form-group">
            <label>Network</label>
            <select name="network_generation" value={mobileData.network_generation} onChange={handleChange}>
              <option value="">Select Network</option>
              <option value="4G">4G</option>
              <option value="5G">5G</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          
          <div className="form-group">
            <label>Operating System</label>
            <select name="operating_system" value={mobileData.operating_system} onChange={handleChange}>
              <option value="">Select OS</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
            </select>
          </div>
       
          <div className="form-group">
            <label>Discount (%)</label>
            <input type="number" name="discount_percent" value={mobileData.discount_percent} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" name="image" value={mobileData.image} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
      <MobileList mobiledata={allData}/>
    </div>
    
  );
};

export default AddMobile;
