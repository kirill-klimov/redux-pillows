import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { fetchCollectionsStartAsync } from './redux/shop/shop.actions'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import CheckoutPage from './pages/checkout/checkout-page.component';
import AboutPage from './pages/about/about-page.component';

import SpinnerContainer from './components/spinner-container/spinner-container.component';

function App({ fetchCollections, isLoaded }) {
  useEffect(() => {

    fetchCollections()

  }, [fetchCollections])

  return (
    <div>
      <Header />
      {
        isLoaded ?
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
        :
        <SpinnerContainer />
      }
    </div>
  );
}

const mapStateToProps = state => ({
  isLoaded: state.shop.isLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
