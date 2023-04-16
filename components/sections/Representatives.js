import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Freemotion from "../../public/assets/marcas/Freemotion.png";
import Stages from "../../public/assets/marcas/Stages.png";
import Athletic from "../../public/assets/marcas/Athletic.png";
import Reebok from "../../public/assets/marcas/Reebok.png";
import Adidas from "../../public/assets/marcas/Adidas.png";

import styles from "../../styles/Home.module.css";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function Representatives() {
  return (
    <section
      className={`${styles.padding60} background-grey-mobile only-mobile`}
    >
      <div className="container-text">
        <h3>Representates exclusivos</h3>
        <Swiper
          slidesPerView={1.5}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="slider"
        >
          <SwiperSlide>
            <Link href="/marcas?brand=Athletic">
              <a>
                <div className={`${styles.slideAthletic} ${styles.slide}`}>
                  <Image src={Athletic} layout="raw" alt={Athletic} />
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/marcas?brand=Freemotion">
              <a>
                <div className={`${styles.slideFreemotion} ${styles.slide}`}>
                  <Image src={Freemotion} layout="raw" alt={Freemotion} />
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/marcas?brand=Adidas">
              <a href="/adidas">
                <div className={`${styles.slideAdidas} ${styles.slide}`}>
                  <Image src={Adidas} layout="raw" alt={Adidas} />
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/marcas?brand=Stages">
              <a href="/stages">
                <div className={`${styles.slideStages} ${styles.slide}`}>
                  <Image src={Stages} layout="raw" alt={Stages} />
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/marcas?brand=Reebok">
              <a>
                <div className={`${styles.slideReebok} ${styles.slide}`}>
                  <Image src={Reebok} layout="raw" alt={Reebok} />
                </div>
              </a>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="text-right">
          <Link href="/catalogo">
            <a>
              <h5 className="uppercase decoration-underline">
                Descargá el catálogo completo acá
              </h5>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
