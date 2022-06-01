import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Widget from "../components/Widget";
import StockWidget from "../components/StockWidget";
import NewsFeed from "../components/NewsFeed";
import { Grid, Row, Col } from "../layout/Grid";

const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=' 
  + process.env.REACT_APP_NEWS_API_KEY;
const stocksUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' 
  + process.env.REACT_APP_ALPHAVANTAGE_API_KEY + '&datatype=json';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [stockInfo, setStockInfo] = useState([]);

  const getArticles = () => {
   fetch(newsUrl)
   .then(resp => resp.json())
   .then(data => setArticles(data.articles))
   .catch(error => console.log(error))
  }

  const getStockInfo = () => {
    fetch(stocksUrl)
    .then(resp => resp.json())
    .then(data => setStockInfo(data.articles))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getArticles();
    getStockInfo();
  }, [])


  return (
    <>
      <Grid>
        <Row height={'auto'}>
          <Col size={3}>
            <Row height={'auto'} margin={'25px'}>
              <Col size={1}>
                <Widget title={'Tasks'} height={'230px'}/>
              </Col>
            </Row>
            <Row height={'auto'} margin={'25px'}>
              <Col size={1} margin={'0 20px 0 0'}>
                <Widget title={'Weather'} height={'160px'}/>
              </Col>
              <Col size={1} margin={'0 20px 0 0'}>
                <Widget title={'Calender'} height={'160px'}/>
              </Col>
              <Col size={1}>
                <Widget title={'Sports'} height={'160px'}/>
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
                <StockWidget title={'Stocks'} height={'325px'}/>
              </Col>
            </Row>
          </Col>
          <Col size={1}>
            <NewsFeed articles={articles}/>
          </Col>
        </Row>
      </Grid>
    </>
  )
}
export default Home;