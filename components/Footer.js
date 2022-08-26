import React from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { Instagram, Facebook } from "../assets/icons/Socials";

export default function Footer() {
  const { t, i18n } = useTranslation("common");

  return (
    <Container>
      <Center>
        <Upper>
          <MobilLinksAndSocial>
            <MobileLinks>
              <div>
                <a href="mailto:freitempo@ariadne.bz.it">
                  {t("Footer.Contact")}
                </a>
              </div>
              <div>
                <a href="/impressum">{t("Footer.Impressum")}</a>
              </div>
              <div>
                <a href="/datenschutz">{t("Footer.Privacy")}</a>
              </div>
            </MobileLinks>
            <MobileSocials>
              <a
                href="https://www.instagram.com/zueinanderfinden_trovarsi/"
                target="_blank"
              >
                <StyledInstagram fill="#fff" />
              </a>
              <a
                href="https://www.facebook.com/Verband-Associazione-Ariadne-1479119835643840/"
                target="_blank"
              >
                <StyledFacebook fill="#fff" />
              </a>
            </MobileSocials>
          </MobilLinksAndSocial>
          <UpperLeft>
            <FooterItem width={"250px"}>
              <FooterItemTop>{t("Footer.From")}</FooterItemTop>
              <FooterItemBottom>
                <a href="https://www.ariadne.bz.it/" target="_blank">
                  <Logo1 />
                </a>
              </FooterItemBottom>
            </FooterItem>

            <FooterItem width={"120px"}>
              <FooterItemTop></FooterItemTop>
              <FooterItemBottom>
                <span>
                  <a
                    href="https://www.instagram.com/ohnoitzsophie/"
                    target="_blank"
                  >
                    Sophie Lazari
                  </a>
                </span>
                <span>
                  <a href="https://annikaterwey.com/" target="_blank">
                    Annika Terwey
                  </a>
                </span>
              </FooterItemBottom>
            </FooterItem>

            <FooterItem width={"auto"}>
              <FooterItemTop>{t("Footer.Funded")}</FooterItemTop>
              <FooterItemBottom fd="row" ai={"center"} jc="flex-end">
                <FooterItemBottomElement width="270px" height="70px">
                  <Logo2 />
                </FooterItemBottomElement>
                <FooterItemBottomElement width="45px" height="40px">
                  <Logo3 />
                </FooterItemBottomElement>
              </FooterItemBottom>
            </FooterItem>

            <FooterItem width={"auto"}>
              <FooterItemTop>{t("Footer.Collaboration")}</FooterItemTop>
              <FooterItemBottom fd="row" ai={"center"} jc="flex-end">
                <FooterItemBottomElement width={"180px"} height={"80px"}>
                  <a href="https://www.kuenstlerbund.org/de" target="_blank">
                    <Logo4 />
                  </a>
                </FooterItemBottomElement>
                <FooterItemBottomElement width={"250px"} height={"80px"}>
                  <a href="https://www.dsg.bz.it/141.html" target="_blank">
                    <Logo5 />
                  </a>
                </FooterItemBottomElement>
              </FooterItemBottom>
            </FooterItem>
          </UpperLeft>
          <Links>
            <div>
              <a href="mailto:freitempo@ariadne.bz.it">{t("Footer.Contact")}</a>
            </div>
            <div>
              <a href="/impressum">{t("Footer.Impressum")}</a>
            </div>
            <div>
              <a href="/datenschutz">{t("Footer.Privacy")}</a>
            </div>
          </Links>
        </Upper>
        <Lower>
          <Copyright>{t("Footer.Copyright")}</Copyright>
          <Socials>
            <a
              href="https://www.facebook.com/Verband-Associazione-Ariadne-1479119835643840/"
              target="_blank"
            >
              <StyledFacebook fill="#fff" />
            </a>
            <a
              href="https://www.instagram.com/zueinanderfinden_trovarsi/"
              target="_blank"
            >
              <StyledInstagram fill="#fff" />
            </a>
          </Socials>
        </Lower>
      </Center>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 250px;
  background: #23242a;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: #f9f8f8;
  /* margin-top: 200px; */
  @media screen and (max-width: 1121px) {
    height: auto;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 280px) {
    padding: 0 30px;
  }
`;

const Center = styled.div`
  max-width: 1524px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Upper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #818181;
  padding: 20px 0;
  box-sizing: border-box;
  @media screen and (max-width: 1121px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UpperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 1121px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterItemBottom = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: center;
  span {
    width: 100%;
    opacity: 0.6;
    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1515px) and (min-width: 1121px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1121px) {
    align-items: flex-start;
    flex-direction: column;
    height: auto;
  }
`;

const Logo1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/Footer/1.png");
  background-size: cover;
`;

const Logo2 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/Footer/2.png");
  background-size: cover;
`;

const Logo3 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/Footer/3.png");
  background-size: cover;
`;

const Logo4 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/Footer/4.png");
  background-size: cover;
`;

const Logo5 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/Footer/5.png");
  background-size: cover;
`;

const FooterItemBottomElement = styled.div`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  margin-right: 20px;
`;

const FooterItemTop = styled.div`
  width: 100%;
  min-height: 25px;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.6;
  @media screen and (max-width: 1121px) {
    text-align: left;
  }
`;

const FooterItem = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  &:nth-child(4) {
    ${FooterItemBottomElement} {
      width: 150px;
      height: 60px;

      ${Logo4} {
        background-position: -16px;
        background-repeat: no-repeat;
      }
    }
  }

  @media screen and (max-width: 1121px) {
    margin-right: 0px;
    margin-top: 20px;
    &:nth-child(1) {
      align-items: flex-start;
      ${FooterItemBottom} {
        width: 200px;
        height: 70px;
        ${Logo1} {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left center;
        }
      }
    }

    &:nth-child(2) {
      width: 100%;
      border-bottom: 1px solid #818181;
      margin-top: 0px;
      ${FooterItemTop} {
        min-height: 0px;
      }

      ${FooterItemBottom} {
        height: 50px;
        margin-bottom: 20px;
      }
    }

    &:nth-child(3) {
      width: 100%;
      border-bottom: 1px solid #818181;
      padding-bottom: 20px;
    }
    &:nth-child(4) {
      width: 100%;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1515px) and (min-width: 1121px) {
    &:nth-child(1) {
      width: 150px;
      /* justify-content: center; */
      ${FooterItemTop} {
        margin-bottom: 20px;
        /* height: 60px; */
      }

      ${FooterItemBottom} {
        height: 60px;
      }
    }
    &:nth-child(3) {
      ${FooterItemBottomElement} {
        &:nth-child(1) {
          width: 180px;
          height: 60px;
        }
        &:nth-child(2) {
          width: 35px;
          height: 30px;
        }
      }
    }
    &:nth-child(4) {
      ${FooterItemBottomElement} {
        &:nth-child(1) {
          width: 120px;
          height: 60px;
        }
        &:nth-child(2) {
          width: 150px;
          height: 50px;
        }
        ${Logo4} {
          background-position: -10px;
        }
      }
    }
  }
  @media screen and (max-width: 280px) {
    &:nth-child(1) {
      width: 150px;
      /* justify-content: center; */
      ${FooterItemTop} {
        margin-bottom: 20px;
        /* height: 60px; */
        font-size: 16px;
      }

      ${FooterItemBottom} {
        height: 45px;
      }
    }
    &:nth-child(3) {
      ${FooterItemBottomElement} {
        &:nth-child(1) {
          width: 180px;
          height: 55px;
        }
        &:nth-child(2) {
          width: 35px;
          height: 30px;
        }
      }
    }
    &:nth-child(4) {
      ${FooterItemBottomElement} {
        &:nth-child(1) {
          width: 110px;
          height: 40px;
        }
        &:nth-child(2) {
          width: 120px;
          height: 40px;
        }
        ${Logo4} {
          background-position: -10px;
        }
      }
    }
  }
`;

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const Copyright = styled.div`
  font-size: 13px;
  color: #ffffff;
  opacity: 0.6;
  @media screen and (max-width: 280px) {
    font-size: 10px;
    margin-bottom: 20px;
  }
`;

const Socials = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-evenly;
  @media screen and (max-width: 1121px) {
    display: none;
  }
`;

const MobileSocials = styled.div`
  margin-top: 15px;
  display: flex;
`;

const MobilLinksAndSocial = styled.div`
  display: none;
  width: 100%;
  border-bottom: 1px solid #a8a8a9;
  padding-bottom: 30px;
  @media screen and (max-width: 1121px) {
    display: flex;
    flex-direction: column;
  }
`;

const MobileLinks = styled.div`
  div {
    margin-top: 10px;
    text-align: left;
    font-weight: 600;
    color: #a8a8a9;
  }
`;

const StyledFacebook = styled(Facebook)`
  width: 20px;
  height: 20px;
  opacity: 0.6;
`;

const StyledInstagram = styled(Instagram)`
  width: 20px;
  height: 20px;
  opacity: 0.6;
  @media screen and (max-width: 1121px) {
    margin-right: 20px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: right;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.6;
  a {
    font-size: 16px;
    display: inline-block;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1515px) and (min-width: 1121px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1121px) {
    display: none;
  }
`;
