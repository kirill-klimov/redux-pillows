import styled from 'styled-components';

import Button from '../button/button.component';

export const ItemButton = styled(Button)`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  opacity: 0;
  transition: opacity .05s;

  @media screen and (max-width: 978px) {
    opacity: 1;
  } 
`;

export const PreviewItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  row-gap: 5px;
  flex: 1 1 1px;

  &:hover ${ItemButton} {
    opacity: 1;
  }
`;

export const ItemImage = styled.div`
  height: 240px;
  background-image: url("${ ({imageUrl}) => imageUrl }");
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 978px) {
    background-position: top;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
`;
