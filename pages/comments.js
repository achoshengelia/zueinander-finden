import React, { useRef } from "react";
import styled from "styled-components";
import { Comments as CommentsSection } from "../components";
import { getComments, postComment } from "../api";
import useTranslation from "next-translate/useTranslation";

export default function Comments({ comments }) {
  const commentsRef = useRef(null);
  const { t, i18n } = useTranslation("common");

  function handleScroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Container>
      <Center>
        <Title>{t("Comments.Header-1")}</Title>
        <Text>{t("Comments.MessagesText")}</Text>
        <Text>
          {t("Comments.MessagesClickText")}
          <ScrollLink onClick={() => handleScroll(commentsRef)}>
            {t("Comments.MessagesClick")}
          </ScrollLink>
        </Text>
        {/* todo go to comments section */}

        <CommentItems>
          {comments &&
            comments.map((item, index) => (
              <CommentItem key={item.id}>{item.text}</CommentItem>
            ))}
        </CommentItems>

        <CommentsWrapper ref={commentsRef}>
          <CommentsSection />
        </CommentsWrapper>
      </Center>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const comments = await getComments();
  return {
    props: {
      comments: comments.data,
    },
  };
}

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Center = styled.div`
  max-width: 824px;
  width: 100%;
  min-height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 25px;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    max-width: 654px;
  }
`;

const Title = styled.h1`
  padding: 0 30px;
  font-size: 45px;
  @media screen and (max-width: 850px) {
    font-size: 32px;
    margin: 15px 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 25px;
    margin: 15px 0;
  }
`;

const Text = styled.span`
  text-align: left;
  font-weight: 300;
  line-height: 30px;
  margin-top: 35px;
  font-size: 25px;
  padding: 0 30px;
  @media screen and (max-width: 850px) {
    font-size: 17px;
    margin: 0;
  }
`;

const ScrollLink = styled.span`
  color: #e8481d;
  cursor: pointer;
  &:hover {
    color: #f19177;
  }
`;

const CommentItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  padding: 0 30px;
`;

const CommentItem = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid #111;
  font-size: 22px;
  font-weight: 300;
  border-radius: 35px;
  margin: 15px 0px;
  font-style: italic;
  @media screen and (max-width: 850px) {
    font-size: 17px;
  }
`;

const CommentsWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 200px;
`;
