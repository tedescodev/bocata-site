import Head from "next/head";
import Error from "next/error";
import Image from "next/image";

import {
  CardContainer,
  CardContent,
  ContainerText,
  ContainerImage,
  GradientContainer,
  HeaderContent,
  PageContent
} from "../../components/ui/commonStyles";
import styles from "../../styles/Home.module.css";

import SuperGymProLayout from "../../components/layout/SuperGymProLayout";
import HeaderPages from "../../components/ui/HeaderPages";
import ProjectCard from "../../components/functionals/cards/ProjectCard";
import NavDesktop from "../../components/layout/nav/NavDesktop";

import MenuBar from "../../components/ui/MenuBar";

import Portada from "../../public/assets/portada-proyectos.jpg";

export default function Proyectos({ proyectos }) {

  return (
    <div style={{ position: "relative" }}>
      {!proyectos && <Error statusCode={503} />}
      <Head>
        <title>Proyectos</title>
        <meta name="description" content="Proyectos SuperGym Pro" />
      </Head>
      <NavDesktop nonGradient />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages frontPage="proyectos" nonPosition>
        <HeaderContent className={`${styles.headerContentPages}`}>
          <GradientContainer>
            <ContainerText>
              <h2 className="uppercase" style={{ margin: 0 }}>
                Proyectos
              </h2>
              <h4 className="uppercase" style={{ marginTop: 0 }}>
                Conocé los proyectos realizados por SuperGym Pro
              </h4>
            </ContainerText>
          </GradientContainer>
          <ContainerImage>
            <Image src={Portada} margin={0} layout="responsive" alt="Proyectos"></Image>
          </ContainerImage>
        </HeaderContent>
      </HeaderPages>

      <PageContent>
        <CardContainer>
          <CardContent>
            {proyectos.length > 0 &&
              proyectos
                .sort((a, b) => a.orderItem - b.orderItem)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
          </CardContent>
        </CardContainer>
      </PageContent>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    let proyectos = null;
    await fetch(`https://bocata.tedesco.es/v1/api/project`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        }
      })
      .then((responseJson) => {
        proyectos = responseJson;
      })
      .catch((error) => {
        console.log(error);
      });

    return { props: { proyectos } };
  } catch (error) {
    console.log(error);
  }
}

Proyectos.Layout = SuperGymProLayout;
