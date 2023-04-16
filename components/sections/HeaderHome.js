import Image from "next/image";

import styled from "styled-components";
import styles from "../../styles/Home.module.css";

import BrandsSlide from "../ui/BrandsSlide";

import SuperGymProImgActive from "../../public/assets/dc08cdad611e7aabcee8bc6dbbfb87fa.png";

export default function HeaderHome() {
  return (
    <section className={styles.headerContent}>
      <Container>
        <ImageLogoContainer>
          <Image
            className="margin-auto"
            src={SuperGymProImgActive}
            alt="SuperGymProLogo"
          />
          <h5> - Planificación de espacios fitness y venta de equipos - </h5>
        </ImageLogoContainer>
      </Container>
      <BrandsSlide className="only-desktop" />
    </section>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
`;
const ImageLogoContainer = styled.div`
  display: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 405px !important;
    height: 42px !important;
  }
  h5 {
    margin-top: 5px;
  }
  @media (max-width: 768px) {
    img {
      min-width: 0 !important;
      min-height: 0 !important;
      width: 240px !important;
      height: 30px !important;
    }
  }
`;
