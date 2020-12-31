import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = state => ({
  collections: state.shop.collections
})

export default connect(mapStateToProps)(HomePage);
