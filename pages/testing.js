import Head from "next/head";

import styles from "../styles/Home.module.css";

import SuperGymProLayout from "../components/layout/SuperGymProLayout";
import HeaderPages from "../components/ui/HeaderPages";
import TitlePages from "../components/ui/TitlePages";
import SectionPages from "../components/ui/SectionPages";
import ContainerPages from "../components/ui/ContainerPages";
import IconService from "../components/ui/IconService";
import NavDesktop from "../components/layout/nav/NavDesktop";
import MenuBar from "../components/ui/MenuBar";

export default function Testing() {
  return (
    <div>
      <Head>
        <title>Testing</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages frontPage="testing" nonMenuBar>
        <div className="flex-center">
          <h2 className={`${styles.title} highlighted`}>TESTING</h2>
        </div>
      </HeaderPages>

      <SectionPages pt="80px">
        <ContainerPages ai="end">
          <IconService image="testing_negro.png" />
        </ContainerPages>
        <ContainerPages>
          <TitlePages>Testeo de equipos</TitlePages>
        </ContainerPages>
        <p>
          Todos los equipos que ofrecemos en nuestras cotizaciones, se
          encuentran disponibles para ser probados en tiempo real en nuestras
          instalaciones.
        </p>
        <p>
          Nuestro Showroom ofrece más de 1500 m2 de equipos en exhibición en un
          sólo lugar, para que puedas además de testearlas, despejar todo tipo
          de dudas en cuanto a lo técnico y su forma de uso.
        </p>
        <p>Somos el centro Fitness más grande del Uruguay</p>
        <p>
          Este espacio se encuentra abierto de Lunes a Viernes de 9 a 18 hs. en
          Isidoro de María 1727, podés venir sin agenda previa.
        </p>
      </SectionPages>
    </div>
  );
}

Testing.Layout = SuperGymProLayout;
