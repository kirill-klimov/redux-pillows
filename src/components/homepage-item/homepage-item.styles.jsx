import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${ ({imageUrl}) => `url("${imageUrl}");` }
  transition: transform 3s, filter .3s;
  filter: grayscale(0.3);
`;

export const ItemContainerLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border: 1px solid black;
  height: 38vh;

  &:hover ${BackgroundContainer} {
    transform: scale(1.2);  
    filter: unset;
    transition: transform 5s ease-in, filter .3s;
  }
`;

export const TitleContainer = styled.div`
  padding: 20px;
  border: 1px solid grey;
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: absolute;
  
  span {
    &:first-of-type {
      font-weight: 500;
    }
    &:last-of-type {
      font-weight: 300;
      font-size: 14px;
    }
  }
`; 

