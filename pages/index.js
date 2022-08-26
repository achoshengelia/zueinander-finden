import React, { useRef } from "react"
import styled from "styled-components"
import { Comments, Slider, Hero, Events, Intro } from "../components"
import dynamic from "next/dynamic"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"
var subWeeks = require("date-fns/subWeeks")
var subDays = require("date-fns/subDays")

const Map = dynamic(() => import("../components/Home/map"), {
  loading: () => "Loading...",
  ssr: false,
})

import { getAllEvents, getSlider, getSliderTwo } from "../api"
import { UrlEncoder } from "../helpers"
var formatISO = require("date-fns/formatISO")

export default function Home({ futureEvents, pastEvents, slider, sliderTwo }) {
  const scrollTo = useRef(null)

  function handleScroll() {
    scrollTo.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Container>
      <Hero handleScroll={handleScroll} />
      <div ref={scrollTo}>
        <Intro />
      </div>
      <Wrapper>
        <Slider sliderData={slider} />
      </Wrapper>
      <Wrapper>
        <Events futureEvents={futureEvents} pastEvents={pastEvents} />
      </Wrapper>
      <Wrapper>
        <Map />
      </Wrapper>
      <Wrapper>
        <Slider sliderData={sliderTwo} />
      </Wrapper>
      <Wrapper>
        <Comments hasLink={true} />
      </Wrapper>
    </Container>
  )
}

export async function getServerSideProps({ locale }) {
  const today = subWeeks(new Date(), 2)
  const yesterday = subDays(today, 1)

  let futureUrl = UrlEncoder.encode({
    sort: { date: "DESC" },
    filter: { futureEvent: formatISO(today, { representation: "date" }) },
    language: locale,
  })

  let pastUrl = UrlEncoder.encode({
    sort: { date: "DESC" },
    filter: { pastEvent: formatISO(yesterday, { representation: "date" }) },
    language: locale,
  })

  let send = [getAllEvents(futureUrl), getAllEvents(pastUrl), getSlider(), getSliderTwo()]

  const [futureEvents, pastEvents, slider, sliderTwo] = await Promise.all(send)

  return {
    props: {
      futureEvents: futureEvents.data.sort((a, b) => new Date(a.date) - new Date(b.date)),
      pastEvents: pastEvents.data.sort((a, b) => new Date(a.date) - new Date(b.date)),
      slider: slider.data,
      sliderTwo: sliderTwo.data,
    },
  }
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  margin: 100px 0px;
  &:last-child {
    margin-bottom: 170px;
  }
  &:nth-of-type(5) {
    margin-bottom: 200px;
  }
  @media screen and (max-width: 1024px) {
    margin: 80px 0px;
    &:nth-of-type(5) {
      margin-bottom: 150px;
    }
    &:last-child {
      margin-bottom: 180px;
    }
  }
  @media screen and (max-width: 414px) {
    margin: 50px 0px;
    &:nth-of-type(5) {
      margin-bottom: 140px;
    }
    &:last-child {
      margin-bottom: 120px;
    }
  }
`
