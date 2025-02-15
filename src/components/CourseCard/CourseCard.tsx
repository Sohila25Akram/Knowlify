import Image from "next/image";
import React from "react";
import course from "../../../public/images/course-1.svg";
import teacher from "../../../public/images/teacher-1.svg";
import Link from "next/link";
import PrimaryButton from "../utils/Buttons/PrimaryButton";
import star from "../../../public/images/icons/star.svg";
import group from "../../../public/images/icons/people.svg";

type Props = {
  type?: string;
};

export default function CourseCard({ type }: Props) {
  const teacherId: number = 1;
  const courseId: number = 1;
  return (
    <figure className="w-fit py-[14px] px-[16px] rounded-[16px] shadow-custom relative">
      <div className="max-h-[216px] max-w-[387.33px] overflow-hidden w-full flex justify-center rounded-[10px] overflow-hidden">
        <Image
          src={course}
          alt=""
          width={500}
          height={216}
          style={{ width: "100% !important", objectFit: "cover" }}
        />
      </div>
      <figcaption className="flex flex-col gap-[10px] mt-[10px]">
        <h3 className="text-default">الباب الرابع: الكيمياء العضوية</h3>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="h-[32px] w-[32px] overflow-hidden">
              <Image src={teacher} alt="" width={32} height={32} />
            </div>
            <Link
              href={`/teachers/${teacherId}`}
              className="text-[#006FFF] text-small"
            >
              م. محمد احمد
            </Link>
          </div>
          <div className="flex items-center gap-[4px] text-[#000000] text-verySmall">
            <span className="opacity-50">5 فيديوهات</span>
            {type === "paper" ? (
              <span className="opacity-50">,</span>
            ) : (
              <div className="w-[1px] h-[16px] bg-[#E5E5E5]"></div>
            )}
            <span className="opacity-50">4 ساعات</span>
          </div>
        </div>
        <div
          className={`flex gap-[6px] ${type === "paper" && "flex-row-reverse"}`}
        >
          <div className="w-1/2 grow">
            <Link href={`/courses/${courseId}`} className="btn-second">
              {type === "paper" ? "عرض  الأوراق" : "عرض التفاصيل"}
            </Link>
          </div>
          <div className="w-1/2 grow">
            <PrimaryButton>
              <div className="flex justify-between">
                <span>شراء</span>
                <span>130 ج.م</span>
              </div>
            </PrimaryButton>
          </div>
        </div>
      </figcaption>
      <div className="absolute top-[33px] left-[31px] bg-whiteColor flex items-center gap-[4px] text-[#000000] text-verySmall px-[8px] py-[5px] rounded-[12px]">
        <span className="flex items-center gap-[4px]">
          <span className="w-[20px] h-[20px]">
            <Image src={star} alt="rates" width={20} height={20} />
          </span>
          <span className="opacity-50">4.5</span>
        </span>
        <div className="separator"></div>
        <span className="flex items-center gap-[4px]">
          <span className="w-[16px] h-[16px]">
            <Image src={group} alt="rates" width={16} height={16} />
          </span>
          <span className="opacity-50">4.5</span>
        </span>
      </div>
    </figure>
  );
}
