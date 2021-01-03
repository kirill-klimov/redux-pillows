import styled from 'styled-components';

export const Container = styled.div`
  color: #222;
  width: 100%;
  max-width: 650px;
  margin: 10vh auto 0;

  b {
    font-weight: 500;
  }

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Link = styled.a`
  color: dodgerblue;

  &:hover {
    text-decoration: underline;
  }
`;