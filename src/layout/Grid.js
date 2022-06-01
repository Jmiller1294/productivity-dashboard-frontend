import styled from "styled-components";

export const Grid = styled.div`
  margin: ${ (props) => props.margin};
`

export const Row = styled.div`
  display: flex;
  justify-content: ${ (props) => props.justify};
  margin: ${ (props) => props.margin};
  min-height: ${ (props) => props.minHeight};
  height: ${ (props) => props.height};
  background: ${ (props) => props.background};
  padding: ${ (props) => props.padding};
`

export const Col = styled.div`
  flex: ${ (props) => props.size};
  margin: ${ (props) => props.margin};
`