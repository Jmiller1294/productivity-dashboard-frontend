import React from "react";
import styled from "styled-components";
import Widget from "../components/Widget";
import NewsFeed from "../components/NewsFeed";
import { Grid, Row, Col } from "../layout/Grid";

const Home = () => {
  return (
    <>
      <Grid>
        <Row height={'auto'}>
          <Col size={3}>
            <Row height={'auto'} margin={'25px'}>
              <Col size={1}>
                <Widget title={'Tasks'} height={'200px'}/>
              </Col>
            </Row>
            <Row height={'auto'} margin={'25px'}>
              <Col size={1} margin={'0 10px 0 0'}>
                <Widget title={'Weather'} height={'150px'}/>
              </Col>
              <Col size={1} margin={'0 10px 0 0'}>
                <Widget title={'Calender'} height={'150px'}/>
              </Col>
              <Col size={1} margin={'0 10px 0 0'}>
                <Widget title={'Sports'} height={'150px'}/>
              </Col>
              <Col size={1}>
                <Widget title={'Random'} height={'150px'}/>
              </Col>
            </Row>
            <Row height={'auto'} margin={'25px'}>
              <Col size={1} margin={'0 12px 0 0'}>
                <Row height={'150px'} margin={'0 0 25px 0'}>
                  <Widget title={''} height={'150px'}/>
                </Row>
                <Row>
                  <Widget title={''} height={'150px'}/>
                </Row>
              </Col>
              <Col size={1} margin={'0 0 0 12px'}>
                <Widget title={'Stocks'} height={'325px'}/>
              </Col>
            </Row>
          </Col>
          <Col size={1}>
            <NewsFeed />
          </Col>
        </Row>
      </Grid>
    </>
  )
}
export default Home;