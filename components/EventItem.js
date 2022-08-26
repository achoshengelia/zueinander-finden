import React, { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import Slider from "./Slider"
import PlusIcon from "../assets/icons/PlusIcon"
import { getSliderItemsByEventId } from "../api"
var { format } = require("date-fns")
var formatISO = require("date-fns/formatISO")
import moment from "moment"

export default function EventItem({ id, city, date, address, secondAddress, finissageText, description }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sliderData, setSliderData] = useState([])

  function lmao(e) {
    return e.stopPropagation()
  }

  function handleWindowWidth() {
    if (typeof window !== "undefined") {
      return window.innerWidth > 600
    }
    return false
  }

  useEffect(() => {
    async function go() {
      const { data } = await getSliderItemsByEventId(id)
      setSliderData(data)
    }
    if (window) {
      go()
    }
  }, [])

  return (
    <Container>
      <Main onClick={() => setIsOpen(!isOpen)}>
        <City>{city}</City>
        <RightSide>
          <DateBox>{moment.utc(date).format("DD-MM-YYYY")}</DateBox>
          <IconWrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <PlusIcon width={20} height={20} />
          </IconWrapper>
        </RightSide>
      </Main>

      <Extension isOpen={isOpen}>
        <ExtensionInside>
          <UpperWrapper>
            <FirstLine>
              <P>{finissageText}</P>
              <Description>{description}</Description>
            </FirstLine>
            <SecondLine>
              <Address>{address}</Address>
              <Address>{secondAddress}</Address>
            </SecondLine>
          </UpperWrapper>
          {sliderData.length > 0 && <SliderWrapper>{sliderData.length > 0 && <Slider sliderData={sliderData} isResponsive={handleWindowWidth()} onClick={lmao} />}</SliderWrapper>}
        </ExtensionInside>
      </Extension>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  background-color: #f9f8f8;
  border: 2px solid #000;
  border-radius: 50px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  &:hover {
    transform: scale(1.009);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.45);
    cursor: pointer;
  }
`

const Main = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  @media screen and (max-width: 600px) {
    padding: 0 25px;
    height: 60px;
  }
`

const City = styled.h2`
  font-size: 38px;
  font-weight: 400;
  /* letter-spacing: -0.05em; */
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const DateBox = styled.div`
  font-size: 25px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
  @media screen and (max-width: 280px) {
    font-size: 11px;
  }
`

const Extension = styled.div`
  /* width: 100%; */
  max-height: ${(props) => (props.isOpen ? "1200px" : "0px")};
  overflow: hidden;
  transition: max-height 1s;
  margin: 0px 50px;
  /* padding-bottom: 10px; */
  @media screen and (max-width: 600px) {
    margin: 0 27px;
  }
`

const ExtensionInside = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: column;
`

const H3 = styled.h3`
  font-size: 25px;
  font-weight: 300;
`

const IconWrapper = styled.span`
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : null)};
  transition: transform 0.5s;
  margin-left: 15px;
`

const UpperWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  margin-bottom: 10px;
  @media screen and (max-width: 985px) {
    flex-direction: column;
  }
`

const FirstLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  gap: 10px;
`

const P = styled.p`
  max-width: 500px;
  font-size: 22px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 325px) {
    font-size: 15px;
  }
`

const Address = styled.p`
  width: 200px;
  /* height: 50%; */
  text-align: right;
  font-size: 22px;
  font-style: italic;
  @media screen and (max-width: 985px) {
    width: 100%;
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 325px) {
    font-size: 15px;
  }
`

const SecondLine = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: flex-start;
  align-items: flex-end;
  p:first-of-type {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 985px) {
    margin-top: 10px;
    p:not(:last-child) {
      margin-bottom: 10px;
      margin-top: 15px;
    }
  }
`

const Description = styled.p`
  max-width: 500px;
  font-size: 22px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 325px) {
    font-size: 15px;
  }
`

const SliderWrapper = styled.div`
  margin-top: 10px;
`
