import React from 'react';
import { Routes } from './Routes';

import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/shared/Header';

interface AppProps {}

function App({}: AppProps) {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
