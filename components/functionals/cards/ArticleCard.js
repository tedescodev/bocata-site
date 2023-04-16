import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArticleCardStyled,
  ElementBox,
  ContainerCenter,
  ContainerBrand,
  Title,
} from "./style";

import Freemotion from "../../../public/assets/marcas/black/freemotionblack.png";
import Stages from "../../../public/assets/marcas/black/stagesblack.png";
import Athletic from "../../../public/assets/marcas/black/athleticblack.png";
import Reebok from "../../../public/assets/marcas/black/reebok.png";
import Adidas from "../../../public/assets/marcas/black/adidasblack.png";

// import BASE_CONNECTION_STRING from "../../config"

const ArticleCard = ({ article, brand }) => {
  const { id, name, model } = article;
  const [defaultImage, setDefaultImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getById();
  }, [article]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getById = async () => {
    await fetch(
      `https://super-gym-cms.tejo.uy/v1/api/article/${id}`,
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
        if (responseJson.images && responseJson.images.length > 0) {
          const image = responseJson.images.find((img) => img.default === true);
          setDefaultImage(image);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectImageBrand = () => {
    let img;
    switch (brand) {
      case "Freemotion":
        img = { name: "Freemotion", src: Freemotion };
        break;
      case "Adidas":
        img = { name: "Adidas", src: Adidas };
        break;
      case "Reebok":
        img = { name: "Reebok", src: Reebok };
        break;
      case "Stages":
        img = { name: "Stages", src: Stages };
        break;
      case "Athletic":
        img = { name: "Athletic", src: Athletic };
        break;
    }

    return img;
  };

  return (
    <ArticleCardStyled onClick={() => router.push(`/marcas/producto/${id}`)}>
      <ElementBox>
        <ContainerBrand>
          <Image
            alt={selectImageBrand().name}
            src={selectImageBrand().src}
            filter="blue"
            layout="raw"
          />
        </ContainerBrand>
        {defaultImage && <ContainerCenter image={defaultImage.image.trim()} />}
        <Title>
          {name}
          {model && (
            <span> {model}</span>
          )}
        </Title>
      </ElementBox>
    </ArticleCardStyled>
  );
};

export default ArticleCard;
