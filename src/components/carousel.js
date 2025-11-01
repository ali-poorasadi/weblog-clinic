"use client";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

function Slider({ images }) {
  return (
      <Carousel>
        {images.map((item, index) => {
          return (
            <Carousel.Item key={index} >
              <Image
                width={1000}
                height={700}
                alt={item.alt}
                src={item.img}
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
  );
}

export default Slider;
