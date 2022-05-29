import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: red;
  flex-basis: 100%;
  height: 250px;
  border-radius: 20px;
  padding: 10px;
  margin: 25px 25px 0 25px;
`

const Widget = () => {
  return (
    <Container>
      Widget
    </Container>
  )
}
export default Widget;