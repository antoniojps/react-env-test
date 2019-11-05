import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PORTAL_IMAGES_ENDPOINT, PORTAL_ENDPOINT, PORTAL_API, REACT_APP_DEPLOY_ENV } from './constants'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Env: {REACT_APP_DEPLOY_ENV}</h1>
        <p>
          Portal Images endpoint: {PORTAL_IMAGES_ENDPOINT}
        </p>
        <p>
          Portal endpoint: {PORTAL_ENDPOINT}
        </p>
        <p>
          Portal api: {PORTAL_API}
        </p>
      </header>
    </div>
  );
}

export default App;
