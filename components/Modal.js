import React from "react";
import styled from "styled-components";
import Close from "../assets/icons/Close";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <Overlay onClick={onClose} />
      <Container>
        <Content>
          <ButtonContainer onClick={onClose}>
            <Close width={15} height={15} />
          </ButtonContainer>
          {children}
          {/* <Button onClick={onClose}>Close</Button> */}
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  /* min-width: 400px; */
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #c4c4c4;
  padding: 35px 20px;
  z-index: 1000;
  text-align: left;
  /* display: flex; */
  /* flex-direction: column; */
  border-radius: 30px;
  @media screen and (max-width: 1121px) {
    width: 80%;
    padding: 25px 20px;
  }
  /* @media screen and (max-width: 1000px) {
    width: 55%;
    padding: 25px 20px;
  }
  @media screen and (max-width: 700px) {
    width: 70%;
    padding: 25px 20px;
  } */
`;

const Content = styled.div`
  min-width: 200px;
  height: 400px;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* border-radius: 30px; */
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px;
  cursor: pointer;
`;
