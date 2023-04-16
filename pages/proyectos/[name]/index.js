import Head from "next/head";
import Error from "next/error";
import { useState, useEffect } from "react";

import { useWindowSize } from "../../../utility/windowsSizeHook";

import {
  StyledContainer,
  StyledContainerCenter,
  StyledSection,
} from "../../../components/ui/commonStyles";

import SuperGymProLayout from "../../../components/layout/SuperGymProLayout";
import BoxContentPage from "../../../components/ui/BoxContentPage";
import Carrousel from "../../../components/ui/carrousel";
import MenuBar from "../../../components/ui/MenuBar";
import NavDesktop from "../../../components/layout/nav/NavDesktop";

export default function ProyectDetail({ proyecto }) {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (size.width < 1010) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return (
    <div>
      {!proyecto && <Error statusCode={503} />}
      <Head>
        <title>{proyecto && proyecto.name}</title>
        <meta
          name="description"
          content={`Proyecto ${proyecto && proyecto.name} SuperGym Pro`}
        />
      </Head>
      <NavDesktop nonGradient />
      <MenuBar className="only-mobile" nonGradient />
      {!isMobile && (
        <StyledContainer>
          <StyledSection>
            {proyecto && (
              <BoxContentPage width="95%">
                <h1>{proyecto.name.split(" ")[0]} <span style={{color: "#38ace3"}}>{proyecto.name.split(" ")[1]}</span></h1>
                <div
                  dangerouslySetInnerHTML={{ __html: proyecto.description }}
                ></div>
              </BoxContentPage>
            )}
          </StyledSection>
        </StyledContainer>
      )}
      <StyledContainerCenter>
        <StyledContainer>
          {proyecto && <Carrousel images={proyecto.images} />}
        </StyledContainer>
      </StyledContainerCenter>
      {isMobile && (
        <StyledContainer>
          <StyledSection>
            {proyecto && (
              <BoxContentPage width="95%">
              <h1>{proyecto.name.split(" ")[0]} <span style={{color: "#38ace3"}}>{proyecto.name.split(" ")[1]}</span></h1>
              <div
                  dangerouslySetInnerHTML={{ __html: proyecto.description }}
                ></div>
              </BoxContentPage>
            )}
          </StyledSection>
        </StyledContainer>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const { name } = context.query;
    let proyecto = null;
    await fetch(
      `https://super-gym-cms.tejo.uy/v1/api/project/getByName/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        }
      })
      .then((responseJson) => {
        proyecto = responseJson;
      })
      .catch((error) => {
        console.log(error);
      });

    return { props: { proyecto } };
  } catch (error) {
    console.log(error);
  }
}

ProyectDetail.Layout = SuperGymProLayout;
