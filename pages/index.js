import Head from "next/head";

import { isMobile } from "react-device-detect";

import SuperGymProLayout from "../components/layout/SuperGymProLayout";

import BtnFloat from "../components/ui/btnFloat";

import HeaderHome from "../components/sections/HeaderHome";
import Representatives from "../components/sections/Representatives";
import AboutUs from "../components/sections/AboutUs";
import Projects from "../components/sections/Projects";
import Advice from "../components/sections/Advice";

import styles from "../styles/Home.module.css";
import NavDesktop from "../components/layout/nav/NavDesktop";
import MenuBar from "../components/ui/MenuBar";

// import BASE_CONNECTION_STRING from "../config"
export default function SuperGymPro() {
  return (
    <div className="backgroundContent">
      {/* ----------index real ------- */}

      <Head>
        <title>Bocata</title>
        <meta name="description" content="Página oficial del Supermercado Bocata. El lugar preferido por los clientes para ahorrar en el surtido del hogar; “Nuestro compromiso es contigo" />
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <header className={styles.header}>
        <video autoPlay loop muted width="100%" playsInline>
          <source
            src="/assets/025a86105489b877a1414e5b50889d49.mp4"
            type="video/mp4"
          />
        </video>
        <HeaderHome />
      </header>
      <AboutUs />
      <Representatives />
      <Projects />
      <Advice />
      {isMobile && <BtnFloat />}
    </div>
  );
}

SuperGymPro.Layout = SuperGymProLayout;
