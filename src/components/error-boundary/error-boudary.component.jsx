import React from 'react';

import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  img {
    width: 200px;
    height: auto;
    margin-bottom: 30px;
  }
  
  span {
    font-weight: 400;
    font-size: 17px;
  }
`;

const imageUrl = 'https://i.ibb.co/JcHGxYq/page-broken.png';

const ErrorComponent = () => {
  return (
    <ErrorContainer>
      <img src={imageUrl} alt='page is broken'/>
      <span>This page is broken</span>
      <span>Please try to refresh the page</span>
    </ErrorContainer>
  );
}

class ErrorBoundary extends React.Component {

  constructor() {
    super();

    const image = new Image();
    image.src = imageUrl;

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // ...
    return { hasErrored: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <ErrorComponent />;
    } else {
      return this.props.children;
    }
  }

}

export default ErrorBoundary;