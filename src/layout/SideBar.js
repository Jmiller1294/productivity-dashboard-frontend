import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: #212121;
  color: #FFFFFF;
  height: 1000px;
  width: 6.2%;
`

const SideBar = () => {
  return (
    <Container>
      SideBar
    </Container>
  )
}
export default SideBar;