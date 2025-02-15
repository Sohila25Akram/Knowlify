import React from "react";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import vodafone from "../../../public/images/icons/vodafone-cash.svg";
import paypal from "../../../public/images/icons/paypal.svg";

export default function Footer() {
  return (
    <div className="flex gap-[150px] justify-center text-whiteColor bg-betrolly py-5">
      <div className="w-[220px] h-[122px]">
        <Image src={logo} alt="logo" width={400} height={400} />
      </div>
      <div className="flex gap-[100px]">
        <div>
          <h2 className="text-light text-[#FFD4AF] mb-[10px] text-center">
            Knowlify
          </h2>
          <ul className="list-style-none flex flex-col gap-[4px]">
            <li>
              <Link href="">الصفحة الرئيسية</Link>
            </li>
            <li>
              <Link href="">دوراتي التعليمية</Link>
            </li>
            <li>
              <Link href="">الإمتحانات</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-light text-[#FFD4AF] mb-[10px] text-center">
            تواصل معنا
          </h2>
          <div>
            <h3 className="text-[#FFD4AF]">كلمنا على:</h3>
            <p>011589763112, 01065897845</p>
          </div>
          <div>
            <h3 className="text-[#FFD4AF]">ساعات العمل:</h3>
            <ul>
              <li>السبت - الأربعاء ...............9am - 5pm</li>
              <li>الخميس , الجمعة ...............مغلق</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-light text-[#FFD4AF] mb-[10px] text-center">
            طرق الدفع المتاحة
          </h2>
          <div className="flex gap-5">
            <div>
              <div className="h-[24px] w-[24px] mx-auto">
                <Image
                  src={vodafone}
                  alt="vodafone"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span>فودافون كاش</span>
            </div>
            <div>
              <div className="h-[24px] w-[24px] mx-auto">
                <Image
                  src={paypal}
                  alt="vodafone"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span> باي بال</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
