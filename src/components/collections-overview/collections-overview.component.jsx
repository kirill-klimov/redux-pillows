import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => {
  return (
    <div> 
      {
        collections.map(collection => <CollectionPreview key={collection.id} {...collection} />)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  collections: state.shop.collections
})

export default connect(mapStateToProps)(CollectionsOverview);