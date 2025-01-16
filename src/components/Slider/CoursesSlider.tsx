"use client";

import React, { useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import CourseCard from "../CourseCard/CourseCard";

register();

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
    <swiper-container
      direction="horizontal"
      slides-per-view="1.25"
      speed="500"
      loop="false"
      css-mode="true"
      class="custom-swiper"
      style={{ margin: "-20px -20px -40px" }}
    >
      <swiper-slide
        class="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px] ms-[20px]">
          <CourseCard />
        </div>
      </swiper-slide>
      <swiper-slide
        class="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px]">
          <CourseCard />
        </div>
      </swiper-slide>
      <swiper-slide
        class="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px]">
          <CourseCard />
        </div>
      </swiper-slide>
      <swiper-slide
        class="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px]">
          <CourseCard />
        </div>
      </swiper-slide>
      <swiper-slide
        class="relative w-fit mt-[10px] mb-5"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="w-fit mx-[10px] mt-[20px] mb-[40px] me-[40px]">
          <CourseCard />
        </div>
      </swiper-slide>
    </swiper-container>
  );
}
