import styled, { css } from "styled-components";
import Modal from "styled-react-modal";

const NavDesktopStyled = styled.nav`
  background-color: #000000;
  color: #ffffff;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 3;
  div {
    display: flex;
  }
  a h5 {
    margin: 10px 20px;
    font-size: 16px;
  }
  ${(props) =>
    props.backgoundGradient &&
    css`
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 80%
      );
    `}
`;

const StyledModal = styled.div`
  position: absolute;
  top: 40px;
  border-radius: 6px;
  box-shadow: inset 1px 1px 0 0 #fffff80, 0 3px 8px 0 #555a64;
  flex-direction: column;
  width: 500px;
  max-width: 560px;
  background: #000000;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 65px auto auto;
  }
`;

const ContainerResults = styled.div`
  flex-direction: column;
  width: 100%;
  max-height: 600px;
  min-height: 12px;
  overflow-y: auto;
  overflow-y: overlay;
  padding: 0 12px;
  scrollbar-color: white #f5f6f7;
  scrollbar-width: thin;
`;

const SectionResult = styled.section`
  box-sizing: border-box;
`;

const SectionTitle = styled.section`
  background: #000000;
  color: #38ace3;
  font-size: 0.85em;
  font-weight: 600;
  line-height: 32px;
  margin: 0 -4px;
  padding: 8px 4px 0;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LiStyled = styled.li`
  border-radius: 4px;
  display: flex;
  padding-bottom: 4px;
  position: relative;
`;

const AStyled = styled.a`
  background: #fff;
  border-radius: 4px;
  display: block;
  padding-left: 12px;
  width: 100%;
  cursor: pointer;
  color: #444950;
  :hover {
    color: white !important;
    background: #38ace3;
    span {
      font-weight: 600 !important;
    }
    svg {
      color: white !important;
    }
  }
`;

const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 0 12px 0 0;
`;

const IconItem = styled.div`
  color: #969faf;
  height: 100%;
  width: 56px;
  border-radius: 5px;
  background: ${(props) => props.src && `transparent url(${props.src})`} 0% 0%
    padding-box;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const IconAction = styled.div`
  color: #969faf;
  height: 20px;
  width: 20px;
  transform: rotate(90deg);
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-weight: 500;
  font-family: "Barlow Condensed" !important;
  font-size: 17px;
  justify-content: center;
  line-height: 1.2em;
  margin: 0 8px;
  overflow-x: hidden;
  position: relative;
  width: 80%;
`;

export {
  NavDesktopStyled,
  ContainerResults,
  SectionResult,
  SectionTitle,
  UlStyled,
  LiStyled,
  AStyled,
  ItemContainer,
  StyledModal,
  IconItem,
  IconAction,
  TextContainer,
};
