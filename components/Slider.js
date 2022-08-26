import React, { Component } from "react"
import Slider from "react-slick"
// import { SliderData } from "./SliderData"
import styled from "styled-components"
import { PreArrow, NextArrow } from "../assets/icons/Arrows"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }

    return (
      <div>
        <Slider {...settings}>
          {this.props.sliderData &&
            this.props.sliderData.map(({ id, imageUrl }) => {
              return (
                <ImgWrapper key={id}>
                  <Img isResponsive={this.props.isResponsive} src={`${process.env.BASE_URI}/${imageUrl}`} />
                </ImgWrapper>
              )
            })}
        </Slider>
      </div>
    )
  }
}

const ImgWrapper = styled.div``

const Img = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    height: 200px;
  }
`

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <PreArrow style={{ ...style, zIndex: 999, left: 10 }} width={60} height={60} fill="#e8481d" className={className} onClick={onClick} />
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <NextArrow style={{ ...style, zIndex: 999, right: 10 }} width={60} height={60} fill="#e8481d" className={className} onClick={onClick} />
}
