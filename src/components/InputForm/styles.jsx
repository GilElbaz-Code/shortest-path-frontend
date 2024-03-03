import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 250px;
  padding: 8px;
  box-sizing: border-box;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  background-color: #4A148C; /* Matching color from the gradient */
  color: #fff;
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #880E4F; /* Darker shade on hover */
  }
`;

export const StyledLabel = styled.label`
  color: #000;
  font-size: 1.2rem;
  margin: 3px;
  font-family: 'Roboto', sans-serif;
`;