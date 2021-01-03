import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
import './App.styles.css';

import { createStructuredSelector } from 'reselect';
import { selectIsLoaded } from './redux/shop/shop.selectors';

import Header from './components/header/header.component';
import SpinnerContainer from './components/spinner-container/spinner-container.component';
import ErrorBoundary from './components/error-boundary/error-boudary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout-page.component'))
const AboutPage = lazy(() => import('./pages/about/about-page.component'))


function App({ fetchCollections, isLoaded }) {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections])

  return (
    <div>
      <Header />
      {
        isLoaded ?
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<SpinnerContainer />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/about' component={AboutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        :
        <SpinnerContainer />
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
