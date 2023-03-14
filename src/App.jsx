import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import MyAppFooter from './components/Footer/Footer';
import MyAppNavbar from './components/Navbar/Navbar';
import React from 'react';
import Servicios from './components/Servicios/Servicios';

function App() {
  return (
    <>
{/*     <Provider> */}
      <BrowserRouter>
        <MyAppNavbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/servicios" element={<Servicios/>} />
        </Routes>
        <MyAppFooter/>
      </BrowserRouter>
{/*     </Provider> */}
    </>
  );
}

export default App;
