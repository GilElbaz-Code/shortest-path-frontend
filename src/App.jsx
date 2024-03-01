import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import ShortestPathDisplay from "./components/ShortestPathDisplay/ShortestPathDisplay";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const handleApiResult = (result) => {
    setApiResponse(result);
  };
  return (
    <div>
      <InputForm onApiResult={handleApiResult}></InputForm>
      <ShortestPathDisplay apiResponse={apiResponse}></ShortestPathDisplay>
    </div>
  );
};

export default App;
