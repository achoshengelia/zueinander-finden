import React, { useState } from "react"
import styled from "styled-components"
import Modal from "../../components/Modal"
import { DownArrow } from "../../assets/icons/Arrows"
import { SendButton } from "../../components"
import { postComment } from "../../api"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"

export default function Comments({ hasLink }) {
  const { t, i18n } = useTranslation("common")
  const [inputValue, setInputValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [sent, setSent] = useState(false)
  async function saveComment(data) {
    await postComment(data)
    setSent(true)
  }

  return (
    <Container>
      <Center>
        {hasLink && <Title>{t("Comments.Header")}</Title>}
        {hasLink && (
          <Text>
            {t("Comments.TextOne")}
            <Span onClick={() => setIsOpen(true)}> {t("Comments.Span")}</Span> {t("Comments.TextTwo")}
          </Text>
        )}
        {hasLink && (
          <div>
            <Link href="/comments">
              <Anchor>
                {t("Comments.LinkToComments")} <StyledDownArrow fill="#E8481D" />
              </Anchor>
            </Link>
          </div>
        )}
        <Form action="">
          <Textarea
            type="text"
            placeholder={t("Comments.Placeholder")}
            rows="10"
            maxlength="750"
            readOnly={sent}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>

        <BtnContainer>
          <MaxLetters>{t("Comments.MaximumLetters")}</MaxLetters>
          <SendButton action={saveComment} value={inputValue} />
        </BtnContainer>
      </Center>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <P>{t("Comments.Richtlinien.Intro")}</P>
        </Box>
        <Box>
          <H2>{t("Comments.Richtlinien.Header-1-1")}</H2>
          <H2>{t("Comments.Richtlinien.Header-1-2")}</H2>
          <P>{t("Comments.Richtlinien.Paragraph-1")}</P>
        </Box>
        <Box>
          <H2> {t("Comments.Richtlinien.Header-2")}</H2>
          <P>{t("Comments.Richtlinien.Paragraph-2")}</P>
          <Box>
            <P>
              {t("Comments.Richtlinien.UlHeader")}
              <ul>
                <li>{t("Comments.Richtlinien.Li-1")}</li>
                <li>{t("Comments.Richtlinien.Li-2")}</li>
                <li>{t("Comments.Richtlinien.Li-3")}</li>
                <li>{t("Comments.Richtlinien.Li-4")}</li>
                <li>{t("Comments.Richtlinien.Li-5")} </li>
                <li>{t("Comments.Richtlinien.Li-6")}</li>
                <li>{t("Comments.Richtlinien.Li-7")} </li>
                <li>{t("Comments.Richtlinien.Li-8")} </li>
                <li>{t("Comments.Richtlinien.Li-9")} </li>
              </ul>
              <Box>
                <P>{t("Comments.Richtlinien.Paragraph-3")}</P>
              </Box>
            </P>
          </Box>
        </Box>
        <Box>
          <H2>{t("Comments.Richtlinien.Header-3")}</H2>
          <P>{t("Comments.Richtlinien.Paragraph-4")}</P>
        </Box>
        <Box>
          <H2>{t("Comments.Richtlinien.Header-4")}</H2>
          <P>{t("Comments.Richtlinien.Paragraph-5")}</P>
        </Box>
        <Box>
          <H2>{t("Comments.Richtlinien.Header-5")}</H2>
          <P>{t("Comments.Richtlinien.Paragraph-6")}</P>
        </Box>
        <Box>
          <H2>{t("Comments.Richtlinien.Header-6")}</H2>
          <P>{t("Comments.Richtlinien.Paragraph-7")}</P>
        </Box>
        <Box>
          <P>{t("Comments.Richtlinien.Paragraph-8")}</P>
        </Box>
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
  }
  @media screen and (max-width: 1024px) {
    min-height: 100%;
  }
`

const Center = styled.div`
  max-width: 824px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 30px 50px; */
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    min-height: 100%;
    padding: 0px 50px;
  }
  @media screen and (max-width: 414px) {
    padding: 0px 20px;
    justify-content: flex-start;
  }
`

const Title = styled.h1`
  align-self: flex-start;
  font-size: 45px;
  font-weight: 600;
  /* line-height: 55px; */
  /* letter-spacing: -0.05em; */
  /* text-transform: uppercase; */
  color: rgba(0, 0, 0, 0.92);
  /* margin-top: 100px; */
  margin-bottom: 50px;
  @media screen and (max-width: 850px) {
    font-size: 32px;
    margin: 15px 0;
  }
  @media screen and (max-width: 375px) {
    font-size: 28px;
    margin: 15px 0;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
    margin: 15px 0;
  }
`

const Text = styled.p`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.92);
  text-align: left;
  @media screen and (max-width: 850px) {
    font-size: 18px;
  }
