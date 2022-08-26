import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 46.4983,
    longitude: 11.3548,
    zoom: 8,
  });

  return (
    <Container>
      <ReactMapGL
        trackResize={true}
        mapStyle="mapbox://styles/verbandariadne/cknsms4sa0hiy18ph00roujjh"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50vh;
  /* margin: 200px 0 250px 0; */
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    /* margin: 180px 0; */
  }
  @media screen and (max-width: 800px) {
    /* margin: 120px 0; */
  }
  @media screen and (max-width: 350px) {
    /* margin: 200px 0; */
  }
`;
const MapPlayground = styled.div`
  width: 100%;
  height: 100%;
`;
