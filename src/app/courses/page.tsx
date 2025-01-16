import CourseList from "@/components/CourseList/CourseList";
import TabCourses from "@/components/Tab/TabCourses";
import React from "react";

export default function page() {
  return (
    <div>
      <TabCourses />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[10px] mb-5">
        <CourseList />
      </div>
    </div>
  );
}
