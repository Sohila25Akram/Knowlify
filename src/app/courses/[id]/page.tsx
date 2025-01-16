import Image from "next/image";
import React from "react";
import courseDesc from "../../../../public/images/course-img-desc.svg";
import Link from "next/link";
import arrow from "../../../../public/images/icons/arrow-simple.svg";
import teacher from "../../../../public/images/teacher-1.svg";
import Accordion from "@/components/CourseSection/CourseSection";

type Item = {
  sections?: number;
  lessons?: number;
  hours?: number;
  minuts?: number;
};

export default function page() {
  const courseTitle: string = "الكيمياء العضوية";
  const teacherId: number = 1;
  const arr: Item[] = [
    { sections: 3 },
    { lessons: 4 },
    { hours: 4 },
    { minuts: 20 },
  ];
  return (
    <>
      <section className="grid grid-cols-2 gap-[50px]">
        <div>
          <h2 className="text-orangeColor text-[22px] mb-[4px]">
            <span>الفصل ٤</span>: {courseTitle}
          </h2>
          <figure>
            <div className="mb-[10px] w-full">
              <Image
                src={courseDesc}
                alt={courseTitle}
                width={400}
                height={400}
                style={{ minWidth: "100%", objectFit: "cover" }}
              />
            </div>
            <figcaption>
              <h3 className="text-orangeColor text-buttonText mb-[4px]">
                وصف الشابتر
              </h3>
              <p className="mb-5">
                وهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                يولدها هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                تم توليد هذا النص من مولد النص هذا النص هو مثال لنص يمكن أن
                يستبدل في نفس المساحة.
              </p>
              <Link href="" className="btn-orange">
                <div className="flex justify-between items-center h-full">
                  <span className="text-buttonText">شراء</span>
                  <span>
                    310 <span>ج.م</span>
                  </span>
                </div>
              </Link>
            </figcaption>
          </figure>
        </div>
        <div>
          <h3 className="text-orangeColor text-buttonText mb-[4px]">
            مدرس المادة
          </h3>
          <p>مدرس اول كيمياء وموجه في مدرسة النيل الثانوية</p>
          {/*  */}
          <Link
            href={`/teachers/${teacherId}`}
            className="border-[1px] border-txtBox py-[15px] px-[10px] flex justify-between items-center cursor-pointer my-[44px] transition ease-out delay-300 hover:bg-txtBox"
          >
            <div className="flex items-center gap-[10px]">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image src={teacher} alt="teacher" width={50} height={50} />
              </div>
              <span className="text-light">محمد احمد</span>
            </div>
            <div className="w-[50px] h-[50px] mb-[-15px]">
              <Image src={arrow} alt="teacher" width={40} height={40} />
            </div>
          </Link>
          <section className="border border-[#2084A254] rounded-[10px] py-[5px] px-[10px]">
            <h3 className="text-orangeColor text-buttonText mb-[4px]">
              محتويات الدورة التعليمية
            </h3>

            <p className="text-verySmall mb-[4px]">
              {arr.map((item, index) => {
                // Extract keys and values of the object
                const [key, value] = Object.entries(item)[0];

                // Conditionally render each item based on its key
                if (key === "minuts" && value) {
                  return <span key={index}>{value} د</span>;
                }

                if (key === "sections") {
                  return <span key={index}>{value} اقسام | </span>;
                }

                if (key === "lessons") {
                  return <span key={index}>{value} دروس | </span>;
                }

                if (key === "hours") {
                  return <span key={index}>{value} ساعات | </span>;
                }

                return null;
              })}
            </p>
            <section className="max-h-[300px] overflow-auto">
              <Accordion type="course" />
            </section>
          </section>
        </div>
      </section>
      <section className="mt-[30px]">
        <Link
          href=""
          className="border border-orangeColor text-greyText p-[10px] rounded-[8px] text-buttonText block w-fit ms-auto"
        >
          قيم هذه الدورة
        </Link>
      </section>
    </>
  );
}
