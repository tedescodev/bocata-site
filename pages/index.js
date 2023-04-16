import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import LogoHome from "../public/assets/b4b29384f1c826d4faaaab1bed74afe2.png";
import LogoPro from "../public/assets/dc08cdad611e7aabcee8bc6dbbfb87fa.png";

import HomeLayout from "../components/layout/HomeLayout";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  })
  return (
    <div>
      <Head>
        <title>SuperGym</title>
        <meta
          name="description"
          content="Nos dedicamos al desarrollo de espacios de Fitness para uso
          profesional en Gimnasios, Hoteles y Condominios."
        />
      </Head>

      <section>
        <div className="display-flex display-column-mobile">
          <Link href="/">
            <a className={styles.linkIndex}>
              <div className={`${styles.imgIndexLeft} ${styles.imgIndex}`}>
                <div
                  className={`${
                    styles.maskWhite
                  } ${"full-height full-width flex-center flex-vertical"}`}
                >
                  <Image
                    alt="logo-supergym"
                    src={LogoHome}
                    className={styles.logoIndex}
                    layout="raw"
                  />
                  <label className={styles.descriptionIndex}>Hogar</label>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/supergympro">
            <a className={styles.linkIndex}>
              <div className={`${styles.imgIndexRight} ${styles.imgIndex}`}>
                <div
                  className={`${
                    styles.maskBlack
                  } ${"full-height full-width flex-center flex-vertical"}`}
                >
                  <Image
                    alt="logo-supergympro"
                    src={LogoPro}
                    className={styles.logoIndex}
                    layout="raw"
                  />
                  <label className={`${styles.descriptionIndex} text-white`}>
                    Gimnasios / hoteles / Condominios
                  </label>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

Home.Layout = HomeLayout;
