import React from "react";

const Filter = ({ filters, setFilters }) => {
  const handleBrandChange = (e) => {
    setFilters({ ...filters, brand: e.target.value });
  };

  const handleRamChange = (e) => {
    const value = e.target.value;
    const updatedRam = filters.ram.includes(value)
      ? filters.ram.filter((r) => r !== value)
      : [...filters.ram, value];
    setFilters({ ...filters, ram: updatedRam });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, price: { ...filters.price, [name]: value } });
  };

  return (
    <div className="filters-panel">
      <div className="filter-section">
        <h4>Brand</h4>
        <input
          type="text"
          placeholder="Search brand"
          value={filters.brand}
          onChange={handleBrandChange}
        />
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        <input type="number" placeholder="From" name="from" onChange={handlePriceChange} />
        <input type="number" placeholder="To" name="to" onChange={handlePriceChange} />
      </div>

      <div className="filter-section">
        <h4>RAM</h4>
        {["4", "6", "8", "12"].map((ram) => (
          <label key={ram}>
            <input
              type="checkbox"
              value={ram}
              checked={filters.ram.includes(ram)}
              onChange={handleRamChange}
            />
            {ram} GB
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
