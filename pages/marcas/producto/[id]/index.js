import Head from "next/head";
import Link from "next/link";
import Error from "next/error";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import styles from "../../../../styles/Home.module.css";

import SuperGymProLayout from "../../../../components/layout/SuperGymProLayout";
import ButtonComponent from "../../../../components/form/Button";
import BoxContentPage from "../../../../components/ui/BoxContentPage";
import {
  Back,
  ContainerSection,
  Container,
  ContainerCols,
  LeftColProduct,
  RigthColProduct,
  ImgProduct,
} from "../../../../components/ui/commonStyles";
import NavDesktop from "../../../../components/layout/nav/NavDesktop";
import MenuBar from "../../../../components/ui/MenuBar";

export default function Product({ articulo }) {
  const router = useRouter();
  const [defaultImage, setDefaultImage] = useState(null);

  useEffect(() => {
    if (articulo && articulo.images && articulo.images.length > 0) {
      const image = articulo.images.find((img) => img.default === true);
      setDefaultImage(image);
    }
  }, [articulo]);

  return (
    <div>
      {!articulo && <Error statusCode={503} />}
      <Head>
        <title>{articulo ? articulo.name : "Articulo"}</title>
        <meta name="description" content={articulo && articulo.name} />
        {articulo &&
          articulo.tags &&
          articulo.tags.length > 0 &&
          articulo.tags.map((tag) => {
            return <meta key={tag.id} name={tag.name} />;
          })}
      </Head>
      <NavDesktop nonGradient />
      <section className={`${styles.headerContent} ${styles.contentPages}`}>
        <MenuBar className="only-mobile" nonGradient />
        <ContainerSection>
          <Back onClick={router.back}>{"<< Volver a la página anterior"}</Back>
          <BoxContentPage displayFlex={true} minHeight="500px" height="100%">
            <Container>
              <div>
                <h2 className="uppercase">
                  {articulo && articulo.name}{" "}
                  {articulo.model && (
                    <span style={{ color: "#38ace3" }}>{articulo.model}</span>
                  )}
                </h2>
              </div>
              <ContainerCols>
                <LeftColProduct>
                  {defaultImage && (
                    <ImgProduct image={defaultImage.image.trim()} />
                  )}
                  {/* {defaultImage && (
                  <Image
                    unoptimized
                    src={defaultImage.image.trim()}
                    alt={defaultImage.name}
                    layout="fill"
                  />
                )} */}
                </LeftColProduct>
                <RigthColProduct>
                  <h2></h2>
                  {articulo && (
                    <div
                      dangerouslySetInnerHTML={{ __html: articulo.description }}
                    ></div>
                  )}
                  <Link href={`/contacto`}>
                    <ButtonComponent variant="btn1">Cotizar</ButtonComponent>
                  </Link>
                </RigthColProduct>
              </ContainerCols>
            </Container>
          </BoxContentPage>
        </ContainerSection>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    let articulo = null;
    const article = await fetch(`https://super-gym-cms.tejo.uy/v1/api/article/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    articulo = await article.json();

    return { props: { articulo } };
  } catch (error) {
    console.log(error);
  }
}

Product.Layout = SuperGymProLayout;
