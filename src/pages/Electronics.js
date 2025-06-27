import React, { useState, useEffect ,useContext} from "react";
import mimage from "../assets/images/mobileone.jpeg";
import Filter from "./Filter";

import { MobileContext } from "./MobileContext";

const Electronics = () => {
  //const [allData, setAllData] = useState([]);
  const { allData } = useContext(MobileContext); // shared mobile data
  const [filteredData, setFilteredData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [visiblecount, setVisiblecount] = useState(5);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    brand: "",
    ram: [],
    price: { from: "", to: "" },
  });

  // data coming from context
  /*useEffect(() => {
    fetch("http://localhost:5000/mobiles")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);*/

  // Apply filters whenever filters or allData changes
  useEffect(() => {
    let result = [...allData];

    // Filter by brand
    if (filters.brand) {
      result = result.filter((item) =>
        item.brand.toLowerCase().includes(filters.brand.toLowerCase())
      );
    }

    // Filter by RAM
    if (filters.ram.length > 0) {
      result = result.filter((item) => filters.ram.includes(String(item.ram_gb)));
    }

    // Filter by price
    const from = parseFloat(filters.price.from);
    const to = parseFloat(filters.price.to);
    if (!isNaN(from)) {
      result = result.filter((item) => item.price >= from);
    }
    if (!isNaN(to)) {
      result = result.filter((item) => item.price <= to);
    }

    setFilteredData(result);
    setVisiblecount(5);
    setDisplayData(result.slice(0, 5));
  }, [filters, allData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading &&
        visiblecount < filteredData.length
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visiblecount, filteredData, loading]);

  const loadMore = () => {
    if (visiblecount >= filteredData.length || loading) return;
    setLoading(true);
    setTimeout(() => {
      const nextCount = visiblecount + 5;
      const nextItems = filteredData.slice(visiblecount, nextCount);
      setVisiblecount(nextCount);
      setDisplayData((prev) => [...prev, ...nextItems]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="electronics-page">
       
      <aside className="filters">
        <Filter filters={filters} setFilters={setFilters} />
      </aside>
      <main className="mobile-details-container">
        {displayData.map((item) => (
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
        {loading && <div className="loading">Loading more mobiles...</div>}
      </main>
    </div>
  );
};

export default Electronics;
