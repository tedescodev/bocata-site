import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 15px;
  width: 75px;
  height: 75px;
  @media (max-width: 768px) {
    position: relative;
    width: 40px;
    height: 40px;
    top: -20px;
    left: 97%;
  }
`;

const IconService = ({ image }) => {
  return (
    <Container>
      <Image
        src={`/assets/servicios/${image}`}
        alt={image}
        layout="fill"
        objectFit="contain"
      ></Image>
    </Container>
  );
};

export default IconService;
