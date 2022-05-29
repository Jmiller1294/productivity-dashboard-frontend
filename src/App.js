import React  from "react";
import { Routes, Route } from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components';
import Home from '../src/pages/Home';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } 
`
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
