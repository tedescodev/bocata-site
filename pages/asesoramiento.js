import Head from "next/head";
import styles from "../styles/Home.module.css";
import SuperGymProLayout from "../components/layout/SuperGymProLayout";
import HeaderPages from "../components/ui/HeaderPages";
import SectionPages from "../components/ui/SectionPages";
import ContainerPages from "../components/ui/ContainerPages";
import TitlePages from "../components/ui/TitlePages";
import IconService from "../components/ui/IconService";
import NavDesktop from "../components/layout/nav/NavDesktop";
import MenuBar from "../components/ui/MenuBar";
export default function Asesoramiento() {
  return (
    <div>
      <Head>
        <title>Asesoramiento</title>
        <meta name="description" content="Brindamos asesoramiento." />
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages frontPage="asesoramiento" nonMenuBar>
        <div className="flex-center">
          <h2 className={`${styles.title} highlighted`}>ASESORAMIENTO</h2>
        </div>
      </HeaderPages>

      <SectionPages pt="80px">
        <ContainerPages ai="end">
          <IconService image="asesoramiento_negro.png" />
        </ContainerPages>
        <ContainerPages>
          <TitlePages>Asesoramiento profesional</TitlePages>
        </ContainerPages>
        <p>
          Nuestro equipo cuenta con la formación profesional necesaria para el
          asesoramiento en proyectos de espacios de fitness en todo tipo de
          emprendimientos edilicios.
        </p>
        <p>
          Desde el área de capacitación de SUPERGYM PRO, nos encontramos en
          constante actualización de las tecnologías y procesos disponibles, que
          activan nuevas experiencias en el uso de los aparatos de fitness.
        </p>
        <p>
          Además, la experiencia ofrecida por las marcas que representamos, nos
          brinda el expertise comercial que necesitamos para poder definir
          juntos, a través del análisis estratégico de tu espacio, cuál es tu
          necesidad real.
        </p>
      </SectionPages>
    </div>
  );
}
Asesoramiento.Layout = SuperGymProLayout;
