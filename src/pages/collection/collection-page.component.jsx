import React from 'react';
import { connect } from 'react-redux';

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
  collection: state.shop.collections.find(collection => collection.routeName === ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(CollectionPage);