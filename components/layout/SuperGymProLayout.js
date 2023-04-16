import Image from "next/image";
import Link from "next/link";

import Footer from "./footer";

import SuperGymImg from "../../public/assets/b4b29384f1c826d4faaaab1bed74afe2.png";
import SuperGymProImgActive from "../../public/assets/dc08cdad611e7aabcee8bc6dbbfb87fa.png";

export default function LayoutSuperGymPro({ children }) {
  return (
    <>
      <nav className="display-flex backgroundContent only-desktop">
        <Link href="/">
          <a className="link" data-toggle="tab">
            <Image
              alt="SuperGym"
              src={SuperGymImg}
              className="imgNavbar"
              layout="raw"
            />
          </a>
        </Link>
        <Link href="/supergympro">
          <a className="link link-active" data-toggle="tab">
            <Image
              src={SuperGymProImgActive}
              alt="SuperGymActive"
              className="imgNavbar"
              layout="raw"
            />
          </a>
        </Link>
      </nav>
      <main id="supergympro">{children}
      </main>
      <Footer />
    </>
  );
}
