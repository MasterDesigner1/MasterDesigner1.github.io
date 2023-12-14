import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import Image from "next/image";
import ImageBackground from "../../assets/images/backgrounds/Koksal Partners bina.jpg"


const SingleSlideOne = ({ slider = {}, showShape = false }) => {
  const { bg, title, href } = slider;

  return (
    <>
      <div
        className="image-layer">
          <Image
          src={ImageBackground}
          alt="Koksal Partners Bina"
          layout="fill"
          objectFit="cover"
        />

      </div>

      {showShape && (
        <>
          <div className="main-slider-shape-1"></div>
          <div className="main-slider-shape-2"></div>
          <div className="main-slider-shape-3"></div>
        </>
      )}

      <Container>
        <Row>
          <Col xl={showShape ? 7 : 12}>
            <div className="main-slider__content">
              <p>
                <TextSplit text={title} />
              </p>
              <Link href={href} className="thm-btn">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleSlideOne;
