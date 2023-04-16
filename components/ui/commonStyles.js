import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Back = styled.h3`
  cursor: pointer;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 18px !important;
  }
`;

const Label = styled.label`
  cursor: pointer;
  ${(props) => props.bold && "font-weight: bold"};
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  @media (max-width: 1010px) {
    margin-top: 2em;
    margin-left: 0;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 55px;
  justify-content: left;
  align-items: center;
  @media (max-width: 1501px) {
    grid-column-gap: 10px;
  }
  @media (max-width: 1411px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 284px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 5px;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledContainerCenter = styled.div`
  display: flex;
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "start")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "10px"};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  .container-title {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .container-image {
    position: absolute;
    img {
      width: 100px !important;
      height: 100px !important;
      opacity: 0.5;
    }
  }
  .container-text {
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-bottom: 5px;
    width: 90vw;
    margin: 0;
    text-align: left;
    h2 {
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0px;
      color: #000000;
    }
  }
  @media (min-width: 1010px) {
    ${(props) => props.padding && `padding: ${props.padding};`}
  }
  @media (max-width: 768px) {
    ${(props) => props.marginLeft && `margin-left: 30px`};
    ${(props) => props.marginRight && `margin-right: 30px`};
    .container-image {
      img {
        width: 50px !important;
        height: 50px !important;
      }
    }

    h2 {
      font-size: 13pt !important;
    }
  }
`;

const StyledSection = styled.section`
  width: 100%;
  background-position: center !important;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 2%;
  padding-bottom: 2%;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Paragraph = styled.p`
  margin: 0 !important;
  @media (max-width: 768px) {
    font-size: 11px !important;
    letter-spacing: 0px !important;
  }
`;

const ContainerAnclas = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;

const Ancla = styled.a`
  cursor: pointer;
  ${(props) => props.margin && `margin: ${props.margin};`};
  ${(props) =>
    props.colorAncla &&
    css`
      color: #38ace3 !important;
      text-decoration: underline !important;
    `}
  ${(props) =>
    props.nonGradient &&
    css`
      color: #fff !important;
      text-decoration: underline !important;
    `}
`;

const ContainerText = styled.div`
  color: #fff;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 1499px) {
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const ContainerImage = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
    img {
      height: 100%;
    }
  }
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 43px;
  z-index: 2;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%);
  @media (max-width: 768px) {
    height: 70px;
    margin-top: 0px;
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
`;

const HeaderContent = styled.section`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  nav {
    display: flex;
  }
  .menuBar {
    display: flex;
    justify-content: flex-end;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 80%
    );
  }
  .headerContentPages {
    min-height: 45vh;
    width: 100%;
    background-position: center !important;
  }
  @media (max-width: 768px) {
    .menuBar {
      justify-content: space-between;
    }
  }
`;

const PageContent = styled.section`
  background-color: #e5e5e5;
  position: relative;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 4%;
  padding-bottom: 5%;
  margin-top: 100px;
  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 0px;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled(FontAwesomeIcon)`
  z-index: 1;
  font-size: 25px;
  color: #38ace3;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContainerSection = styled.div`
  padding: 0px 50px 30px 50px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerCols = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 1240px) {
    flex-direction: column;
  }
`;

const LeftColProduct = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 1240px) {
    width: 100% !important;
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const RigthColProduct = styled.div`
  position: relative;
  width: 50%;
  @media (max-width: 1240px) {
    width: 100% !important;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ImgProduct = styled.div`
  position: absolute;
  ${
    "" /* width: 90%;
  display: block;
  height: 80%;
  margin: auto;
  @media (max-width: 768px) {
    height: 100% !important;
  } */
  }
  height: 90%;
  width: 100%;
  background: ${(props) => props.image && `transparent url(${props.image})`} 0%
    0% padding-box;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export {
  Back,
  Label,
  CardContainer,
  CardContent,
  ContainerSection,
  Container,
  ContainerCols,
  LeftColProduct,
  RigthColProduct,
  ImgProduct,
  StyledContainer,
  StyledContainerCenter,
  StyledSection,
  Paragraph,
  ContainerAnclas,
  Ancla,
  ContainerText,
  ContainerImage,
  GradientContainer,
  HeaderContent,
  PageContent,
  StyledFlex,
  IconWrapper,
};
