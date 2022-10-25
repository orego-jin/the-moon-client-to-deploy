import React, { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

import Arrow from '../assets/arrow.png';

import { Pagination, Navigation, EffectCards } from "swiper";

const Container = styled.div`
  width: 90vw;
  height: 75vh;

  @media(min-width: 64rem){
    height: 70vh;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    color: black;
    right: 5;
    width: 3rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    color: black;
    left: 5;
    width: 3rem;

    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
`

const Box = styled.div`
  min-height: 90%;
  min-width: 60%;
  // background-color: ${props => props.theme.body};
  margin: 5px;
  border: none;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center; 

  background-color = ${props => props.theme.carouselColor};
`

const NftBox = styled.div`
  min-height: 90%;
  min-width: 30%;
  background-color: ${props => props.theme.body};
  margin: 5px;
  border: none;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center; 
`

const Carousel = ({selectedSlide}) => {
  
  const swiperRef = useRef(null);

  const toSlide = () => {
    console.log(selectedSlide)
    swiperRef.current?.swiper.slideTo(Number(selectedSlide)-1);
  };

  const currSlide = swiperRef.current?.swiper.activeIndex;

  if (currSlide !== selectedSlide) {
    toSlide();
  }

  return(
    <Container>    
      <Swiper
        pagination={
          // {type:'fraction'}
          true
        }
        loop={false}
        navigation={true}
        scrollbar={{
          draggable:true
        }}
        // effect={"cards"}
        grabCursor={true}
        // modules={[EffectCards, Pagination, Navigation]}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide><NftBox>Slide1</NftBox><Box>1</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide2</NftBox><Box>2</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide3</NftBox><Box>3</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide4</NftBox><Box>4</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide5</NftBox><Box>5</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide6</NftBox><Box>6</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide7</NftBox><Box>7</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide8</NftBox><Box>8</Box></SwiperSlide>
        <SwiperSlide><NftBox>Slide9</NftBox><Box>9</Box></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel;
