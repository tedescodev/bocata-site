import Link from "next/link";
import Image from "next/image";
import img from "../../../public/assets/b4b29384f1c826d4faaaab1bed74afe2.png";

import styled from "styled-components";

const ButtonStyled = styled.div`
  width: max-content;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 10;
  background: #e5e5e5;
  padding: 5px 10px 2px 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px #696969;
  img {
    width: 100px;
    height: auto;
  }
  h5 {
    margin: 0;
    text-align: center;
    font-size: 9px;
    letter-spacing: 1px;
    margin-top: -3px;
  }
`;

export default function BtnFloat() {
  return (
    <>
      <Link href="https://supergym.uy/">
        <ButtonStyled>
          <Image src={img} layout="raw" alt="image" />
          <h5 className="uppercase">Hogar</h5>
        </ButtonStyled>
      </Link>
    </>
  );
}
