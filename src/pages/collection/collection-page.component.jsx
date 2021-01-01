import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionPreviewItem from '../../components/collection-preview-item/collection-preview-item.component';

import * as S from './collection-page.styles';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div>
      <S.Title>{title}</S.Title>
      <S.ItemsContainer>
        {
          items.map(item => <CollectionPreviewItem key={item.id} item={item} />)
        }
      </S.ItemsContainer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);