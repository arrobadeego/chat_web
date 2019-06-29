import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './styles/colors.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
