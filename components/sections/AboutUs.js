import Link from "next/link";
import Image from "next/image";

import planos from "../../public/assets/servicios/f66b874b8b1d9f33d18591906177ce71.png";
import asesoramiento from "../../public/assets/servicios/9e600651804f598b241fabdb2b1cb6ac.png";
import testing from "../../public/assets/servicios/79b3b6248c397f9553ad064df6100b77.png";
import compromiso from "../../public/assets/servicios/833878093e4715bcb4951d9a7263232d.png";

import styles from "../../styles/Home.module.css";

export default function AboutUs() {
  return (
    <section className={styles.padding60}>
      <div className="container-text">
        <h1 className="transform-initial">Desarrollo de espacios fitness</h1>
        <p>
          Nos dedicamos al desarrollo de{" "}
          <span className="highlighted">espacios de Fitness</span> para uso
          profesional en Gimnasios, Hoteles y Condominios. Contamos con el
          respaldo de Gadolex SA: una empresa con 20 años de experiencia en la
          importación y representación de artículos de fitness
        </p>
        <Link href="/sobre_nosotros">
          <a className={styles.more}>Ver más</a>
        </Link>
        <div className="display-flex flex-wrap space-between space-around-mobile">
          <div className={styles.boxService}>
            <Link href="/planos">
              <a>
                <div className={styles.boxServiceContent}>
                  <Image alt="planos" src={planos} layout="raw" />
                  <h5>Planos</h5>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.boxService}>
            <Link href="/asesoramiento">
              <a>
                <div className={styles.boxServiceContent}>
                  <Image alt="asesoramiento" src={asesoramiento} layout="raw" />
                  <h5>Asesoramiento</h5>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.boxService}>
            <Link href="/testing">
              <a>
                <div className={styles.boxServiceContent}>
                  <Image alt="testing" src={testing} layout="raw" />
                  <h5>Testing</h5>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.boxService}>
            <Link href="/compromiso">
              <a>
                <div className={styles.boxServiceContent}>
                  <Image alt="compromiso" src={compromiso} layout="raw" />
                  <h5>Compromiso</h5>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