`

const Span = styled.span`
  color: #e8481d;
  cursor: pointer;
  &:hover {
    color: #f19177;
  }
`

const StyledDownArrow = styled(DownArrow)`
  width: 25px;
  transform: rotate(230deg);
  margin-bottom: 1.53px;
  margin-left: 8px;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    width: 17px;
    margin-left: 4px;
  }
  @media screen and (max-width: 350px) {
    width: 14px;
    margin-left: 4px;
    margin-top: 2px;
  }
`

const Anchor = styled.a`
  display: flex;
  align-items: flex-end;
  font-weight: 300;
  font-size: 25px;
  /* letter-spacing: -0.05em; */
  color: #e8481d;
  cursor: pointer;
  margin: 20px 0;
  &:hover {
    /* color: #f19177; */
    transform: scale(1.05);

    ${StyledDownArrow} {
      transform: scale(1.05) rotate(230deg);
    }
  }
  @media screen and (max-width: 850px) {
    margin: 15px 0;
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    margin: 15px 0;
    font-size: 15px;
  }
  @media screen and (max-width: 280px) {
    margin: 15px 0;
    font-size: 13px;
  }
`

const MaxLetters = styled.span`
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  opacity: 0.5;
  /* letter-spacing: -0.05em; */
  color: rgba(0, 0, 0, 0.92);
  display: inline-block;
  margin-right: 15px;
  margin-left: 8px;
  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
`

const BtnContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 50px;
  }
`

const Form = styled.div`
  margin-top: 30px;
  @media screen and (max-width: 850px) {
    margin-top: 10px;
  }
`

const Textarea = styled.textarea`
  padding: 40px;
  border: 1px solid #23242a;
  border-radius: 50px;
  width: 100%;
  height: 400px;
  font-weight: 300;
  box-shadow: 0px 1px 35px 3px rgba(0, 0, 0, 0.12);
  font-size: 25px;
  resize: none;
  outline: none;
  margin-top: 40px;
  &::placeholder {
    font-size: 18px;
    font-style: italic;
  }
  @media screen and (max-width: 650px) {
    padding: 15px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 30px;
    &::placeholder {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 280px) {
    margin-top: 0;
  }
`

const Box = styled.div`
  margin: 15px 0px;
  line-height: 30px;
  /* letter-spacing: -0.05em; */
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;

    color: #e8481d;
    margin: 50px 0;
    cursor: pointer;
    &:hover {
      color: #f19177;
      fill: #f19177;
    }
  }
  li {
    list-style-position: inside;
    margin: 10px;
  }
  @media screen and (max-width: 561px) {
    margin: 5px 0px;
  }
`
const H2 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  /* letter-spacing: -0.05em; */
  margin-bottom: 15px;
  @media screen and (max-width: 661px) {
    font-size: 22px;
  }
  @media screen and (max-width: 561px) {
    font-size: 17px;
  }
  @media screen and (max-width: 321px) {
    font-size: 14px;
  }
`
const P = styled.p`
  font-weight: 300;
  font-size: 22px;
  /* letter-spacing: -0.05em; */
  margin: 3px 0;
  @media screen and (max-width: 661px) {
    font-size: 19px;
  }
  @media screen and (max-width: 561px) {
    font-size: 17px;
  }
  @media screen and (max-width: 321px) {
    font-size: 14px;
  }
`
