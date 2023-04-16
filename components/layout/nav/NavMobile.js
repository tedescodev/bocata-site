import Recat, { useState } from "react";
import { useRouter } from "next/router";

import styled, { css } from "styled-components";
import Link from "next/link";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Ancla = styled.a`
  cursor: pointer;
  ${(props) =>
    props.colorAncla &&
    css`
      color: #38ace3 !important;
      text-decoration: underline !important;
    `}
`;

const Nav = styled.nav`
  position: absolute;
  color: #ffffff;
  width: 90%;
  height: 100vh;
  z-index: 81;
  top: 40px;
  right: 0;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: fit-content;
  }
  a {
    display: block;
    font-family: "Barlow Condensed";
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 40px;
  }
  a h5 {
    font-size: 19px;
  }
`;

export default function NavMobile({ handleShowMenu }) {
  const router = useRouter();
  const [showBrandsMobile, setShowBrandsMobile] = useState(false);

  return (
    <Nav>
      <div>
        <Link href="#">
          <a onClick={() => setShowBrandsMobile(!showBrandsMobile)}>
            <h5>
              Nuestras marcas <KeyboardArrowDownIcon className="only-mobile" />
            </h5>
          </a>
        </Link>
        {showBrandsMobile && (
          <div className="only-mobile">
            <Ancla
              onClick={() => {
                handleShowMenu();
                router.push("/marcas?brand=Freemotion");
              }}
            >
              Freemotion
            </Ancla>
            <Ancla
              onClick={() => {
                handleShowMenu();
                router.push("/marcas?brand=Athletic");
              }}
            >
              Athletic
            </Ancla>

            <Ancla
              onClick={() => {
                handleShowMenu();
                router.push("/marcas?brand=Reebok");
              }}
            >
              Reebok
            </Ancla>

            <Ancla
              onClick={() => {
                handleShowMenu();
                router.push("/marcas?brand=Adidas");
              }}
            >
              Adidas
            </Ancla>

            <Ancla
              onClick={() => {
                handleShowMenu();
                router.push("/marcas?brand=Stages");
              }}
            >
              Stages
            </Ancla>
          </div>
        )}
        <Link href="/proyectos">
          <Ancla colorAncla={router.pathname.includes("proyectos")}>
            <h5>Proyectos</h5>
          </Ancla>
        </Link>
        <Link href="/contacto">
          <Ancla colorAncla={router.pathname.includes("contacto")}>
            <h5>Contacto</h5>
          </Ancla>
        </Link>
      </div>
    </Nav>
  );
}
