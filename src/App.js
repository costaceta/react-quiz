import React from 'react';

import GlobalStyle from './assets/styles/GlobalStyles';

import Header from './components/header/Header';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <>
        <Header />
        <Quiz />
        <GlobalStyle />
    </>
  );
}

export default App;
