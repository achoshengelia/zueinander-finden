import React from "react";
import styled from "styled-components";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import useTranslation from "next-translate/useTranslation";

export default function Datenschutz() {
  const { t, i18n } = useTranslation("common");

  return (
    <Container>
      {/* <Navbar /> */}
      <Center>
        <H1>{t("Datenschutz.Header-1")}</H1>
        <H2>{t("Datenschutz.Header-2")}</H2>
        <Box>
          <P>{t("Datenschutz.Paragraph-1")}</P>
        </Box>
        <P>{t("Datenschutz.Paragraph-2")}</P>
        <Box>
          <ol>
            <Li>
              <b>{t("Datenschutz.Header-3")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-3")}</P>
            </Li>
            <Box>
              <P>{t("Datenschutz.Paragraph-4")}</P>
            </Box>
            <Li>
              <b>{t("Datenschutz.Header-4")}</b>
              <div></div>
              <P>
                {t("Datenschutz.Paragraph-5-1")}
                <Anchor href="https://www.zueinander-trovarsi.it">
                  {t("Datenschutz.Paragraph-5-2")}
                </Anchor>{" "}
                {t("Datenschutz.Paragraph-5-3")}
                <Ul>
                  <ULi>{t("Datenschutz.Li-1")}</ULi>
                  <ULi>{t("Datenschutz.Li-2")}</ULi>
                  <ULi>{t("Datenschutz.Li-3")}</ULi>
                  <ULi>{t("Datenschutz.Li-4")}</ULi>
                  <ULi>{t("Datenschutz.Li-5")}</ULi>
                  <ULi>{t("Datenschutz.Li-6")}</ULi>
                  <ULi>{t("Datenschutz.Li-7")}</ULi>
                  <ULi>{t("Datenschutz.Li-8")}</ULi>
                  <ULi>{t("Datenschutz.Li-9")}</ULi>
                </Ul>
              </P>
            </Li>
            <Box>
              <P>{t("Datenschutz.Paragraph-6")}</P>
            </Box>
            <Box>
              <P>{t("Datenschutz.Paragraph-7")}</P>
              <Ul>
                <ULi>{t("Datenschutz.Li-10")}</ULi>
                <ULi>{t("Datenschutz.Li-11")}</ULi>
              </Ul>
              <Box>
                <P>{t("Datenschutz.Paragraph-8")}</P>
              </Box>
            </Box>
            <Li>
              <b>{t("Datenschutz.Header-5")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-9")}</P>
              <Ul>
                <ULi>{t("Datenschutz.Li-12")}</ULi>
                <ULi>{t("Datenschutz.Li-13")}</ULi>
                <ULi>{t("Datenschutz.Li-14")}</ULi>
                <ULi>{t("Datenschutz.Li-15")}</ULi>
              </Ul>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-6")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-10")}</P>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-7")}</b>
              <div></div>
              <P>
                {t("Datenschutz.Paragraph-11")}
                <Ul>
                  <ULi>{t("Datenschutz.Li-16")}</ULi>
                  <ULi>{t("Datenschutz.Li-17")}</ULi>
                  <ULi>{t("Datenschutz.Li-18")}</ULi>
                  <ULi>{t("Datenschutz.Li-19")}</ULi>
                  <ULi>{t("Datenschutz.Li-20")}</ULi>
                  <ULi>{t("Datenschutz.Li-21")}</ULi>
                  <ULi>
                    {t("Datenschutz.Li-22")}
                    <Anchor href="https//www.garanteprivacy.it" target="_blank">
                      (www.garanteprivacy.it)
                    </Anchor>
                    .
                  </ULi>
                </Ul>
              </P>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-8")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-12")}</P>
              <Box>
                <P>{t("Datenschutz.Paragraph-13")}</P>
              </Box>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-9")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-14")}</P>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-10")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-15")}</P>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-11")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-16")}</P>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-12")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-17")}</P>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-13")}</b>
              <div></div>
              <P>{t("Datenschutz.Paragraph-18")}</P>
              <Box>
                <P>{t("Datenschutz.Paragraph-19")}</P>
              </Box>
              <Box>
                <P>{t("Datenschutz.Paragraph-20")}</P>
              </Box>
              <Box>
                <i>{t("Datenschutz.Italics-1")}</i>
                <div></div>
                <P>{t("Datenschutz.Paragraph-21")}</P>
              </Box>
              <Box>
                <i>{t("Datenschutz.Italics-2")}</i>
                <div></div>
                <P>{t("Datenschutz.Paragraph-22")}</P>
              </Box>
            </Li>
            <Li>
              <b>{t("Datenschutz.Header-14")}</b>
              <div></div>
              {t("Datenschutz.Paragraph-23")}
              <br />
              <Box>
                <P>
                  Chrome:
                  <AnchorContainer>
                    <Anchor
                      href="https://support.google.com/accounts/answer/61416?hl=en"
                      target="_blank"
                    >
                      https://support.google.com/accounts/answer/61416?hl=en
                    </Anchor>
                  </AnchorContainer>
                  Firefox:
                  <AnchorContainer>
                    <Anchor
                      href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-Webseite-preferencesInternet"
                      target="_blank"
                    >
                      https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-Webseite-preferencesInternet
                    </Anchor>
                  </AnchorContainer>
                  Explorer:
                  <AnchorContainer>
                    <Anchor
                      href="https://support.microsoft.com/en-us/kb/278835"
                      target="_blank"
                    >
                      https://support.microsoft.com/en-us/kb/278835{" "}
                    </Anchor>
                  </AnchorContainer>
                  Opera:
                  <AnchorContainer>
                    <Anchor
                      href="http://www.opera.com/help/tutorials/security/cookies/"
                      target="_blank"
                    >
                      http://www.opera.com/help/tutorials/security/cookies
                    </Anchor>
                  </AnchorContainer>
                  Safari:
                  <AnchorContainer>
                    <Anchor
                      href="https://support.apple.com/kb/PH17191?viewlocale=en_US&locale=en_US"
                      target="_blank"
                    >
                      https://support.apple.com/kb/PH17191?viewlocale=en_US&locale=en_US
                    </Anchor>
                  </AnchorContainer>
                </P>
              </Box>
            </Li>
          </ol>
        </Box>
      </Center>
      {/* <Footer /> */}
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
  /* & a {
    text-decoration: none;
    color: #e7481d;
  }
  & a:hover {
    color: #651e0a;
  }
  & a:visited {
    color: #551a8b;
  } */
  margin: 0;
