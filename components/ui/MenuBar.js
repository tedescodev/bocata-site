import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SuperGymProImgActive from "../../public/assets/dc08cdad611e7aabcee8bc6dbbfb87fa.png";

import NavMobile from "../layout/nav/NavMobile";
import InputSearch from "../functionals/inputs/InputSearch";
import { Ancla, ContainerAnclas } from "./commonStyles";
import SearchResults from "../layout/nav/SearchResults";

export default function MenuBar({ className, nonGradient, top }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [topState, setTopState] = useState(top);

  const [results, setResults] = useState({
    articles: [],
    categories: [],
    brands: [],
    projects: [],
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    watchScroll();
    if (showMenu) {
      document.getElementById("body").classList.add("not-scroll");
      return;
    }

    document.getElementById("body").classList.remove("not-scroll");
  }, [showMenu]);

  function logit() {
    setScrollY(window.pageYOffset);
    setTopState(() => 0);
  }

  function watchScroll() {
    window.addEventListener("scroll", logit);
  }

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <MenuBarStyled
        id="header"
        className={`${className}`}
        top={topState}
        backgoundGradient={scrollY < 90 && !nonGradient}
      >
        <MenuBarContainer>
          <Link href="/supergympro">
            <Ancla>
              <Image
                src={SuperGymProImgActive}
                alt="SuperGymActive"
                className="imgNavbar"
                layout="raw"
              />
            </Ancla>
          </Link>
          <ContainerAnclas>
            <Ancla
              onClick={() => setShowSearch(!showSearch)}
              onBlur={() => setShowSearch(!showSearch)}
              nonGradient={nonGradient}
              margin="5px"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: 20, paddingRight: 10 }}
              />
            </Ancla>
            <Ancla onClick={handleShowMenu} nonGradient={nonGradient} margin="0 5px 0 0">
              <FontAwesomeIcon icon={faBars} style={{ fontSize: 25 }} />
            </Ancla>
            {showMenu && (
              <NavMobile
                handleShowMenu={handleShowMenu}
                nonGradient={nonGradient}
              />
            )}
          </ContainerAnclas>
        </MenuBarContainer>
        {showSearch && (
          <>
          <InputContainer className="only-mobile">
            <InputSearch
              nonBorder
              setShowSearchHandle={() => {
                setShowSearch(!showSearch)
                setIsOpen(!isOpen);
                setResults({
                  articles: [],
                  categories: [],
                  brands: [],
                  projects: [],
                });
              }}
              setResults={(r) => {
                setIsOpen(!isOpen);
                setResults(r);
              }}
            />
          </InputContainer>
          {isOpen && <SearchResults results={results} />}
          </>
        )}
      </MenuBarStyled>
    </>
  );
}

const MenuBarStyled = styled.div`
  background-color: #000000;
  padding: 15px 15px 0px 0px;
  position: sticky;
  top: ${(props) => (props.top ? props.top : 0)};
  z-index: 3;
  ${(props) =>
    props.backgoundGradient &&
    css`
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 80%
      );
    `}
`;

const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000;
  padding: 15px 15px 15px 15px;
  top: ${(props) => (props.top ? props.top : 0)};
  z-index: 3;
`;
