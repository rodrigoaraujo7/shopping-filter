import React from 'react';
import { globalStyles } from './globalStyles';
import Products from './components/Products';

function App() {
  globalStyles()

  return (
    <Products />
  );
}

export default App;
