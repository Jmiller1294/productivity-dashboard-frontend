import React from "react";
import styled from "styled-components";
import rainy from '../assets/rainy.svg';
import sunny from '../assets/sunny.svg';
import cloudy from '../assets/cloudy.svg';
import thunderStorm from '../assets/thunderstorm.svg';

const Container = styled.div`
  display: flex;
  background: #212121;
  flex-basis: 100%;
  height: ${ (props) => props.height};
  border-radius: 20px;
  padding: 10px;
`
const WeatherIcon = styled.img`
  height: 90px;
  width: 170px;
`

const WeatherWidget = (props) => {
  
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
      case 'Cloudy': 
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

  return (
    <Container margin={props.margin} height={props.height}>
      {props.weatherInfo.weather ? 
        <WeatherIcon alt='weatherIcon' 
          src={getWeatherIcon(props.weatherInfo.weather[0].main)} 
        /> 
      : null}
    </Container>
  )
}
export default WeatherWidget;