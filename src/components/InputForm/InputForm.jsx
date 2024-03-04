import React, { useState } from "react";
import apiFunctions from "../../api";
import {
  FormContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledLabel,
} from "./styles";

const InputForm = ({ onApiResult }) => {
  const [startX, setStartX] = useState("");
  const [startY, setStartY] = useState("");
  const [endX, setEndX] = useState("");
  const [endY, setEndY] = useState("");
  const [kml, setKml] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    // Validation: Check if all input fields are filled
    if (!startX || !startY || !endX || !endY) {
      setError("All fields are required");
      return;
    }

    // Validation: Check if input values are numbers
    if (isNaN(startX) || isNaN(startY) || isNaN(endX) || isNaN(endY)) {
      setError("Please enter valid numbers for coordinates");
      return;
    }

    try {
      console.log(kml);
      // If validation passes, make the API call
      const path = await apiFunctions.calculateShortestPath(
        { x: startX, y: startY },
        { x: endX, y: endY },
        kml
      );

      // Reset error state
      setError(null);

      // Handle the result as needed
      onApiResult(path);
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
            <StyledLabel htmlFor="startX">Start X:</StyledLabel>
            <StyledInput
              type="number"
              id="startX"
              name="startX"
              placeholder="e.g., x1"
              value={startX}
              onChange={(e) => setStartX(e.target.value)}
            />
          </div>
          <div>
            <StyledLabel htmlFor="startY">Start Y:</StyledLabel>
            <StyledInput
              type="number"
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
            <StyledLabel htmlFor="endX">End X:</StyledLabel>
            <StyledInput
              type="number"
              id="endX"
              name="endX"
              placeholder="e.g., x2"
              value={endX}
              onChange={(e) => setEndX(e.target.value)}
            />
          </div>
          <div>
            <StyledLabel htmlFor="endY">End Y:</StyledLabel>
            <StyledInput
              type="number"
              id="endY"
              name="endY"
              placeholder="e.g., y2"
              value={endY}
              onChange={(e) => setEndY(e.target.value)}
            />
          </div>
        </StyledInputContainer>

        <StyledLabel htmlFor="kml">Generate KML file:</StyledLabel>
        <StyledSelect
          id="kml"
          name="kml"
          value={kml}
          onChange={(e) => setKml(e.target.value === "true")}>
          <option value="true">True</option>
          <option value="false">False</option>
        </StyledSelect>


        {error && <p style={{ color: "#FF5722", marginTop: "5px" }}>{error}</p>}

        <StyledButton type="button" onClick={handleSubmit}>
          Submit
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default InputForm;
