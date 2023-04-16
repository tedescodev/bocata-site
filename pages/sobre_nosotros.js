import Head from "next/head";

import styled from "styled-components";

import SuperGymProLayout from "../components/layout/SuperGymProLayout";
import BoxContentSection from "../components/sections/BoxContentSection";
import HeaderPages from "../components/ui/HeaderPages";
import TitlePages from "../components/ui/TitlePages";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import NavDesktop from "../components/layout/nav/NavDesktop";
import { StyledFlex, IconWrapper } from "../components/ui/commonStyles";
import MenuBar from "../components/ui/MenuBar";

const Paragraph = styled.p`
  margin: 0 !important;
`;
export default function About() {
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div>
      <Head>
        <title>Sobre nosotros</title>
        <meta name="description" content="Sobre nosotros" />
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages frontPage="nosotros" nonMenuBar />

      <BoxContentSection>
        <StyledFlex>
          <TitlePages marginBottom="5px">Sobre Nosotros</TitlePages>
          <IconWrapper icon={faUser} />
        </StyledFlex>
        <Paragraph>{message}</Paragraph>
      </BoxContentSection>
    </div>
  );
}

About.Layout = SuperGymProLayout;
