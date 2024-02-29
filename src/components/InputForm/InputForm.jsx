import React, { useState } from "react";
import apiFunctions from "../../api";
import {
  FormContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledSelect,
  StyledButton,
} from "./styles";
import ShortestPathDisplay from "../ShortestPathDisplay/ShortestPathDisplay";

const InputForm = () => {
  const [startX, setStartX] = useState("");
  const [startY, setStartY] = useState("");
  const [endX, setEndX] = useState("");
  const [endY, setEndY] = useState("");
  const [kml, setKml] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const result = await apiFunctions.calculateShortestPath(
        { x: startX, y: startY },
        { x: endX, y: endY },
        kml
      );

      // Handle the result as needed
      setApiResponse(result.path);
    } catch (error) {
      // Handle API call errors
      console.error("Error in API call:", error);
    }
  };

  return (
    <FormContainer>
      <StyledForm>
        <StyledInputContainer>
          <div>
            <label htmlFor="startX">Start X:</label>
            <StyledInput
              type="text"
              id="startX"
              name="startX"
              placeholder="e.g., x1"
              value={startX}
              onChange={(e) => setStartX(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="startY">Start Y:</label>
            <StyledInput
              type="text"
              id="startY"
              name="startY"
              placeholder="e.g., y1"
              value={startY}
              onChange={(e) => setStartY(e.target.value)}
            />
          </div>
        </StyledInputContainer>

        <StyledInputContainer>
          <div>
            <label htmlFor="endX">End X:</label>
            <StyledInput
              type="text"
              id="endX"
              name="endX"
              placeholder="e.g., x2"
              value={endX}
              onChange={(e) => setEndX(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="endY">End Y:</label>
            <StyledInput
              type="text"
              id="endY"
              name="endY"
              placeholder="e.g., y2"
              value={endY}
              onChange={(e) => setEndY(e.target.value)}
            />
          </div>
        </StyledInputContainer>

        <label htmlFor="kml">Generate KML file:</label>
        <StyledSelect
          id="kml"
          name="kml"
          value={kml}
          onChange={(e) => setKml(e.target.value)}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </StyledSelect>

        <StyledButton type="button" onClick={handleSubmit}>
          Submit
        </StyledButton>

        {apiResponse && (
          <ShortestPathDisplay
            apiResponse={apiResponse}
            startX={startX}
            startY={startY}
            endX={endX}
            endY={endY}
          />
        )}
      </StyledForm>
    </FormContainer>
  );
};

export default InputForm;
