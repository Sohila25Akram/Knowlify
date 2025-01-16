"use client";

import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function CourseList() {
  const courseCategory = useSelector(
    (state: RootState) => state.courseCategory.courseCategory
  );
  return (
    <>
      <div className="mx-auto">
        <CourseCard type={courseCategory} />
      </div>
      <div className="mx-auto">
        <CourseCard type={courseCategory} />
      </div>
      <div className="mx-auto">
        <CourseCard type={courseCategory} />
      </div>
      <div className="mx-auto">
        <CourseCard type={courseCategory} />
      </div>
      <div className="mx-auto">
        <CourseCard type={courseCategory} />
      </div>
      <div className="mx-auto">
        <CourseCard type={courseCategory} />
      </div>
    </>
  );
}
