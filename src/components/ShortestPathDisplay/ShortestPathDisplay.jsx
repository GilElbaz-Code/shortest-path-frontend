import React from "react";

const ShortestPathDisplay = ({ apiResponse, startX, startY, endX, endY }) => {
  return (
    <div>
      <p>API Response: {JSON.stringify(apiResponse)}</p>
      {/* Display other information as needed */}
      <p>Start X: {startX}</p>
      <p>Start Y: {startY}</p>
      <p>End X: {endX}</p>
      <p>End Y: {endY}</p>
      {/* Add more displays based on your needs */}
    </div>
  );
};

export default ShortestPathDisplay;
