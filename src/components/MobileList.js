import React, { useEffect, useState } from "react";
import Modal from './Modal'

const MobileList = ({ mobiledata }) => {
  const [tableData, setTabledata] = useState(mobiledata);
  const [editFormdata,seteditformdata] = useState({})
  const [editIndex, setEditIndex] = useState(null);

   const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTabledata(mobiledata); // sync prop with state when component mounts
  }, [mobiledata]);



  const deleteItem = async (index) => {
    const itemToDelete = tableData[index];

    try {
      const response = await fetch(
        `http://localhost:5000/mobiles/${itemToDelete.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const newTableData = [...tableData];
        newTableData.splice(index, 1);
        setTabledata(newTableData);
        console.log(`Deleted item with id: ${itemToDelete.id}`);
      } else {
        console.error("Failed to delete from the server");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const editItem = async(item)=>{
    console.log(item)
    seteditformdata({ ...item })
    setModalOpen(true);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    seteditformdata((prev) => ({ ...prev, [name]: value }));
  };

   const handleSave = async  (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/mobiles/${editFormdata.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormdata),
      });

      if (response.ok) {
        const newData = [...tableData];
        newData[editIndex] = editFormdata;
        setTabledata(newData);
        setEditIndex(null);
        console.log(`Updated item with id: ${editFormdata.id}`);
      } else {
        console.error("Failed to update on the server");
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div>
      <h2>Mobile List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Mobile</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Rating</th>
            <th>RAM</th>
            <th>Storage</th>
            <th>Screen</th>
            <th>SIM</th>
            <th>OS</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, key) => (
              <tr key={item.id}>
                <td>{item.mobile}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>{item.ram_gb}</td>
                <td>{item.storage_gb}</td>
                <td>{item.screen_inch}</td>
                <td>{item.sim_type}</td>
                <td>{item.operating_system}</td>
               
                
                <td>
                   <button onClick={() => editItem(item)}>edit</button>
                  <button onClick={() => deleteItem(key)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Sample Modal"
      >
        {editFormdata && (
         <form onSubmit={handleSave}>
        <div className="form-row">
          <div className="form-group">
            <label>Mobile</label>
            <input type="text" required name="mobile" value={editFormdata.mobile} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <select name="brand" value={editFormdata.brand} onChange={handleChange}>
              <option value="">Select brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Xiaomi">Xiaomi</option>
            </select>
          </div>
       

        
          <div className="form-group">
            <label>Price (₹)</label>
            <input type="number" name="price" value={editFormdata.price} onChange={handleChange} />
          </div>
          
        </div>

        <div className="form-row">
            <div className="form-group">
            <label>Rating</label>
            <input type="number" step="0.1" name="rating" value={editFormdata.rating} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>RAM (GB)</label>
            <input type="number" name="ram_gb" value={editFormdata.ram_gb} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Storage (GB)</label>
            <input type="number" name="storage_gb" value={editFormdata.storage_gb} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Screen Size (Inch)</label>
            <input type="number" step="0.1" name="screen_inch" value={editFormdata.screen_inch} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>SIM Type</label>
            <select name="sim_type" value={editFormdata.sim_type} onChange={handleChange}>
              <option value="">Select SIM Type</option>
              <option value="Single SIM">Single SIM</option>
              <option value="Dual SIM">Dual SIM</option>
            </select>
          </div>
          <div className="form-group">
            <label>Network</label>
            <select name="network_generation" value={editFormdata.network_generation} onChange={handleChange}>
              <option value="">Select Network</option>
              <option value="4G">4G</option>
              <option value="5G">5G</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          
          <div className="form-group">
            <label>Operating System</label>
            <select name="operating_system" value={editFormdata.operating_system} onChange={handleChange}>
              <option value="">Select OS</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
            </select>
          </div>
       
          <div className="form-group">
            <label>Discount (%)</label>
            <input type="number" name="discount_percent" value={editFormdata.discount_percent} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" name="image" value={editFormdata.image} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
      )}
        <button
          onClick={() => setModalOpen(false)}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default MobileList;
