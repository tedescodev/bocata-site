import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: ${(props) => (props.ai ? props.ai : "center")};
`;

const ContainerPages = ({ ai, children }) => {
  return <Container ai={ai}>{children}</Container>;
};

export default ContainerPages;
