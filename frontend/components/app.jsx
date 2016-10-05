import React from 'react';
import { Link } from 'react-router';
import SplashContainer from './splash/splash_container';

const App = ({children}) => (
  <div>
    <header>
      <SplashContainer />
    </header>
    {children}
  </div>
);

export default App;
