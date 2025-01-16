import React from "react";
import password from "../../../public/images/icons/password.svg";
import Input from "@/components/utils/Inputs/Input";
import PrimaryButton from "@/components/utils/Buttons/PrimaryButton";
import Link from "next/link";
import GuestButton from "@/components/utils/Buttons/GuestButton";

const registerData = [
  {
    name: "username",
    label: "الاسم",
    placeholder: "",
    icon: "",
    type: "text",
  },
  {
    name: "phone",
    label: "رقم الهاتف",
    placeholder: "",
    icon: "",
    type: "text",
  },
  {
    name: "email",
    label: "البريد الالكتروني",
    placeholder: "",
    icon: "",
    type: "email",
  },
  {
    name: "password",
    label: "كلمة المرور",
    placeholder: "",
    icon: password,
    type: "password",
  },
  {
    name: "parentPhone",
    label: "رقم هاتف ولي الأمر",
    placeholder: "",
    icon: "",
    type: "text",
  },
];

export default function RegisterLogin() {
  return (
    <div className="px-[40px] lg:pe-[110px]">
      <h1 className="leading-[56.22px] text-betrolly text-center mb-[30px] text-heading">
        انشاء حساب
      </h1>
      <form className="flex flex-col gap-5">
        <div className="grid gap-5 grid-cols-2">
          {registerData.map((item) => (
            <div key={item.name} className="input-container last:col-span-2">
              <label>{item.label}</label>
              <Input
                name={item.name}
                icon={item.icon !== "" && item.icon}
                isIcon={item.icon !== "" && true}
                type={item.type}
              />
            </div>
          ))}
        </div>
        <PrimaryButton>انشاء حساب</PrimaryButton>
        {/* <button className='text-center text-greyText mb-[10px] leading-[33.73px] text-buttonText'>الاستمرار كضيف</button> */}
        <GuestButton />
        <p className="text-buttonText text-greyText mx-auto">
          <span>هل لديك حساب يالفعل؟</span>{" "}
          <Link href="/register-login/login" className="text-betrolly">
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </div>
  );
}
