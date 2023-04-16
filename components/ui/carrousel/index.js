import React, { useEffect, useState } from "react";

import { useWindowSize } from "../../../utility/windowsSizeHook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Wrapper,
  IndicatorContainer,
  MinImagesContainer,
  Indicator,
  Arrow,
  Image,
  MiniImage,
  AngleIcon,
} from "./styles";

const CarrouselSlider = ({ images, automatic }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (size.width < 1010) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  useEffect(() => {
    images.length > 0 && setCurrentImage(images[currentImageIndex].image);
  }, [currentImageIndex, images]);

  const timeoutRef = React.useRef(null);

  useEffect(() => {
    if (automatic) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        2500
      );

      return () => {
        resetTimeout();
      };
    }
  }, [currentImageIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex(() => currentImageIndex + 1);
    setCurrentImage(images[(currentImageIndex + 1)].image)
  };

  const prevImage = () => {
    setCurrentImageIndex(() => currentImageIndex - 1);
    setCurrentImage(images[(currentImageIndex - 1)].image)
  };

  return (
    <Container>
      {images.length > 0 && currentImage === images[currentImageIndex].image && (
        <>
          <Wrapper maxWidth={automatic && "1280px"} maxHeight={automatic && "720px"}>
            {!automatic && currentImageIndex !== 0 && (
              <Arrow onClick={prevImage} left="10px">
                <AngleIcon icon={faAngleLeft} />
              </Arrow>
            )}
            <Image image={currentImage} alt="image" automatic={automatic} />
            {!automatic && currentImageIndex !== images.length - 1 && (
              <Arrow onClick={nextImage} right="10px">
                <AngleIcon icon={faAngleRight} />
              </Arrow>
            )}
            {!automatic && (
              <IndicatorContainer>
                {images.map((img, index) => (
                  <Indicator
                    key={img.id}
                    isCurrent={index === currentImageIndex}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </IndicatorContainer>
            )}
          </Wrapper>
          {!isMobile && !automatic && (
            <MinImagesContainer height="30%">
              {images.map((img, index) => (
                <MiniImage
                  src={img.image}
                  alt="..."
                  key={index}
                  isCurrent={index === currentImageIndex}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </MinImagesContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default CarrouselSlider;
