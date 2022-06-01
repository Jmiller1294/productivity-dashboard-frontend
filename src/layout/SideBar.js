import React from "react";
import styled from "styled-components";
import homeIcon from '../assets/home.svg';
import weatherIcon from '../assets/weather.svg';
import chartIcon from '../assets/chart.svg';
import calenderIcon from '../assets/calender.svg';


const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #212121;
  color: #ffffff;
  height: 1000px;
  width: 6.2%;
  padding: 20px 0;
`
const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin: 20px 0;
`

const SideBar = () => {
  return (
    <Container>
      <Icon src={homeIcon}/>
      <Icon src={calenderIcon}/>
      <Icon src={weatherIcon}/>
      <Icon src={chartIcon}/>
    </Container>
  )
}
export default SideBar;