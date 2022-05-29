import React from "react";
import styled from "styled-components";
import Widget from "../components/Widget";
import { Grid, Row, Col } from "../layout/Grid";

const Home = () => {
  return (
    <>
      <Grid>
        <Row height={'auto'}>
          <Col size={1}>
            <Widget />
          </Col>
        </Row>
        <Row height={'auto'}>
          <Col size={1}>
            <Widget />
          </Col>
          <Col size={1}>
            <Widget />
          </Col>
        </Row>
        <Row height={'auto'}>
          <Col size={1}>
            <Widget />
          </Col>
        </Row>
      </Grid>
    </>
  )
}
export default Home;