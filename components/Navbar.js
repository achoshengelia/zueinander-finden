import React, { useState, useRef, useEffect, useReducer } from "react"
import styled from "styled-components"
import Hamburger from "../assets/icons/Hamburger"
import { NavbarData } from "./NavbarData"
import Close from "../assets/icons/Close"
import { TimelineMax, Expo } from "gsap/dist/gsap"
import MainLogo from "../assets/icons/MainLogo"
import { useRouter } from "next/router"
import Link from "next/link"
// import setLanguage from "next-translate/setLanguage"
import { getLanguage, setLanguageCookie } from "../helpers"
import setLanguage from "next-translate/setLanguage"
import useTranslation from "next-translate/useTranslation"

export default function Navbar() {
  const { t, lang } = useTranslation("common")

  const [sidebar, setSideBar] = useState(false)
  const menuItemRefs = []
  const [timeline, setTimeline] = useState(new TimelineMax({ paused: true }))
  const elemItemRef = useRef(null)
  const socialsRef = useRef(null)
  const [navbar, setNavbar] = useState(true)

  React.useEffect(() => {
    setTimeline(
      timeline
        .to(elemItemRef.current, { duration: 1, left: 0, ease: Expo.easeInOut })
        .staggerFrom(menuItemRefs, 0.8, { y: 100, opacity: 0, ease: Expo.easeOut }, "0.1", "-=0.4")
        .staggerFrom(socialsRef.current, 0.8, { y: 100, opacity: 0, ease: Expo.easeOut }, "0.4", "-=0.6")
        .reverse()
    )
  }, [timeline])

  React.useEffect(() => {
    timeline.reversed(!sidebar)
  }, [sidebar, timeline])

  const showSidebar = () => {
    setSideBar(!sidebar)
  }

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  function handleLink(to) {
    setSideBar(!sidebar)
    router.push({ pathname: to })
  }

  function handleLanguage(lang) {
    setSideBar(!sidebar)

    if (lang === "de") {
      setLanguage("it")
    } else {
      setLanguage("de")
    }
  }

  let prevValue = useRef(0)
  const [isTopZero, setIsTopZero] = useState(true)

  const changeBackground = () => {
    const currentPosition = window.scrollY
    if (currentPosition === 0) {
      setIsTopZero(true)
    } else if (currentPosition <= prevValue.current) {
      setNavbar(true)
      setIsTopZero(false)
    } else {
      setNavbar(false)
      setIsTopZero(false)
    }

    prevValue.current = currentPosition
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeBackground)
    }
    watchScroll()

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  return (
    <>
      <Width isTopZero={isTopZero} navbar={navbar}>
        <MainLogoContainer>
          <Link href="/">
            <a>
              <MainLogo width={60} height={60} />
            </a>
          </Link>
        </MainLogoContainer>
        <HamburgerContainer onClick={showSidebar} sidebar={sidebar}>
          <Hamburger width={35} height={35} fill={"#e8481d"} />
        </HamburgerContainer>
      </Width>
      <Nav ref={elemItemRef}>
        <CloseContainer sidebar={sidebar} onClick={showSidebar}>
          <Close width={30} height={30} fill={"#fff"} />
        </CloseContainer>

        <ul>
          {NavbarData.map((item, index) => {
            return (
              <MenuItem key={index} sidebar={sidebar} onClick={() => handleLink(item.path)} ref={(el) => el && menuItemRefs.push(el)}>
                <div>
                  <span>{t(`Menu.${item.title}`)}</span>
                </div>
              </MenuItem>
            )
          })}
          <MenuItem sidebar={sidebar} onClick={() => handleLanguage(lang)} ref={(el) => el && menuItemRefs.push(el)}>
            <div>
              <span>{t("Menu.ActiveLanguage")}</span>
            </div>
          </MenuItem>
        </ul>
        <Socials ref={socialsRef}>
          <Link href="/">
            <a href="https://www.instagram.com/zueinanderfinden_trovarsi/" target="_blank">
              INSTAGRAM
            </a>
          </Link>
          <Link href="/">
            <a href="https://www.facebook.com/Verband-Associazione-Ariadne-1479119835643840/" target="_blank">
              FACEBOOK
            </a>
          </Link>
        </Socials>
      </Nav>
    </>
  )
}

const Width = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ isTopZero }) => (isTopZero ? "transparent" : "rgba(35, 36, 42, 1 )")};
  position: fixed;
  top: ${({ navbar }) => (navbar ? "0" : "-150px")};
  transition: 0.4s;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`

const MainLogoContainer = styled.div`
  svg {
    @media screen and (max-width: 600px) {
      height: 50px;
    }
    @media screen and (max-width: 400px) {
      height: 40px;
      width: 40px;
    }
  }
`

// const StyledMainLogo = styled(MainLogo)`
//   width: 60px;
//   height: 60px;
//   @media screen and (max-width: 600px) {
//     height: 50px;
//   }
//   @media screen and (max-width: 400px) {
//     height: 40px;
//     width: 40px;
//   }
// `
const CloseContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 30px;
  cursor: pointer;
  animation-delay: 2s;
  opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
  transition: opacity 1.1s;
  transition-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  svg {
    @media screen and (max-width: 600px) {
      height: 20px;
    }
    @media screen and (max-width: 400px) {
      height: 15px;
    }
  }
`

const HamburgerContainer = styled.div`
  opacity: ${({ sidebar }) => (sidebar ? "0" : "1")};
  transition: opacity 0.5s;
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  cursor: pointer;
  svg {
    @media screen and (max-width: 600px) {
      height: 28px;
    }
    @media screen and (max-width: 400px) {
      height: 23px;
    }
  }
`

const Nav = styled.nav`
  background: #23242a;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 999999;
`

const MenuItem = styled.li`
  list-style: none;
  line-height: 60px;
  font-size: 45px;
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  margin-left: 60px;
  div {
    cursor: pointer;
    text-decoration: none;
    color: #e8481d;
  }
  div:hover {
    color: #fff;
    transform: scale(1.08);
  }
  @media screen and (max-width: 600px) {
    font-size: 35px;
    line-height: 60px;
  }
  @media screen and (max-width: 325px) {
    font-size: 25px;
    line-height: 40px;
  }
`

const Socials = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 50px;
  & a {
    text-decoration: none;
    color: #e8481d;
    margin: 10px;
    line-height: 22px;
    &:hover {
      color: #fff;
      transform: scale(1.08);
    }
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
    @media screen and (max-width: 325px) {
      font-size: 14px;
    }
  }
`
