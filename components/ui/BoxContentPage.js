import styled from "styled-components";

const StyledBoxContentPages = styled.div`
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 40px;
  padding: 50px;
  opacity: 1;
  ${(props) => props.displayFlex && "display: flex"};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};

  h1 {
    margin: 0;
  }
  p {
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 14px/16px "Raleway";
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: grid;
    padding: 20px;
    ${(props) => props.height && `height: 100%;`};
  }
`;

const BoxContentPages = ({ width, height, minHeight, displayFlex, children }) => {
  return (
    <StyledBoxContentPages
      width={width}
      height={height}
      minHeight={minHeight}
      displayFlex={displayFlex}
    >
      {children}
    </StyledBoxContentPages>
  );
};

export default BoxContentPages;
