import styled from 'styled-components';

export const PathContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // Ensures container takes up full viewport height
`;

export const ListContainer = styled.div`
  margin-top: 20px;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #f4f4f4; /* Light color for readability */
`;

export const DescriptionParagraph = styled.p`
  font-size: 1.1em;
  margin-bottom: 15px;
  color: #f4f4f4; /* Light color for readability */
`;