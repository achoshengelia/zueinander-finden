import { useState, useEffect, useRef } from "react"
import "../styles/globals.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "../assets/css/sendButton.css"
import { TimelineMax } from "gsap/dist/gsap"
import styled from "styled-components"
import { Layout, MainLoader } from "../components"
import disableScroll from "disable-scroll"
import { NextSeo } from "next-seo"

function MyApp({ Component, pageProps }) {
  const menuItemRefs = useRef(null)
  const [timeline, setTimeline] = useState(new TimelineMax({ repeat: -1 }))
  const [timeline2, setTimeline2] = useState(new TimelineMax({ yoyo: true }))
  const elemItemRef = useRef(null)
  
  useEffect(() => {
    setTimeline(timeline.set(elemItemRef.current, { autoAlpha: 3 }).to(elemItemRef.current, 0.5, { scale: 0.9 }).to(elemItemRef.current, 0.5, { scale: 1 }))
  }, [])
  useEffect(() => {
    setTimeline2(timeline2.staggerFrom(menuItemRefs.current, 1, { y: 50, opacity: 0 }, 0.25))
  }, [])

  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    disableScroll.on()
    setTimeout(() => {
      setLoading(false)
    }, 2500)

    setTimeout(function () {
      disableScroll.off()
      setShowLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      <Layout>
        {/* <NextSeo title={""} description={""} /> */}
        {showLoader && <MainLoader menuItemRefs={menuItemRefs} referance={elemItemRef} loading={loading} />}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

const LoaderContainer = styled.div`
  display: flex;
`
const Container = styled.div``

export default MyApp
