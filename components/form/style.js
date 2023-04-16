import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormGroup = styled.div`
  padding: 15px 0;

  ${(props) =>
    props.inline &&
    css`
      display: flex;
    `}
  ${(props) =>
    props.textRigth &&
    css`
      text-align: right;
    `}

  @media (max-width: 768px) {
    padding-bottom: 5px !important;
  }
`;

const Form = styled.form`
  ${(props) => props.width && `width: 400px;`}
  @media (max-width: 543px) {
    ${(props) => props.width && `width: 350px;`}
  }
`;

const InputGroup = styled.div`
  position: relative;
  ${(props) =>
    props.width && `width: ${props.width};`
  }
  @media (max-width: 768px) {
    padding-bottom: 0px !important;
  }
`;

const Input = styled.input`
  font-size: 17px;
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #656565;
  color: #646464;
  width: 100%;
  padding: 9px;
  @media (max-width: 768px) {
    font-size: 14px;
    font-family: "Barlow Condensed";
    text-transform: uppercase;
    color: #646464;
  }

  ${(props) =>
    props.isValid === "true" &&
    css`
      border: 1px solid hsl(112, 66%, 52%);
    `}

  ${(props) =>
    props.isValid === "false" &&
    css`
      border: 1px solid hsl(351, 98%, 49%) !important;
    `}

    ${(props) =>
    props.inline &&
    css`
      border-radius: 10px 0 0 10px !important;
    `}
`;

const TextArea = styled.textarea`
  font-size: 17px;
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #656565;
  color: #646464;
  width: 100%;
  padding: 9px;
  @media (max-width: 768px) {
    font-size: 14px;
    font-family: "Barlow Condensed";
    text-transform: uppercase;
    color: #646464;
  }
  ${(props) =>
    props.isValid === "true" &&
    css`
      border: 1px solid hsl(112, 66%, 52%);
    `}

  ${(props) =>
    props.isValid === "false" &&
    css`
      border: 1px solid hsl(351, 98%, 49%) !important;
    `}

    ${(props) =>
    props.inline &&
    css`
      border-radius: 10px 0 0 10px !important;
    `}
`;

const Label = styled.label`
  font-size: 19px;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  display: block;
  @media (max-width: 768px) {
    font-size: 10pt;
  }
`;

const FeedbackError = styled.p`
  font-size: 12px;
  margin: 0;
  color: hsl(351, 98%, 49%);
  display: none;
  ${(props) =>
    props.isValid === "false" &&
    css`
      display: block;
    `}
`;

const MessageSuccess = styled.p`
  font-size: 14px;
  color: hsl(112, 66%, 52%);
`;

const MessageError = styled.div`
  height: auto;
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 1;
  font-size: 16px;
  color: hsl(112, 66%, 52%);
  opacity: 0;
  ${(props) =>
    props.isValid === "true" &&
    css`
      opacity: 1;
      color: hsl(112, 66%, 52%);
    `}

  ${(props) =>
    props.isValid === "false" &&
    css`
      opacity: 1;
      color: hsl(351, 98%, 49%);
    `}

  @media (max-width: 768px) {
    bottom: 15px;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 5px 30px;
  &:hover {
    cursor: pointer;
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
  ${(props) =>
    props.inline &&
    css`
      border-radius: 0 10px 10px 0 !important;
    `}

  ${(props) =>
    props.variant === "btn1" &&
    css`
      font-weight: 500;
      font-size: 21px;
      margin-top: -2px;
      text-transform: uppercase;
      background-color: #000000;
      color: #cfcfcf;
      font-family: "Barlow Condensed" !important;
      &:disabled {
        background-color: #656565;
      }
    `}

    ${(props) =>
    props.variant === "btn2" &&
    css`
      font-weight: 400;
      font-size: 21px;
      background-color: #656565;
      color: #ffffff;
    `}

    ${(props) =>
    props.variant === "btn3" &&
    css`
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase;
      background-color: #e5e5e5;
      color: #656565;
      border: 1px solid #707070;
      padding: 12px;
      font-family: "Barlow Condensed";
    `}
`;

const InputFile = styled.input`
  border-radius: 10px;
  padding: 5px 30px;
  &:hover {
    cursor: pointer;
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
  ${(props) =>
    props.inline &&
    css`
      border-radius: 0 10px 10px 0 !important;
    `}

  ${(props) =>
    props.variant === "btn1" &&
    css`
      font-weight: 500;
      font-size: 21px;
      text-transform: uppercase;
      background-color: #000000;
      color: #cfcfcf;
      font-family: "Barlow Condensed" !important;
      &:disabled {
        background-color: #656565;
      }
    `}

    ${(props) =>
    props.variant === "btn2" &&
    css`
      font-weight: 400;
      font-size: 21px;
      background-color: #656565;
      color: #ffffff;
    `}

    ${(props) =>
    props.variant === "btn3" &&
    css`
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase;
      background-color: #e5e5e5;
      color: #656565;
      border: 1px solid #707070;
      padding: 12px;
      font-family: "Barlow Condensed";
    `}
`;

export {
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputFile,
  TextArea,
  Label,
  FeedbackError,
  IconValidation,
  MessageError,
  MessageSuccess,
  Button,
};
