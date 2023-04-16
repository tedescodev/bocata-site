import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: ${(props) =>
    props.width ? props.width : props.maxWidth ? "85vw" : "95vw"};
  height: ${(props) =>
    props.height ? props.height : props.maxHeight ? "70vw" : "80vh"};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`};
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`};
  position: relative;
  ${(props) => props.margin && `margin: ${props.margin};`};

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1010px) {
    width: ${(props) =>
      props.width ? props.width : props.maxWidth ? "85vw" : "98vw"};
    height: ${(props) => (props.height ? props.height : "34vh")};
  }
`;

export const Container = styled.div`
  @media (max-width: 1010px) {
    max-height: 350px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-size: ${(props) => (props.automatic ? "100%" : "cover")};
  background-repeat: no-repeat;
`;

export const Arrow = styled.div`
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) => props.left && `left: ${props.left};`}
  font-size: 35px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(68, 58, 58, 0.8);
  z-index: 2;
  @media (max-width: 1010px) {
    width: 35px;
    height: 35px;
    background-color: rgba(68, 58, 58, 0.8);
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

export const Indicator = styled.div`
  width: 32px;
  height: 4px;
  background-color: #fff;
  opacity: ${(props) => (props.isCurrent ? 1 : 0.4)};
  cursor: pointer;
`;

export const MinImagesContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const MiniImage = styled.img`
  flex-grow: 1;
  flex-basis: 0;
  width: 10rem;
  aspect-ratio: 5/3;
  object-fit: cover;
  filter: contrast(${(props) => (props.isCurrent ? "100%" : "40%")});
  cursor: pointer;
`;

export const AngleIcon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: #d9d9d9;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
