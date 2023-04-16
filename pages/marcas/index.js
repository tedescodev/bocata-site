import { useState, useEffect } from "react";

import styled from "styled-components";

import Head from "next/head";
import Image from "next/image";
import Error from "next/error";
import { useRouter } from "next/router";

import LogoIFit from "../../public/assets/iFitLogo.png";
import LogoWorld from "../../public/assets/world.png";
import {
  CardContainer,
  CardContent,
  Paragraph,
  StyledContainer,
  StyledContainerCenter,
} from "../../components/ui/commonStyles";
import TitlePages from "../../components/ui/TitlePages";
import styles from "../../styles/Home.module.css";

import SuperGymProLayout from "../../components/layout/SuperGymProLayout";

import ArticleCard from "../../components/functionals/cards/ArticleCard";
import HeaderPages from "../../components/ui/HeaderPages";
import BoxContentSection from "../../components/sections/BoxContentSection";
import NavDesktop from "../../components/layout/nav/NavDesktop";
import FilterBox from "../../components/ui/filter/FilterBox";
import Carrousel from "../../components/ui/carrousel";
import MenuBar from "../../components/ui/MenuBar";

const LogoiFitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 90px;
  @media (max-width: 768px) {
    width: 70px;
    height: 40px;
  }
`;

export default function Marcas({ categorias, marcas }) {
  const router = useRouter();
  const { brand, category } = router.query;

  const [renderState, setRenderState] = useState([]);

  const [brandFilter, setBrandFilter] = useState(brand ? brand : "Freemotion");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [brandImages, setImagesBrand] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterFn = () => {
    let filteredResult = [];

    if (brandFilter) {
      filteredResult = marcas.find((i) => i.name === brandFilter).articles;
    }
    if (categoryFilter) {
      const arts = categorias.find((i) => i.name === categoryFilter).articles;
      let newFiltered = [];
      for (const art in arts) {
        const isArt = filteredResult.find((i) => i.id === arts[art].id);
        if (isArt) {
          newFiltered = [...newFiltered, isArt];
        }
      }
      setRenderState(newFiltered);
      return;
    }
    setRenderState(filteredResult);
  };

  useEffect(() => {
    filterFn();
    if (brandFilter) {
      let br = marcas.find((i) => i.name === brandFilter);
      br.images.length > 0 ? setImagesBrand(br.images) : setImagesBrand([]);
    }
  }, [brandFilter, categoryFilter]);

  useEffect(() => {
    if (brand) {
      setBrandFilter(brand);
    }
  }, [brand]);

  useEffect(() => {
    setCategoryFilter(category);
  }, [category]);

  return (
    <div>
      {(!categorias || !marcas) && <Error statusCode={503} />}
      <Head>
        <title>{`${brandFilter} - SuperGymPro`}</title>
      </Head>
      <NavDesktop />
      <MenuBar className="only-mobile" nonGradient />
      <HeaderPages frontPage="marcas" currentBrand={brandFilter} nonMenuBar />

      <section
        className={`${styles.padding60} ${styles.contentPages} ${styles.marcas}`}
      >
        <FilterBox
          marcas={marcas}
          categorias={categorias}
          currentBrand={brandFilter}
          categoryFilter={categoryFilter}
          handleBrand={(brand) => {
            // setBrandFilter(brand)
            router.replace(`/marcas?brand=${brand}`)
            }}
          handleCategory={(category) =>
            setCategoryFilter(categoryFilter === category ? null : category)
          }
        />
        <CardContainer>
          <CardContent>
            {renderState.length > 0 &&
              renderState
                .sort((a, b) => a.orderItem - b.orderItem)
                .map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    brand={brandFilter}
                  />
                ))}
          </CardContent>
        </CardContainer>
      </section>
      {brandFilter === "Freemotion" && (
        <BoxContentSection bgColor="#D1D1D1">
          <TitlePages marginBottom="5px">
            <LogoiFitContainer>
              <Image src={LogoIFit} alt="iFit" />
            </LogoiFitContainer>
          </TitlePages>
          <Paragraph>
            Los equipos de freemotion utilizan una tecnología específica del
            mundo fitness.{" "}
          </Paragraph>
          <Paragraph>
            iFit es un programa de entrenamiento físico inteligente que se
            adapta perfectamente al usuario sea cual sea su rutina diaria. Este
            programa se encuentra tanto en los aparatos de fitness, como en
            pulseras de actividad y monitores de sueño, por lo que está
            preparado para ofrecer un programa de ejercicio completo y
            totalmente personalizado.
          </Paragraph>
          <Paragraph>
            Además la aplicación móvil iFit Coach permite crear un plan de
            entrenamiento hecho a medida y tenerlo siempre a disposición desde
            cualquier lugar.
          </Paragraph>
        </BoxContentSection>
      )}
      {brandImages.length > 0 && (
        <StyledContainerCenter
          flexDirection="column"
          marginTop="76px"
          marginLeft="90px"
          marginRight="90px"
          marginBottom="45px"
        >
          <div className="container-title">
            <div className="container-image">
              <Image src={LogoWorld} alt="iFit" />
            </div>
            <div className="container-text">
              <h2>
                {`Otros lugares del mundo eligiendo ${brandFilter}`}
                {/* <span className="text-primary">Proyectos</span> realizados por
              Supergym Pro */}
              </h2>
            </div>
          </div>
          <StyledContainer width="1280px" height="720px">
            <Carrousel automatic images={brandImages} />
          </StyledContainer>
        </StyledContainerCenter>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const orderBrands = {
      Freemotion: 1,
      Athletic: 2,
      Reebok: 3,
      Adidas: 4,
      Stages: 5,
    };
    let categorias = null;
    let marcas = null;

    await fetch(`https://super-gym-cms.tejo.uy/v1/api/category`, {
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
        categorias = responseJson;
        categorias.sort((a, b) => {
          if (a < b) return -1;
          else if (a > b) return 1;
          return 0;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    await fetch(`https://super-gym-cms.tejo.uy/v1/api/brand`, {
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
        marcas = responseJson;
        marcas.sort((a, b) => orderBrands[a.name] - orderBrands[b.name]);
      })
      .catch((error) => {
        console.log(error);
      });

    return { props: { categorias, marcas } };
  } catch (error) {
    console.log(error);
  }
}

Marcas.Layout = SuperGymProLayout;
