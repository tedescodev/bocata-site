import styled from "styled-components";

const Title = styled.h1`
  margin-top: 0;
  font-size: 33px;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "20px"};
  @media (max-width: 768px) {
    font-size: 22px;
  }
  
`;

const TitlePages = ({ marginBottom, children }) => {
  return <Title marginBottom={marginBottom}>{children}</Title>;
};

export default TitlePages;
