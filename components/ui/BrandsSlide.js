import Image from "next/image";

import styled from "styled-components";

import Freemotion from "../../public/assets/marcas/Freemotion.png";
import Stages from "../../public/assets/marcas/Stages.png";
import Athletic from "../../public/assets/marcas/Athletic.png";
import Reebok from "../../public/assets/marcas/Reebok.png";
import Adidas from "../../public/assets/marcas/Adidas.png";

export default function BrandsSlide({className}) {
  return (
    <ContainerBrands className={className}>
      <div className="container-text">
        <Image alt="brand-image" src={Freemotion} layout="raw" />
        <Image alt="brand-image" src={Stages} layout="raw" />
        <Image alt="brand-image" src={Athletic} layout="raw" />
        <Image alt="brand-image" src={Reebok} layout="raw" />
        <Image alt="brand-image" src={Adidas} layout="raw" />
      </div>
    </ContainerBrands>
  );
}

const ContainerBrands = styled.div`
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  min-height: 49px !important;
  align-self: baseline;
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    height: fit-content;
    width: fit-content;
    max-width: 9vw;
    max-height: 5vh;
    align-self: baseline;
  }
`;
