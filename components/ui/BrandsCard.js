import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import styles from "../../styles/Home.module.css";

import Freemotion from "../../public/assets/marcas/Freemotion.png";
import Stages from "../../public/assets/marcas/Stages.png";
import Athletic from "../../public/assets/marcas/Athletic.png";
import Reebok from "../../public/assets/marcas/Reebok.png";
import Adidas from "../../public/assets/marcas/Adidas.png";

export default function BrandsCard({ handleShowBrands }) {
  return (
    <div
      className={`${styles.brands} only-desktop menu-marcas`}
      onMouseOver={() => handleShowBrands(true)}
      onMouseOut={() => handleShowBrands(false)}
    >
      <div className="col-menu-marcas">
        <div className="box-marca">
          <Link href="/marcas?brand=Freemotion">
            <Ancla>
              <Image src={Freemotion} layout="raw" alt="Freemotion" />
            </Ancla>
          </Link>
        </div>
        <div className="box-marca">
          <Link href="/marcas?brand=Athletic">
            <Ancla>
              <Image src={Athletic} layout="raw" alt="Athletic" />
            </Ancla>
          </Link>
        </div>
        <div className="box-marca">
          <Link href="/marcas?brand=Reebok">
            <Ancla>
              <Image src={Reebok} layout="raw" alt="Reebok" />
            </Ancla>
          </Link>
        </div>
      </div>
      <div className="col-menu-marcas">
        <div className="box-marca">
          <Link href="/marcas?brand=Adidas">
            <Ancla>
              <Image src={Adidas} layout="raw" alt="Adidas" />
            </Ancla>
          </Link>
        </div>
        <div className="box-marca">
          <Link href="/marcas?brand=Stages">
            <Ancla>
              <Image src={Stages} layout="raw" alt="Stages" />
            </Ancla>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Ancla = styled.a`
  cursor: pointer;
  ${(props) =>
    props.colorAncla &&
    css`
      color: #38ace3 !important;
      text-decoration: underline !important;
    `}
`;
