import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  align-items: center;
`;

const SocialContainer = styled.div`
  width: 50%;
  padding-right: 60px;
  img {
    height: 24px;
    width: auto;
    margin: 0px 10px 0 0;
  }
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 30px;
    width: 100%;
    img {
      max-width: 14px !important;
      max-height: 14px !important;
    }
    label a {
      font-weight: 400 !important;
      font-size: 11pt !important;
    }
  }
`;

export { Centered, SocialContainer };
