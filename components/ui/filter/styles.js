import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Title = styled.h5`
  @media (max-width: 768px) {
    border-width: 0 !important;
    border-style: 0 !important;
    border-color: none !important;
  }
`;

export const AngleIcon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: #d9d9d9;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
