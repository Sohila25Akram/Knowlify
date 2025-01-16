import Image from "next/image";
import React from "react";
import teacher from "../../../../public/images/teacher-1.svg";
import time from "../../../../public/images/icons/timer.svg";

export default function page() {
  // const examId: number = 1;
  return (
    <div>
      <div>
        <div className="flex justify-between border-b-[2px] border-betrolly pb-[10px] pe-[50px] ps-5 mb-[10px]">
          <h1 className="content-end text-light">الفيزياء: امتحان شابتر ٤</h1>
          <div className="flex gap-[6px] items-center">
            <div className="rounded-full overflow-hidden w-[50px] h-[50px]">
              <Image
                src={teacher}
                alt="teacher"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span>محمد احمد</span>
          </div>
        </div>
        <div className="ps-5 flex gap-[55px] items-center text-buttonText">
          <div>
            موعد التسليم: <span>١٨/٥</span> | <span>10</span>م
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="w-[25px] h-[25px]">
              <Image
                src={time}
                alt="teacher"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span>
              <span>30</span> د
            </span>
          </div>
          <div>
            <span>30</span> نقطة
          </div>
        </div>
      </div>
      <form className="w-[80%] mx-auto">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-orangeColor text-[22px]">السؤال الاول</h2>
          <div className="text-[#666666] text-buttonText">
            <span>1</span> من <span>30</span>
          </div>
        </div>
        <div className="bg-lightOrange py-[22px] px-[12px] h-[454px] overflow-auto">
          <div className="w-[80%]">
            <div className="flex gap-[10px] text-buttonText mb-5">
              <span>1.</span>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                هذا .
              </p>
            </div>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-[11px] items-center">
                <input
                  id="answer-1"
                  name="answer"
                  type="radio"
                  className="border-0 w-[25px] h-[25px]"
                />
                <label htmlFor="answer-1">
                  هذا النص هو مثال لنص يمكن أن يستبدل{" "}
                </label>
              </li>
              <li className="flex gap-[11px] items-center">
                <input
                  id="answer-2"
                  name="answer"
                  type="radio"
                  className="border-0 w-[25px] h-[25px]"
                />
                <label htmlFor="answer-2">
                  هذا النص هو مثال لنص يمكن أن يستبدل{" "}
                </label>
              </li>
              {/* <li className="flex gap-[11px] items-center">
                <div className="bg-whiteColor w-[25px] h-[25px] rounded-full"></div>
                <span>هذا النص هو مثال لنص يمكن أن يستبدل </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex justify-evenly mt-[50px]">
          <div className="w-[120px] lg:w-[338px]">
            <button className="btn-second">رجوع</button>
          </div>
          <div className="w-[120px] lg:w-[338px]">
            <button className="btn-orange" style={{ width: "100%" }}>
              التالي
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
