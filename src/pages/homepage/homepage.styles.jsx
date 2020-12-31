import styled from 'styled-components'

export const HomepageContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`; 