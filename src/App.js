import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PORTAL_IMAGES_ENDPOINT, PORTAL_ENDPOINT, PORTAL_API } from './constants'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
