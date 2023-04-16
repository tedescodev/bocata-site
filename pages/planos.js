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

export default function Planos() {
  return (
    <div>
      <Head>
        <title>Planos</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages frontPage="planos" nonMenuBar>
        <div className="flex-center">
          <h2 className={`${styles.title} highlighted`}>PLANOS</h2>
        </div>
      </HeaderPages>

      <SectionPages pt="80px">
        <ContainerPages ai="end">
          <IconService image="planos_negro.png" />
        </ContainerPages>
        <ContainerPages>
          <TitlePages>Mandanos tus planos</TitlePages>
        </ContainerPages>
        <p>
          Todo proyecto en desarrollo cuenta con planos de mensura. <br />
          Si ya contás con los mismos, o si se encuentra en proceso con tu
          estudio de Arquitectos, podés enviarnos el archivo en formato digital
          a planos@supergympro.uy y nosotros nos encargamos de desarrollar tu
          espacio de fitness.
        </p>
        <p>
          Para poder presentar el desarrollo, nos ocupamos de diseñarlo en 3
          etapas:
          <ol>
            <li>
              Análisis del espacio en función de las medidas disponibles y las
              medidas de los equipos adquiridos.
            </li>
            <li>
              Esquema de usos probables teniendo en cuenta el mejor orden por
              espacio definido (por secciones, ej.: Cardio, Fuerza, etc.)
            </li>
            <li>
              Presentación del proyecto desarrollado a el o los Arquitectos
              responsables de la obra.
            </li>
          </ol>
        </p>
      </SectionPages>
    </div>
  );
}

Planos.Layout = SuperGymProLayout;
