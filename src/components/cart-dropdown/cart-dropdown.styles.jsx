import styled from 'styled-components'

export const CartItemsContainer = styled.div`
  position: absolute;
  top: 180%;
  right: 80%;
  width: 260px;
  height: 330px;
  border: 1px solid grey;
  user-select: none;

  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  z-index: 2;
  background-color: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.08);
`;

export const ItemsContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;