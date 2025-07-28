// MobileContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);

  const refreshData = async () => {
    try {
      const res = await fetch('http://localhost:5000/mobiles');
      const data = await res.json();
      setAllData(data);
    } catch (error) {
      console.error("Failed to fetch mobiles:", error);
    }
  };

  useEffect(() => {
    refreshData(); // fetch on initial load
  }, []);

  return (
    <MobileContext.Provider value={{ allData, setAllData, refreshData }}>
      {children}
    </MobileContext.Provider>
  );
};
