import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Widget from "../components/Widget";
import StockWidget from "../components/StockWidget";
import WeatherWidget from "../components/WeatherWidget";
import NewsFeed from "../components/NewsFeed";
import { Grid, Row, Col } from "../layout/Grid";


const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=' 
  + process.env.REACT_APP_NEWS_API_KEY;
const stocksUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=' 
  + process.env.REACT_APP_ALPHAVANTAGE_API_KEY + '&datatype=json';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.8115&lon=-73.9464&exclude={part}&appid=' 
  + process.env.REACT_APP_WEATHER_API_KEY


const Home = () => {
  const [articles, setArticles] = useState([]);
  const [stockInfo, setStockInfo] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [sportsInfo, setSportsInfo] = useState([]);

  const getArticles = () => {
   fetch(newsUrl)
   .then(resp => resp.json())
   .then(data => setArticles(data.articles))
   .catch(error => console.log(error))
  }

  const getStockInfo = () => {
    fetch(stocksUrl)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  const getWeatherInfo = () => {
    fetch(weatherUrl)
    .then(resp => resp.json())
    .then(data => setWeatherInfo(data))
    .catch(error => console.log(error))
  }

  const getSportsInfo = () => {
    fetch()
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getArticles();
    getStockInfo();
    //getWeatherInfo();
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
                <WeatherWidget title={'Weather'} height={'220px'} weatherInfo={weatherInfo} />
              </Col>
              <Col size={1} margin={'0 20px 0 0'}>
                <Widget title={'Calender'} height={'220px'}/>
              </Col>
              <Col size={1}>
                <Widget title={'Sports'} height={'220px'}/>
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
                <StockWidget title={'Stocks'} height={'325px'} stockInfo={stockInfo}/>
              </Col>
            </Row>
          </Col>
          <Col size={1}>
            <NewsFeed articles={articles} />
          </Col>
        </Row>
      </Grid>
    </>
  )
}
export default Home;