import styled from "styled-components";

const ArticleCardStyled = styled.div`
  cursor: pointer;
  border-radius: 15px;
  width: 335px;
  height: ${(props) => (props.height ? props.height : "420px")};
  margin-bottom: 30px;

  @media (max-width: 890px) {
    width: 300px;
    height: ${(props) => (props.heigthMob ? props.heigthMob : "364px")};
    padding: 0;
    margin-bottom: 10px;
    &:nth-child(2n) {
      padding-right: 0;
    }
    &:nth-child(2n + 1) {
      padding-left: 0;
    }
  }
  @media (max-width: 643px) {
    padding: 0;
    width: 225px;
    height: 270px;
    margin-bottom: 20px;
  }
  @media (max-width: 482px) {
    padding: 0;
    width: 169px;
    height: 230px;
    margin-bottom: 20px;
  }
`;
const ElementBox = styled.div`
  border-radius: 15px;
  background: #ffffff;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerCenter = styled.div`
  padding: 5px;
  text-align: center;
  border-radius: 15px;
  height: 100%;
  background: ${(props) => props.image && `transparent url(${props.image})`} 0%
    0% padding-box;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const ContainerBrand = styled.div`
  height: 40px;
  max-height: 40px;
  padding: 4px;
  margin-right: 5px;
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    height: 30px;
    width: 70px;
  }
  @media (max-width: 890px) {
    margin-right: 0px;
    height: 25px;
    img {
      height: 20px;
      width: 60px;
    }
  }
`;

const ProjectCardStyled = styled.div`
  position: relative;
  margin: 10px;
  border-radius: 20px;
  width: 361px;
  height: 315px;
  opacity: 1;
  background: ${(props) => props.image && `transparent url(${props.image})`} 0%
    0% padding-box;
  background-size: auto 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 782px) {
    height: 21vh;
    width: 25vh;
    margin: 5px;
  }
  @media (max-width: 543px) {
    width: 21vh;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  background: #000000;
  margin: 0;
  padding: 15px;
  text-transform: uppercase;
  font-family: "Barlow Condensed";
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Foot = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 0;
  padding: 10px;
  width: 361px;
  height: 48px;
  background: #000000 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 20px 20px;
  opacity: 0.47;
  font: normal normal normal 16px/19px "Barlow Condensed";
  color: #ffffff;
  text-transform: uppercase;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContainerRight = styled.div`
  text-align: right;
`;

export {
  ArticleCardStyled,
  ElementBox,
  ContainerRight,
  ContainerCenter,
  ContainerBrand,
  Title,
  Foot,
  ProjectCardStyled,
};
