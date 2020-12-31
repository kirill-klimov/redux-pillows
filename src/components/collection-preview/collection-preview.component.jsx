import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CollectionPreviewItem from '../collection-preview-item/collection-preview-item.component';

import * as S from './collection-preview.styles';

const CollectionPreview = ({ title, routeName, items, match }) => {
  return (
    <S.CollectionPreviewContainer>
      <Link to={`${match.path}/${routeName}`}>
        <S.CollectionTitle>{title}</S.CollectionTitle>
      </Link>
      <S.PreviewItemsContainer>
        {
          items
          .filter((item, idx) => idx < 4)
          .map(item => <CollectionPreviewItem key={item.id} item={item} />)
        }
      </S.PreviewItemsContainer>
    </S.CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);