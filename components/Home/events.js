import React from "react";
import styled from "styled-components";
import EventItem from "../../components/EventItem";
import useTranslation from "next-translate/useTranslation";

export default function ({ futureEvents, pastEvents }) {
  const { t, lang } = useTranslation("common");

  return (
    <Container>
      <Center>
        <EventsContainer>
          {futureEvents && futureEvents.length > 0 && (
            <H1>{t("Events.Overview")}</H1>
          )}
        </EventsContainer>
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
                finissageText={item.finissageText}
                description={item.description}
              />
            ))}
        </EventsItems>
        <EventsContainer>
          <EventsItems>
            {pastEvents && pastEvents.length > 0 && (
              <H1>{t("Events.PastEvents")}</H1>
            )}
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
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  min-height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  /* padding: 50px 0; */
  @media screen and (max-width: 800px) {
    min-height: auto;
    padding: 0;
  }
`;

const Center = styled.div`
  max-width: 1124px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 45px;
  line-height: 42px;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: default;
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
  @media screen and (max-width: 350px) {
    font-size: 32px;
    margin-left: 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 29px;
    margin-left: 0;
  }
`;

const EventsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const EventsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.h1`
  margin-top: 50px;
`;
