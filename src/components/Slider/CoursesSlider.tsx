"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CourseCard from "../CourseCard/CourseCard";

export default function Slider() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Resize handled!");
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1.25}
      speed={500}
      loop={false}
      cssMode={true}
      className="custom-swiper"
      style={{ margin: "-20px -20px -40px" }}
    >
      <SwiperSlide
        className="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px] ms-[20px]">
          <CourseCard />
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px]">
          <CourseCard />
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px]">
          <CourseCard />
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px]">
          <CourseCard />
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px] me-[40px]">
          <CourseCard />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
