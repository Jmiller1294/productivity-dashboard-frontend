import React from "react";
import { Col } from '../layout/Grid';
import styled from "styled-components";
import rainy from '../assets/rainy.svg';
import sunny from '../assets/sunny.svg';
import cloudy from '../assets/cloudy.svg';
import thunderStorm from '../assets/thunderstorm.svg';
import humidity from '../assets/humidity.svg';
import wind from '../assets/wind.svg';
import high from '../assets/high-temp.svg';

const Container = styled.div`
  backdrop-filter: blur();
  display: flex;
  flex-direction: column;
  background: #212121;
  align-items: center;
  flex-basis: 100%;
  height: ${ (props) => props.height};
  border-radius: 20px;
  padding: 20px;
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 140px;
  width: 100%;
`
const SubContainer2 = styled.div`
  border-top: 1px solid grey;
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
`
const WeatherIcon = styled.img`
  height: 90px;
  width: 170px;
`
const Icon = styled.img`
  height: 25px;
  width: 25px;
`
const WeatherType = styled.span`
  position: relative;
  left: 30px;
  letter-spacing: 1px;
  font-size: 20px;
  opacity: 0.7;
`
const WeatherTemp = styled.span`
  position: relative;
  right: 30px;
  top: 20px;
  font-size: 70px;
`
const Column = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
`
const Name = styled.span`
  opacity: 0.7;
`

const getWeatherIcon = (weatherType) => {
  let icon;
  switch(weatherType) {
    case 'Rain': 
      icon = rainy;
      break;
    case 'Sunny': 
      icon = sunny;
      break;
    case 'ThunderStorm': 
      icon = thunderStorm;
      break;
    case 'Clouds': 
      icon = cloudy;
      break;
    case 'Mist': 
      icon = rainy;
      break;
    default: 
      icon = "No Data Availabale";
  }
  return icon;
}

const convertKelvinToFahrenheit = (kelvin) => { 
  return Math.round((9/5) * (kelvin - 273) + 32);
}

//component
const WeatherWidget = (props) => {

  if(props.weatherInfo.weather) {
    return (
      <>
        <Container margin={props.margin} height={props.height}>
          {console.log(props)}
          <SubContainer>
            <WeatherIcon alt='weatherIcon' 
              src={getWeatherIcon(props.weatherInfo.weather[0].main)} 
            /> 
            <WeatherType>{props.weatherInfo.weather[0].main}</WeatherType>
            <WeatherTemp>{convertKelvinToFahrenheit(props.weatherInfo.main.temp)}</WeatherTemp>
          </SubContainer>
          <SubContainer2>
            <Column>
              <Icon src={high}/>
              <span>{Math.ceil(props.weatherInfo.wind.speed)} deg</span>
              <Name>High Temp</Name>
            </Column>
            <Column>
              <Icon src={wind}/>
              <span>{Math.ceil(props.weatherInfo.wind.speed)} mph</span>
              <Name>Wind</Name>
            </Column>
            <Column>
              <Icon src={humidity}/>
              <span>{props.weatherInfo.main.humidity}%</span>
              <Name>Humidity</Name>
            </Column>
          </SubContainer2>
        </Container> 
      </>
    )
  }
  else {
    return null
  }
}
export default WeatherWidget;