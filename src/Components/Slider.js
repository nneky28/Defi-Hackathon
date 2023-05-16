import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the carousel styles
import { Carousel } from "react-responsive-carousel";

const images = [
  { src: 'robot.png', alt: "Image 1" },
  { src: 'bot.png', alt: "Image 2" },
  { src: 'cloud.png', alt: "Image 3" },
];

const Carousal = () => {
  const dotStyle = {
    background: "#FFC798",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    margin: "0 8px",
    display: "inline-block",
  };

  const dotActiveStyle = {
    ...dotStyle,
    background: "#F17105",
    boxShadow: "0 0 1px 3px #F17105",
  };

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      emulateTouch={true}
      swipeable={true}
      dynamicHeight={true}
      showStatus={false}
      styles
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              key={index}
              style={dotActiveStyle}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            key={index}
            style={dotStyle}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {images.map((image, index) => (
        <Box key={index}>
          <Image src={image.src} alt={image.alt} objectFit={'contain'} />
        </Box>
      ))}
    </Carousel>
  );
};

export default Carousal;

