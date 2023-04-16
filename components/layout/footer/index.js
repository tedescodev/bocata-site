import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/Home.module.css";
import styled from "styled-components";

import email from "../../../public/assets/iconos/0f2ac8ff1ede82f23b78d9d596001a59.png";
import celular from "../../../public/assets/iconos/4182b15607adab259eed7ea73033648a.png";
import ubicacion from "../../../public/assets/iconos/6887b748ac2772d6f2944d0743d9fe8a.png";
import telefono from "../../../public/assets/iconos/c5e16c3614f7d1f6fb71684de8b7b007.png";

import Freemotion from "../../../public/assets/marcas/Freemotion.png";
import Stages from "../../../public/assets/marcas/Stages.png";
import Atletic from "../../../public/assets/marcas/Athletic.png";
import Reebok from "../../../public/assets/marcas/Reebok.png";
import Adidas from "../../../public/assets/marcas/Adidas.png";

import {Centered, SocialContainer} from "./style"

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="container-text">
          <h3 className="white-color">Contactanos</h3>
          <div className="display-flex social-container">
            <SocialContainer>
              <label>
                <Centered>
                  <Link href="mailto:supergympro@gadolex.com">
                    <a>
                      <Image alt="social-image" src={email} layout="raw" />
                      supergympro@gadolex.com
                    </a>
                  </Link>
                </Centered>
              </label>
              <label>
                <Centered>
                  <Link href="tel:+5982924 3689">
                    <a>
                      <Image alt="social-image" src={telefono} layout="raw" />
                      2924 3689 int 102
                    </a>
                  </Link>
                </Centered>
              </label>
              <label>
                <Centered>
                  <Link href="https://api.whatsapp.com/send/?phone=%2B59892001727&text&type=phone_number&app_absent=0">
                    <a>
                      <Image alt="social-image" src={celular} layout="raw" />
                      092 001 727
                    </a>
                  </Link>
                </Centered>
              </label>
              <label>
                <Centered>
                  <Link href="https://goo.gl/maps/reHcTWM68wjr9Tht5">
                    <a>
                      <Image alt="social-image" src={ubicacion} layout="raw" />
                      Isidoro de María 1727, esq Arenal Grande
                    </a>
                  </Link>
                </Centered>
              </label>
            </SocialContainer>
            <div className="shortcuts">
              <Link href="/sobre_nosotros">
                <a>
                  <label>Sobre nosotros</label>
                </a>
              </Link>
              <Link href="/catalogo">
                <a>
                  <label>Descargar catálogo</label>
                </a>
              </Link>
              <Link href="/service">
                <a>
                  <label className="white-color">Service</label>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="branding">
        <div className="container-text">
          <label>
            © 2022 supergympro | <span className="gadolex">Gadolex</span>
          </label>
        </div>
      </div>
      <div className={"space-between " + styles.brands}>
        <div className="container-text">
          <Image alt="brand-image" src={Freemotion} layout="raw" />
          <Image alt="brand-image" src={Atletic} layout="raw" />
          <Image alt="brand-image" src={Reebok} layout="raw" />
          <Image alt="brand-image" src={Adidas} layout="raw" />
          <Image alt="brand-image" src={Stages} layout="raw" />
        </div>
      </div>
    </footer>
  );
}
