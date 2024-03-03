import { useState, useEffect } from 'react';
import { ListContainer, DescriptionParagraph, ListItem } from './styles';

const ShortestPathDisplay = ({ apiResponse }) => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    if (apiResponse && apiResponse.path) {
      setPath(apiResponse.path);
    }
  }, [apiResponse]);

  return (
    <ListContainer>
      <DescriptionParagraph>
        The top node represents the starting point, and the bottom node represents the ending point.
      </DescriptionParagraph>
      {path.length ? (
        <ul>
          {path.map((node, index) => (
            <ListItem key={index}>({node[0]}, {node[1]})</ListItem>
          ))}
        </ul>
      ) : (
        <p>No shortest path found or data not yet received.</p>
      )}
    </ListContainer>
  );
};

export default ShortestPathDisplay;
