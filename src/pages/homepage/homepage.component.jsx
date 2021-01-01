import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import HomePageItem from '../../components/homepage-item/homepage-item.component'


import * as S from './homepage.styles'


const HomePage = ({ collections }) => {
  return (
    <S.HomepageContainer>
      {
        collections.map(collection => <HomePageItem key={collection.id} { ...collection } />)
      }
    </S.HomepageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(HomePage);
