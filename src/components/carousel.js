"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";

function Slider({ images }) {
  const [load, setload] = useState(false);
  const loading = useRef(0);

  function showloader() {
    if (images.length > loading.current + 1) {
      loading.current++;
    } else {
      setload(true);
    }
  }

  return (
    <>
      <Carousel>
        {images.map((item, index) => {
          return (
            <Carousel.Item key={index} >
              <Image
                width={1000}
                height={700}
                alt={item.alt}
                src={item.img}
                onLoad={showloader}
                // className="shadow "
                style={{
                  minWidth: "100%",
                  height: "70vh",
                  objectFit: "cover",
                  borderRadius: "1em",
                }}
                loading="eager"
              />
              <Carousel.Caption
                // style={style[item?.style] || { bottom: "0px" }}
                className="px-4"
              >
                <div>{item.text} </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {(() => {
        if (!load) {
          return (
            <div
              style={{ width: "100%", height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Spinner animation="border" role="status" size="5em" />
            </div>
          );
        }
      })()}
    </>
  );
}

export default Slider;
