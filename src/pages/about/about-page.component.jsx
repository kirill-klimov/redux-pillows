import React from 'react';

import * as S from './about-page.styles';

const AboutPage = () => {
  return (
    <S.Container>
      <h1>Redux-pillows</h1>
      <p>Redux-Pillows is simple e-commerce <b>React</b> app made by <S.Link target="_blank" href='https://github.com/kuhkowaba'>@kuhkowaba</S.Link></p>
      <p>The app uses <b>Redux</b> for global state management. Side effects (Firestore data fetching) were implemented using <b>redux-saga</b>.</p> 
      <p><S.Link href='#'>Github repository</S.Link></p>
    </S.Container>
  );
}

export default AboutPage;