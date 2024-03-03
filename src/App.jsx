import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import ShortestPathDisplay from "./components/ShortestPathDisplay/ShortestPathDisplay";
import { StyledDiv, StyledTitle } from "./appStyles";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const handleApiResult = (result) => {
    setApiResponse(result);
  };

  return (
    <StyledDiv>
      <StyledTitle>Shortest Path Calculator</StyledTitle>
      <InputForm onApiResult={handleApiResult} />
      <ShortestPathDisplay apiResponse={apiResponse} />
    </StyledDiv>
  );
};

export default App;
