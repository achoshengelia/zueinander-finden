import React from "react";
import styled from "styled-components";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import { DownArrow } from "../assets/icons/Arrows";
import useTranslation from "next-translate/useTranslation";

export default function Impressum() {
  const { t, i18n } = useTranslation("common");

  return (
    <Container>
      {/* <Navbar /> */}
      <Center>
        <H1>{t("Impressum.Header-1")}</H1>
        <Box>
          <H2>{t("Impressum.Header-2")}</H2>
          <P>
            {t("Impressum.Paragraph-1-1")}
            <br />
            {t("Impressum.Paragraph-1-2")}
            <br />
            {t("Impressum.Paragraph-1-3")}
            <br />
            {t("Impressum.Paragraph-1-4")}
          </P>
        </Box>
        <P>{t("Impressum.Paragraph-2")}</P>
        <Box>
          <P>{t("Impressum.Tel")}</P>
          <P>{t("Impressum.Fax")}</P>
          <P>{t("Impressum.Mail")}</P>
          <P>{t("Impressum.Internet")}</P>
        </Box>
        <Box>
          <Box>
            <P>
              <Bold>{t("Impressum.TranslationBold")}</Bold>
              {t("Impressum.Translation")}
            </P>
          </Box>
          {/* <Box>
            <P>
              <Bold>Italianische Übersetzung:</Bold>
            </P>
          </Box> */}
          <Box>
            <P>
              <Bold>{t("Impressum.WebsiteBold")}</Bold>
              {t("Impressum.Website")}
            </P>
          </Box>
          <Box>
            <P>
              <Bold>{t("Impressum.DesignBold")}</Bold>
              {t("Impressum.Design")}
            </P>
          </Box>
        </Box>
        <Break />
        <Box>
          <P>{t("Impressum.Paragraph-3")}</P>
          <br />
          <P>{t("Impressum.Paragraph-4")}</P>
        </Box>
        <Box>
          <H2>{t("Impressum.Header-3")}</H2>
          <P>{t("Impressum.Paragraph-5")}</P>
        </Box>
        {/* <Box> */}
        <H2>{t("Impressum.Header-4")}</H2>
        {/* <P>{t("Impressum.Paragraph-6")}</P> */}
        {/* </Box> */}
        <P>
          <Bold>
            <div>
              <Anchor href="https://www.damianpertoll.com/" target="_blank">
                <span>Damian Pertoll</span>
                <StyledDownArrow />
              </Anchor>
            </div>
          </Bold>
        </P>
        <Box>
          <P>{t("Impressum.Paragraph-7")}</P>
        </Box>
        <Box>
          <Logos>
            <LogoContainer1 />
            <LogoContainer2 />
          </Logos>
        </Box>
        <Box>
          <H2>{t("Impressum.Header-5")}</H2>
          <P>{t("Impressum.Paragraph-9")}</P>
        </Box>
      </Center>
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
  @media screen and (max-width: 1024px) {
    /* align-items: flex-start; */
  }
`;

const Center = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 120px 20px 200px 20px;
  @media screen and (max-width: 1024px) {
    margin: 120px 70px 100px 70px;
  }
  @media screen and (max-width: 320px) {
    /* margin: 120px 100px 100px 100px; */
  }
`;

const H1 = styled.h1`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  /* letter-spacing: -0.05em; */
  @media screen and (max-width: 600px) {
    font-size: 27px;
  }
`;
const H2 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  margin-bottom: 20px;
  /* letter-spacing: -0.05em; */
  @media screen and (max-width: 600px) {
    font-size: 17px;
  }
`;

const P = styled.p`
  font-weight: 300;
  font-size: 22px;
  /* letter-spacing: -0.05em; */

  margin: 3px 0;
  @media screen and (max-width: 600px) {
    font-size: 17px;
    width: 300px;
  }
  @media screen and (max-width: 280px) {
    max-width: 250px;
  }
`;

const Bold = styled.span`
  font-weight: 600;
  div {
    display: flex;
    align-items: flex-end;
  }
`;

const Break = styled.div`
  height: 1px;
  width: 50%;
  background: black;
  margin: 50px 0;
  @media screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;

const Box = styled.div`
  margin: 25px 0px;
  @media screen and (max-width: 600px) {
    margin: 10px 0;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #e7481d;
  display: flex;
  align-items: flex-end;

  &:hover {
    transform: scale(1.05);
  }
  /* &:visited {
    color: #551a8b;
    fill: #551a8b;
  } */
`;

const StyledDownArrow = styled(DownArrow)`
  width: 25px;
  transform: rotate(230deg);
  margin-left: 6px;
  margin-bottom: 1.55px;
  cursor: pointer;
  fill: #e7481d;
`;

const Logos = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const LogoContainer1 = styled.div`
  width: 320px;
  height: 100px;
  background-image: url("/Impressum/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (max-width: 800px) {
    margin: 30px 0px 30px 0px;
  }
  @media screen and (max-width: 601px) {
    margin: 50px 0px 20px 0px;
  }
  @media screen and (max-width: 280px) {
    max-width: 200px;
    height: 100px;
  }
`;

const LogoContainer2 = styled.div`
  width: 60px;
  height: 50px;
  background-image: url("/Impressum/2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  align-self: center;
  margin-left: 50px;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-bottom: 50px;
    align-self: flex-start;
  }
  @media screen and (max-width: 601px) {
    margin-left: 0px;
    align-self: center;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 280px) {
    max-width: 60px;
    height: 50px;
    align-self: flex-start;
  }
`;
