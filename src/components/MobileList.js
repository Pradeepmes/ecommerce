import React, { useEffect, useState } from "react";

const MobileList = ({ mobiledata }) => {
  const [tableData, setTabledata] = useState(mobiledata);

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
    </div>
  );
};

export default MobileList;
