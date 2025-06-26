import React, { useEffect } from 'react';

const MobileList = () => {
  useEffect(() => {
    //console.log("Received mobile data", mobiledata);
  });

  return (
    <div>
      <h2>Mobile List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Mobile</th>
            <th>Price</th>
            <th>Rating</th>
            <th>RAM</th>
            <th>Storage</th>
            <th>Screen</th>
            <th>SIM</th>
            <th>OS</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
};

export default MobileList;
