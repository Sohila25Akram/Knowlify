import CourseCard from "@/components/CourseCard/CourseCard";
import TabTeacher from "@/components/Tab/TabTeacher";
import PrimaryButton from "@/components/utils/Buttons/PrimaryButton";
import SecondaryButton from "@/components/utils/Buttons/SecondaryButton";
import Image from "next/image";
import React from "react";
import teacherOne from "../../../../public/images/teacher-1.svg";
import star from "../../../../public/images/icons/star.svg";
import group from "../../../../public/images/icons/people.svg";

// const tabs = ["الصفحة الرئيسية", "أوراق المادة"];
export default async function page() {
  return (
    <div>
      <div>
        <div className="flex gap-[30px] items-center text-greyText text-light mb-5">
          <div className="w-[150px] h-[150px] rounded-[50%]">
            <Image src={teacherOne} alt="profile" width={400} height={400} />
          </div>
          <div>
            <p>مدرس رياضيات</p>
            <p>مدرس للصفوف الثانوية</p>
            <div className="flex gap-[6px] text-[#000000] mt-[10px] text-buttonText">
              <span className="flex items-center gap-[4px]">
                <span className="w-[16px] h-[16px]">
                  <Image src={group} alt="rates" width={16} height={16} />
                </span>
                <span className="opacity-50">4.5</span>
              </span>
              <span className="flex items-center gap-[4px]">
                <span className="w-[20px] h-[20px]">
                  <Image src={star} alt="rates" width={20} height={20} />
                </span>
                <span className="opacity-50">4.5</span>
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-large ms-5">م. سيد البدوي</h2>
        <div className="flex gap-5 mt-5 w-full mb-[50px]">
          <div className="w-1/2">
            <PrimaryButton>أتابع</PrimaryButton>
          </div>
          <div className="w-1/2">
            <SecondaryButton>
              <span className="text-[#000000]">مراسلة</span>
            </SecondaryButton>
          </div>
        </div>
      </div>
      <TabTeacher />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[10px] mb-5">
        <CourseCard type={"paper"} />
        <CourseCard type={"paper"} />
        <CourseCard type={"paper"} />
      </div>
    </div>
  );
}
