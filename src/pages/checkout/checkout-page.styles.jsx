import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const TableHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 30px 0 20px;
`;

export const TableHeader = styled.div`
  width: 23%;

  &:last-of-type {
    width: 8%;
    display: block;
    text-align: right;
  }

  span {
    font-size: 15px;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 650px) {
    width: 20%;
    text-align: center;
    font-weight: 300;

    &:first-of-type {
      text-align: left;
    }

    &:last-of-type {
      width: 20%;
      text-align: right;
    }
  }
`;

export const TotalContainer = styled.div`
  margin: 40px 0;
  text-align: right;

  span {
    letter-spacing: 1px;
    font-size: 25px;
    font-weight: 300;
  }
`;