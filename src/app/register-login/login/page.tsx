import PrimaryButton from "@/components/utils/Buttons/PrimaryButton";
import Input from "@/components/utils/Inputs/Input";
import React from "react";
import password from "../../../../public/images/icons/password.svg";
import Link from "next/link";
import GuestButton from "@/components/utils/Buttons/GuestButton";

const loginData = [
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
];

export default function Login() {
  return (
    <div className="px-[40px] lg:pe-[110px]">
      <h1 className="leading-[56.22px] text-betrolly text-center mb-[30px] text-heading">
        تسجيل الدخول
      </h1>
      <form className="flex flex-col gap-5">
        {loginData.map((item) => (
          <div key={item.name}>
            <label>{item.label}</label>
            <Input
              name={item.name}
              icon={item.icon !== "" && item.icon}
              isIcon={item.icon !== "" && true}
              type={item.type}
            />
          </div>
        ))}
        <span className="mb-[30px] text-left">هل نسيت كلمة المرور؟</span>
        <PrimaryButton>تسجيل</PrimaryButton>
        {/* <button className='text-center text-greyText mb-[10px] leading-[33.73px] text-buttonText'>guest</button> */}
        <GuestButton />
        <p className="text-buttonText text-greyText mx-auto">
          <span>ليس لديك حساب؟</span>{" "}
          <Link href="/register-login" className="text-betrolly">
            إنشاء حساب
          </Link>
        </p>
      </form>
    </div>
  );
}
