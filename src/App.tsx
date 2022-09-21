import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { ProductPages } from './pages/ProductPages';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';

function App() {
  return(
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<ProductPages />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
    </Routes>
    </>

  )
  
}

export default App;
