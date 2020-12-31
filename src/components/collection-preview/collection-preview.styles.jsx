import styled from 'styled-components';

export const PreviewItemsContainer = styled.div`
  display: flex;
  column-gap: 20px;

  @media screen and (max-width: 978px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  } 
`;

export const CollectionTitle = styled.h2`
  font-weight: 500;
  font-size: 1.7rem;
`;

export const CollectionPreviewContainer = styled.div`
  margin-top: 35px;
`;
