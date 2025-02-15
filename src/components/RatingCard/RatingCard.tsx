import React from "react";
import supporter from "../../../public/images/supporter.svg";
import Image from "next/image";

export default function RatingCard() {
  return (
    <div className="p-5 pt-[16px] rounded-[20px] bg-lightOrange">
      <header className="flex mb-[6px]">
        <div className="flex gap-[10px] w-full">
          <div className="w-[60px] h-[60px] rounded overflow-hidden">
            <Image src={supporter} alt="person" width={60} height={60} />
          </div>
          <div className="grow">
            <div className="flex justify-between">
              <h3 className="font-bold  text-[#0051A3]">م. محمد احمد</h3>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="flex gap-[10px] items-center text-[#666666]">
              <span>من أسبوع</span>
              <div
                className="separator"
                style={{ height: "16px", backgroundColor: "#666666" }}
              ></div>
              <span>أسوان، مصر</span>
            </div>
          </div>
        </div>
      </header>
      <p className="text-small loading-[26.24px]">
        هذا النص هو مثال لنص يمن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
        من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
        الأخرى إضافة إلى زيادة عدد الحروف التى يولدها هذا النص هو مثال لنص يمكن
        أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص هذا النص هو
        مثال لنص يمكن أن يستبدل في نفس المساحة.
      </p>
    </div>
  );
}
