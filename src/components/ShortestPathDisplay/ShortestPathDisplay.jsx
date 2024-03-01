import React from "react";

const ShortestPathDisplay = ({ apiResponse }) => {
  console.log(apiResponse);
  return (
    <div>
      <p>API Response: {JSON.stringify(apiResponse)}</p>
    </div>
  );
};

export default ShortestPathDisplay;
