import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  column-gap: 15px;
`;

export const ItemField = styled.div`
  width: 23%;
  display: flex;
  align-items: center;

  &:last-of-type {
    width: 8%;
    justify-content: flex-end;
    
    span {
      cursor: pointer;
      font-size: 20px;
    }
  }

  &:nth-of-type(2) {
    padding: 15px 0;
  }

  @media screen and (max-width: 650px) {
    width: 20%;
    justify-content: center;
    font-weight: 300;

    &:nth-of-type(2) {
      justify-content: flex-start;
    }

    &:last-of-type {
      width: 20%;
    }
  }
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(" ${ ({imageUrl}) => imageUrl } ");
  background-position: center;
  background-size: cover;
  min-height: 25vh;

  @media screen and (max-width: 650px) {
    min-height: 10vh;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  column-gap: 7px;
  font-size: 18px;
  user-select: none;

  &:first-child {
    cursor: pointer;
  }
`;