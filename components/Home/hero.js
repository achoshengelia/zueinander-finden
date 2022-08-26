import React, { Suspense, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import GLTFModel from "../../components/GLTFModel";
import SuspenseWrapper from "../SuspenseWrapper";
import { NextArrow } from "../../assets/icons/Arrows";

const OrbitControls = require("three/examples/jsm/controls/OrbitControls")
  .OrbitControls;

function Controls() {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    controls.current.update();
  });

  return (
    <orbitControls
      minDistance={10}
      maxDistance={50}
      ref={controls}
      autoRotate
      args={[camera, gl.domElement]}
    ></orbitControls>
  );
}

extend({ OrbitControls });
export default function Hero({ handleScroll }) {
  return (
    <>
      <Container>
        <Canvas colorManagment>
          <Controls />
          <directionalLight
            position={[10, 0, 10]}
            color={"0xFFFFFF"}
            intensity={0.5}
          />
          <directionalLight
            position={[20, 5, 0]}
            color={"0xFFFFFF"}
            intensity={0.5}
          />
          <pointLight position={[20, 0, -20]} intensity={0.5} />
          <SuspenseWrapper>
            <GLTFModel />
          </SuspenseWrapper>
        </Canvas>
        <ArrowContainer onClick={handleScroll}>
          <NextArrow />
        </ArrowContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23242a;
  /* background-color: #ccc; */
`;

const Float = keyframes`
	0% {
		transform: translatey(0px) rotate(90deg);
  }
	50% {
		transform: translatey(-10px) rotate(90deg);
	}
	100% {

		transform: translatey(0px) rotate(90deg);
	}
}
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 10px;
  cursor: pointer;
  transform: rotate(90deg);
  animation: ${Float} 1s ease-in-out infinite;
  fill: #e8481d;
  height: 40px;
  width: 40px;
`;

// const DownArrowContainer = styled.div`
//   width: 40px;
//   height: 40px;
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   margin-bottom: 30px;
//   cursor: pointer;
//
// `
