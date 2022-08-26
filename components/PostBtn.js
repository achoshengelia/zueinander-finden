import React from "react"
import styled from "styled-components"

export default function PostBtn({ value, onClick, background }) {
  return (
    <Button background={background} onClick={() => onClick(value)}>
      <Text>Posten</Text>
    </Button>
  )
}

const Button = styled.button`
  padding: 1em;
  width: 17em;
  border: none;
  background: ${({ background }) => (background ? background : "#e8481d")};
  box-shadow: 0px 1px 35px 3px rgba(0, 0, 0, 0.25);
  border-radius: 47px;
  cursor: pointer;
  &:hover {
    transform: scale(1.009);
    box-shadow: 0px 1px 35px 3px rgba(0, 0, 0, 0.35);
  }
  outline: none;
  &:active {
    transform: scale(0.98);
    box-shadow: 0px 1px 35px 3px rgba(0, 0, 0, 0.25);
  }
`

const Text = styled.span`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.92);
`
