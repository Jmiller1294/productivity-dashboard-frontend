import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeIcon from '../assets/home.svg';
import weatherIcon from '../assets/weather.svg';
import chartIcon from '../assets/chart.svg';
import calenderIcon from '../assets/calender.svg';
import listIcon from '../assets/list.svg';
import settingsIcon from '../assets/settings.svg';


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
  height: 35px;
  width: 35px;
  margin: 20px 0;

  &:hover {
    fill: white;
  }
`
const SettingsIcon = styled.img`
  height: 35px;
  width: 35px;
  margin: 310px 0;
`


const SideBar = () => {
  return (
    <Container>
      <a href='/'><Icon src={homeIcon}/></a>
      <a href='/calender'><Icon src={calenderIcon}/></a>
      <a href='/weather'><Icon src={weatherIcon}/></a>
      <a href='/stocks'><Icon src={chartIcon}/></a>
      <a href='/list'><Icon src={listIcon}/></a>
      <a href='/settings'><SettingsIcon src={settingsIcon}/></a>
    </Container>
  )
}
export default SideBar;