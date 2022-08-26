import React from "react";
import styled from "styled-components";
import { DownArrow } from "../assets/icons/Arrows";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t, i18n } = useTranslation("common");

  return (
    <Container>
      <Center>
        <H1>{t("About.Header-1")}</H1>
        {/* <H2>{t("About.Header-2")}</H2> */}
        <Box>
          <P>{t("About.Paragraph-1")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-2")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-3")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-4")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-5")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-6")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-7")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-8")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-9")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-10")}</P>
        </Box>
        <H2>{t("About.Header-3")}</H2>
        <Box>
          <P>{t("About.Paragraph-11")}</P>
        </Box>
        <Box>
          <P>{t("About.Paragraph-12")}</P>
        </Box>
        <H2>
          <Anchor href="https://www.ariadne.bz.it/" target="_blank">
            Verband Ariadne
            <StyledDownArrow />
          </Anchor>
        </H2>
        <Box>
          <P>{t("About.Verband")}</P>
        </Box>
        <H2>
          <Anchor
            href="https://www.instagram.com/ohnoitzsophie/"
            target="_blank"
          >
            <span>Sophie Lazari</span>
            <StyledDownArrow />
          </Anchor>
        </H2>
        <Box>
          <P>{t("About.Sophie")}</P>
        </Box>
        <H2>
          <Anchor href="https://annikaterwey.com/" target="_blank">
            Annika Terwey
            <StyledDownArrow />
          </Anchor>
        </H2>
        <Box>
          <P>{t("About.Annika")}</P>
        </Box>
        <H2>{t("About.Header-4")}</H2>
      </Center>
      <StyledImage src="/About_Image.jpeg" />
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  padding: 70px 50px;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 120px 20px;
  text-align: left;
  @media screen and (max-width: 850px) {
    padding: 70px 30px;
  }
  @media screen and (max-width: 800px) {
    margin: 0px 20px;
    margin-top: 100px;
  }
  @media screen and (max-width: 280px) {
    padding: 70px 30px 30px 30px;
  }
`;

const H1 = styled.h1`
  font-weight: 600;
  font-size: 45px;
  line-height: 55px;
  /* letter-spacing: -0.05em; */
  color: rgba(0, 0, 0, 0.92);
  /* color: #e8481d; */
  /* text-transform: uppercase; */
  align-self: flex-start;
  margin-bottom: 50px;
  @media screen and (max-width: 850px) {
    font-size: 32px;
    line-height: normal;
    margin: 15px 0;
  }
`;

const H2 = styled.h2`
  font-weight: 500;
  font-size: 25px;
  /* letter-spacing: -0.05em; */
  color: rgba(0, 0, 0, 0.92);
  /* text-transform: capitalize; */
  align-self: flex-start;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-weight: 300;
  font-size: 23px;
  color: rgba(0, 0, 0, 0.92);
  /* letter-spacing: -0.05em; */
  @media screen and (max-width: 850px) {
    font-size: 17px;
    margin: 0;
  }
`;
const Box = styled.div`
  margin: 15px 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 200px;
  @media screen and (max-width: 768px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 100px;
    margin-top: 50px;
  }
  @media screen and (max-width: 350px) {
    margin-bottom: 100px;
    margin-top: 50px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #e7481d;
  display: flex;
  align-items: flex-end;
  flex-basis: 100%;
  &:hover {
    transform: scale(1.05);
  }
  /* &:visited {
    color: #551a8b;
  } */
`;

const StyledDownArrow = styled(DownArrow)`
  width: 25px;
  transform: rotate(230deg);
  margin-left: 6px;
  margin-bottom: 1.55px;
  cursor: pointer;
  fill: #e7481d;

  &:hover {
    fill: #e7481d;
  }
`;
