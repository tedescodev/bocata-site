import styles from "../../styles/Home.module.css";
import styled, { css } from "styled-components";

import MenuBar from "./MenuBar";

const HeaderPages = ({
  children,
  height,
  heightContact,
  shortVersion,
  onlyDesktop,
  backgroundBlack,
  frontPage,
  currentBrand,
  nonMenuBar
}) => {
  const headerContentImage = () => {
    let style;
    switch (frontPage) {
      case "proyectos":
        style = styles.headerContentProyects;
        break;
      case "marcas":
        style = headerContentDynamicBrand();
        break;
      case "servicios":
        style = styles.headerContentService;
        break;
      case "nosotros":
        style = styles.headerContentAboutUs;
        break;
      case "planos":
        style = styles.headerContentPlanos;
        break;
      case "asesoramiento":
        style = styles.headerContentAsesoramiento;
        break;
      case "testing":
        style = styles.headerContentTesting;
        break;
      case "compromiso":
        style = styles.headerContentCompromiso;
        break;
    }
    return style;
  };

  const headerContentDynamicBrand = () => {
    let brand;
    switch (currentBrand) {
      case "Freemotion":
        brand = styles.headerContentBrandFreemotion;
        break;
      case "Adidas":
        brand = styles.headerContentBrandAdidas;
        break;
      case "Reebok":
        brand = styles.headerContentBrandReebok;
        break;
      case "Athletic":
        brand = styles.headerContentBrandAthletic;
        break;
      case "Stages":
        brand = styles.headerContentBrandStages;
        break;
    }

    return brand;
  };

  return (
    <header
      className={`${styles.header} ${styles.headerPages} ${
        shortVersion && styles.short
      } ${backgroundBlack && styles.backgroundBlack}
      ${onlyDesktop && "header-desktop"} ${frontPage === "proyectos" && styles.heightProyects}
      `}
    >
      {frontPage !== "proyectos" ? (
        <section
          className={`${styles.headerContent} ${
            height ? styles.headerContentPagesHeight : styles.headerContentPages
          } ${headerContentImage()} ${
            heightContact && styles.headerContentPagesContact
          }`}
        >
          {" "}
          {!nonMenuBar && <MenuBar className="only-mobile" />}
          <div className={styles.childenHeader}>{children}</div>
        </section>
      ) : (
        <ChildenHeader>{children}</ChildenHeader>
      )}
    </header>
  );
};

const ChildenHeader = styled.div`
  z-index: 1;
  bottom: 0;
`;

export default HeaderPages;
