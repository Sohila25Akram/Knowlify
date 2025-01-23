import Image from "next/image";
import React from "react";
import profile from "../../../public/images/profile.svg";
import edit from "../../../public/images/icons/edit-orange.svg";
import language from "../../../public/images/icons/language.svg";
import logout from "../../../public/images/icons/logout-black.svg";
import Input from "@/components/utils/Inputs/Input";
import SecondaryButton from "@/components/utils/Buttons/SecondaryButton";
import Link from "next/link";

const userData = [
  {
    name: "firstName",
    defaultVal: "مروة",
    label: "الاسم الاول",
    placeholder: "",
    icon: "",
    type: "text",
  },
  {
    name: "lastName",
    defaultVal: "طارق",
    label: "الاسم الثاني",
    placeholder: "",
    icon: "",
    type: "text",
  },
  {
    name: "username",
    defaultVal: "مروة_طارق",
    label: "اللقب",
    placeholder: "",
    icon: "",
    type: "text",
  },
  {
    name: "job",
    defaultVal: "أدمن",
    label: "الوظيفة",
    placeholder: "",
    icon: "",
    type: "text",
  },
  {
    name: "email",
    defaultVal: "Marwa_tarreekk234@gmail.com",
    label: "البريد الالكتروني",
    placeholder: "",
    icon: "",
    type: "email",
  },
  {
    name: "phone",
    defaultVal: "01256984567",
    label: "رقم الهاتف",
    placeholder: "",
    icon: "",
    type: "text",
  },
];

export default function page() {
  return (
    <div className="mb-[100px]">
      <h1 className="text-orangeColor text-heading leading-[56.22px]">
        الملف الشخصي
      </h1>
      <div className="flex items-center gap-[40px] mt-12px]">
        <div className="w-[150px] h-[150px] rounded-[50%] overflow-hidden bg-whiteColor flex items-center">
          <Image src={profile} alt="profile" width={400} height={400} />
        </div>
        <div>
          <h2 className="text-large">مروة طارق</h2>
          <span className="text-textInTxtBox text-light">ادمن</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 mb-[14px]">
        <h2 className="text-large">المعلومات الشخصية</h2>
        <Link href="/profile/editProfile" className="w-[100px] lg:w-[220px]">
          <SecondaryButton>
            <div className="w-[24px] h-[24px] p-[3px]">
              <Image src={edit} alt="edit" width={400} height={400} />
            </div>
            <span>تعديل</span>
          </SecondaryButton>
        </Link>
      </div>
      <div className="p-[10px] border-[2px] border-orangeColor rounded-[10px]">
        <div className="grid grid-cols-2 gap-5">
          {userData.map((item) => (
            <div key={item.name} className="overflow-hidden">
              <label>{item.label}</label>
              <Input>
                <input
                  name={item.name}
                  type={item.type}
                  defaultValue={item.defaultVal}
                  readOnly
                  className="block grow h-full bg-transparent outline-0 text-textInTxtBox"
                />
              </Input>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-large mt-5 mb-[14px]">معلومات عامة</h2>
      <div className="p-[10px] border-[2px] border-orangeColor rounded-[10px] w-full lg:w-1/2">
        <div className="flex justify-between items-center border-b-[1px] border-faddedLine py-[10px]">
          <div className="flex gap-[4px]">
            <span className="w-[24px] h-[24px]">
              <Image src={language} alt="edit" width={400} height={400} />
            </span>
            <span>اللغة</span>
          </div>
          <span className="text-textInTxtBox">اللغة العربية</span>
        </div>
        <div className="border-b-[1px] border-faddedLine py-[10px]">
          <div className="flex gap-[4px]">
            <span className="w-[24px] h-[24px]">
              <Image src={logout} alt="edit" width={400} height={400} />
            </span>
            <span>تسجيل الخروج</span>
          </div>
        </div>
      </div>
    </div>
  );
}
