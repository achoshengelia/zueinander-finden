import React from "react"
import styled from "styled-components"
import MainLoaderIcon from "../assets/icons/MainLoaderIcon"

export default function MainLoader({ loading, referance, menuItemRefs }) {
  return (
    <Container loading={loading}>
      <Wrapper ref={referance}>
        <MainLoaderIcon width={250} height={250} />
      </Wrapper>
      <Text ref={menuItemRefs}>Zueinander (finden) - Trovarsi</Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #23242a;
  z-index: 9999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${({ loading }) => (loading ? "1" : "0")};
  transition: 0.4s;
`

const Wrapper = styled.div``

const Text = styled.div`
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  letter-spacing: 5px;
  text-align: center;
  margin: 5px 0 0 11px;
  font-size: 14px;
`
