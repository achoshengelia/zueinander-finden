import React from "react";
import styled from "styled-components";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
// Intro
export default function Intro() {
  const { t, i18n } = useTranslation("common");

  return (
    <Container>
      <Center>
        <Text>
          {t("Intro.Text")}
          <Anchor>
            <Link href="/about">
              <a>{t("Intro.ReadMore")}</a>
            </Link>
          </Anchor>
        </Text>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Center = styled.div`
  max-width: 1124px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  font-size: 35px;
  line-height: 42px;
  text-align: center;
  /* letter-spacing: -0.05em; */
  color: rgba(0, 0, 0, 0.92);
  max-width: 800px;
  /* margin: 300px 0px; */
  /* @media screen and (max-width: 1121px) {
    font-size: 30px;
    width: 700px;
  } */
  @media screen and (max-width: 1024px) {
    font-size: 32px;
    max-width: 600px;
    /* margin: 180px 0px; */
    line-height: 32px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
    max-width: 340px;
    margin: 150px 0px;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
    max-width: 280px;
  }
  @media screen and (max-width: 280px) {
    font-size: 18px;
    max-width: 250px;
    margin: 80px 0px;
  }
`;

const Anchor = styled.a`
  color: #e8481d;
  &:hover {
    color: #f19177;
  }
  cursor: pointer;
`;
