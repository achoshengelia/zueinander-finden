import React from "react"
import styled from "styled-components"
import SimpleSlider from "../../components/Slider"

export default function Slider() {
  return (
    <Container>
      <SimpleSlider />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: grey;
`
