import Link from "next/link";

import styles from "../../styles/Home.module.css";

export default function Projects() {
  return (
    <section>
      <div className="padding-left-60 padding-right-60">
        <div className="container-text">
          <h2>
            <span className="text-primary">Proyectos</span> realizados por
            Supergym Pro
          </h2>
        </div>
      </div>
      <div className={styles.boxProjects}>
        <div className={styles.boxImgAzure}>
          <div className={styles.contentText}>
            <h3 className="margin0">Condominio Azure</h3>
            <p>
              En Azure organizamos el espacio según los planos que nos
              proporcionaron, ambientando un área fitness donde los propietarios
              pueden establecer su salud física de una manera disfrutable y
              próspera.
            </p>
            <Link href="/proyectos">
              <a>
                <p className="text-primary">Ver más proyectos</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
