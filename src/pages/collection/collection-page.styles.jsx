import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  margin: 30px 0;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;

  @media screen and (max-width: 979px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 589px) {
    grid-template-columns: 1fr 1fr;
  }
`;
