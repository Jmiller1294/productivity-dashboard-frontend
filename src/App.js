import React  from "react";
import { Routes, Route } from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components';
import SideBar from '../src/layout/SideBar';
import Home from '../src/pages/Home';
import { Grid, Col, Row } from '../src/layout/Grid';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: #121212;
    color: #ffffff;
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } 
`
const App = () => {
  return (
    <>
      <Grid>
        <Row>
          <Col size={1}>
            <SideBar />
          </Col>
          <Col size={15}>
            <Routes>
              <Route exact path='/' element={<Home />}/>
            </Routes>
          </Col>
        </Row>
      </Grid>
      <GlobalStyle />
    </>
  );
}

export default App;
