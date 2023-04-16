import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import InputSearch from "../../functionals/inputs/InputSearch";
import SearchResults from "./SearchResults";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SuperGymProImgActive from "../../../public/assets/dc08cdad611e7aabcee8bc6dbbfb87fa.png";

import BrandsCard from "../../ui/BrandsCard";
import { Ancla, ContainerAnclas } from "../../ui/commonStyles";
import { NavDesktopStyled } from "./style";

export default function NavDesktop({ nonGradient }) {
  const router = useRouter();
  const [showBrands, setShowBrands] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [results, setResults] = useState({
    articles: [],
    categories: [],
    brands: [],
    projects: [],
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function logit() {
      setScrollY(window.pageYOffset);
    }

    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {}, [scrollY]);

  return (
    <NavDesktopStyled
      className="only-desktop"
      backgoundGradient={scrollY < 90 && !nonGradient}
    >
      <Link href="/supergympro">
        <Image
          id="logoNavbar"
          src={SuperGymProImgActive}
          className={`imgNavbar ${scrollY < 90 ? "transparent" : null}`}
          layout="raw"
          alt="SuperGymPro"
        />
      </Link>
      <ContainerAnclas>
        {showSearch && (
          <div style={{ flexDirection: "column", alignItems: "end" }}>
            <InputSearch
              setShowSearchHandle={() => {
                setShowSearch(!showSearch);
                setIsOpen(!isOpen);
                setResults({
                  articles: [],
                  categories: [],
                  brands: [],
                  projects: [],
                });
              }}
              setResults={(r) => {
                setIsOpen((isOpen) => !isOpen);
                setResults(r);
              }}
            />
            {isOpen && <SearchResults results={results} />}
          </div>
        )}
        <Ancla
          onClick={() => setShowSearch(!showSearch)}
          onBlur={() => setShowSearch(!showSearch)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: 20, paddingRight: 10 }}
          />
        </Ancla>
        <Link href="#">
          <Ancla onMouseOver={() => setShowBrands(true)}>
            <h5 className="margin0">Nuestras marcas</h5>
          </Ancla>
        </Link>
        <Link href="/proyectos">
          <Ancla
            onMouseOver={() => setShowBrands(false)}
            colorAncla={router.pathname.includes("proyectos")}
          >
            <h5 className="margin0">Proyectos</h5>
          </Ancla>
        </Link>
        <Link href="/contacto">
          <Ancla
            onMouseOver={() => setShowBrands(false)}
            colorAncla={router.pathname.includes("contacto")}
          >
            <h5 className="margin0">Contacto</h5>
          </Ancla>
        </Link>
        {showBrands && (
          <BrandsCard handleShowBrands={(val) => setShowBrands(val)} />
        )}
      </ContainerAnclas>
    </NavDesktopStyled>
  );
}
