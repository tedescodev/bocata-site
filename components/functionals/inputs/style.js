import styled from "styled-components";

const MainContainer = styled.div`
  align-self: center;
  cursor: pointer;
  ${(props) => props.nonBorder && "width: 70%;"};
  height: 100%;
  padding-right: 10px;
`;
const Container = styled.div`
  ${(props) => (props.nonBorder ? "border-bottom: 1px solid #ccc !important;" : "border: 1px solid #979797;")};
  color: #979797;
  height: max-content;
  border-radius: ${(props) => props.nonBorder ? "0px" : "5px"};
  padding: 5px;
  margin-top: 5px;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;



const Input = styled.input`
  font-family: "Barlow Condensed" !important;
  background-color: transparent;
  border: none;
  color: #e5e5e5;
  outline: none;
  min-width: 250px;

  &::-webkit-input-placeholder {
    color: #e5e5e5;
    opacity: 1;
    font-family: "Barlow Condensed" !important;
    text-transform: initial !important;
    font-weight: 300;
  }

  &:-moz-placeholder {
    color: #e5e5e5;
    opacity: 1;
    font-family: "Barlow Condensed" !important;
    text-transform: initial !important;
    font-weight: 300;
  }

  &::-moz-placeholder {
    color: #e5e5e5;
    opacity: 1;
    font-family: "Barlow Condensed" !important;
    text-transform: initial !important;
    font-weight: 300;
  }

  &:-ms-input-placeholder {
    color: #e5e5e5;
    opacity: 1;
    font-family: "Barlow Condensed" !important;
    text-transform: initial !important;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    min-width: 100px;
  }
`;

export { MainContainer, Container, Input };
