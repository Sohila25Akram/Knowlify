import Accordion from "@/components/CourseSection/CourseSection";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-light text-betrolly mb-[14px]">إمتحاناتك</h1>
      <div className="lg:w-1/2">
        <Accordion type="exam" />
      </div>
    </div>
  );
}
