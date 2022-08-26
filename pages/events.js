import React from "react"
import styled from "styled-components"
import { EventItem, Map } from "../components"
import { getAllEvents } from "../api"
import { UrlEncoder } from "../helpers"
import useTranslation from "next-translate/useTranslation"
import { NextSeo } from "next-seo"

var formatISO = require("date-fns/formatISO")
var { format } = require("date-fns")
var subDays = require("date-fns/subDays")
var subWeeks = require("date-fns/subWeeks")

export default function Events({ futureEvents, pastEvents, latestEvent }) {
  const { t, lang } = useTranslation("common")

  return (
    <Container>
      <Center>
        <EventsContainer>
          {futureEvents && futureEvents.length > 0 && <Title>{t("Events.Overview")}</Title>}
          <EventsItems>
            {futureEvents &&
              futureEvents.map((item) => (
                <EventItem
                  key={item.id}
                  id={item.id}
                  city={item.city}
                  date={item.date}
                  address={item.address}
                  secondAddress={item.secondAddress}
                  finissage={item.finissage}
                  finissageText={item.finissageText}
                  description={item.description}
                />
              ))}
          </EventsItems>
        </EventsContainer>

        <EventsContainer>
          {pastEvents && pastEvents.length > 0 && <Title>{t("Events.PastEvents")}</Title>}
          <EventsItems>
            {pastEvents &&
              pastEvents.map((item) => (
                <EventItem
                  key={item.id}
                  id={item.id}
                  city={item.city}
                  date={item.date}
                  address={item.address}
                  secondAddress={item.secondAddress}
                  finissage={item.finissage}
                  finissageText={item.finissageText}
                  description={item.description}
                />
              ))}
          </EventsItems>
        </EventsContainer>
      </Center>
      <MapContainer>
        <Map />
      </MapContainer>
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

  let send = [getAllEvents(futureUrl), getAllEvents(pastUrl)]
  const [futureEvents, pastEvents] = await Promise.all(send)

  return {
    props: {
      futureEvents: futureEvents.data.sort((a, b) => new Date(a.date) - new Date(b.date)),
      pastEvents: pastEvents.data,
      latestEvent: futureEvents?.data[0] || null,
    },
  }
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Center = styled.div`
  padding: 70px 50px;
  max-width: 1124px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    padding: 70px 30px;
  }
  @media screen and (max-width: 280px) {
    padding: 70px 30px 30px 30px;
  }
`

const Title = styled.h1`
  margin-top: 50px;
  @media screen and (max-width: 280px) {
    font-size: 28px;
  }
`

const EventsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`

const EventsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`
const MapContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;
  margin-bottom: 200px;
  @media screen and (max-width: 280px) {
    margin-top: 30px;
    margin-bottom: 100px;
  }
`