`;

const Center = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 120px 20px -30px 20px;
  /* @media screen and (max-width: 375px) {
    margin: 120px 20px -30px 60px;
  }
  @media screen and (max-width: 340px) {
    margin: 120px 20px -30px 100px;
  } */
`;

const H1 = styled.h1`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  /* letter-spacing: -0.05em; */
  margin-bottom: 30px;
  @media screen and (max-width: 1124px) {
    font-size: 40px;
  }
  @media screen and (max-width: 924px) {
    font-size: 37px;
  }
  @media screen and (max-width: 600px) {
    font-size: 27px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 280px) {
    font-size: 23px;
  }
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  /* letter-spacing: -0.05em; */
  @media screen and (max-width: 1124px) {
    font-size: 22px;
  }
  @media screen and (max-width: 924px) {
    font-size: 19px;
  }
  @media screen and (max-width: 600px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;
const P = styled.p`
  font-weight: 300;
  font-size: 22px;
  /* letter-spacing: -0.05em; */

  margin: 3px 0;
  & a {
    text-decoration: none;
  }
  @media screen and (max-width: 1124px) {
    font-size: 20px;
  }
  @media screen and (max-width: 924px) {
    font-size: 17px;
  }
  @media screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 300px;
    margin: 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 17px;
    max-width: 250px;
    margin: 0;
  }
`;
const Bold = styled.span`
  font-weight: 600;
`;

const Break = styled.div`
  height: 1px;
  width: 50%;
  background: black;
  margin: 50px 0;
`;

const Box = styled.div`
  margin: 30px 0px;
  i {
    font-weight: normal;
  }
  @media screen and (max-width: 600px) {
    margin: 13px 0;
  }
`;

const Li = styled.li`
  font-weight: bold;
  font-size: 22px;
  /* letter-spacing: -0.05em; */
  margin: 50px 0;
  list-style-position: inside;
  div {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1124px) {
    font-size: 20px;
  }
  @media screen and (max-width: 924px) {
    font-size: 17px;
  }
  @media screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 300px;
    margin: 20px 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 17px;
    max-width: 250px;
    margin: 20px 0;
  }
`;

const ULi = styled.li`
  list-style-position: inside;
  font-weight: 300;
  font-size: 22px;
  /* letter-spacing: -0.05em; */
  &::marker {
    color: black;
  }
  @media screen and (max-width: 1124px) {
    font-size: 20px;
  }
  @media screen and (max-width: 924px) {
    font-size: 17px;
  }
  @media screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 300px;
  }
  @media screen and (max-width: 280px) {
    font-size: 17px;
    max-width: 250px;
  }
`;

const Ul = styled.ul``;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
  overflow-wrap: break-word;
  width: 100%;

  &:hover {
    color: #e7481d;
  }
  /* &:visited {
    color: #551a8b;
  } */
`;

const AnchorContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-wrap: break-word;
  width: 90%;
`;
