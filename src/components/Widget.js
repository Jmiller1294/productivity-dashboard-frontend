import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #212121;
  flex-basis: 100%;
  height: ${ (props) => props.height};
  border-radius: 20px;
  padding: 10px;
`

const Widget = (props) => {
  return (
    <Container margin={props.margin} height={props.height}>
      {props.title}
    </Container>
  )
}
export default Widget;