import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${ ({reversed}) => reversed ? 'white;' : 'black;'  };
  color: ${ ({reversed}) => reversed ? 'black;' : 'white;'  };
  border: 1px solid black;
  padding: 14px;
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    background-color: ${ ({reversed}) => reversed ? 'black;' : 'white;'  };
    color: ${ ({reversed}) => reversed ? 'white;' : 'black;'  };
  }
`;