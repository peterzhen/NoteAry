import React from 'react';
import { Link } from 'react-router';
import SplashContainer from './splash/splash_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>NoteAry</h1></Link>
      <SplashContainer />
    </header>
    {children}
  </div>
);

export default App;
