"use client";

import Input from "@/components/utils/Inputs/Input";
import React, { useState } from "react";
import password from "../../../../public/images/icons/password.svg";
import Link from "next/link";
import GuestButton from "@/components/utils/Buttons/GuestButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setAuthentication } from "@/store/authenticationSlice";
import { useRouter } from "next/navigation";

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
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });
  const auth = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useRouter();

  const onHandleLogin = () => {
    dispatch(setAuthentication(true));
    if (!auth) {
      navigate.push("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submittedData = { ...formData };
    localStorage.setItem("user", JSON.stringify(submittedData));
    console.log("Submitted Data:", submittedData);

    onHandleLogin();
  };
  return (
    <div className="px-[40px] lg:pe-[110px]">
      <h1 className="leading-[56.22px] text-betrolly text-center mb-[30px] text-heading">
        تسجيل الدخول
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {loginData.map((item) => (
          <div key={item.name}>
            <label>{item.label}</label>
            {/* <Input
              name={item.name}
              icon={item.icon !== "" && item.icon}
              isIcon={item.icon !== "" && true}
              type={item.type}
            /> */}
            <Input isIcon={item.icon && true} icon={item.icon}>
              <input
                name={item.name}
                type={item.type}
                onChange={handleChange}
                value={formData[item.name]}
                placeholder={item.placeholder}
                className="block grow h-full bg-transparent outline-0 text-textInTxtBox"
              />
            </Input>
          </div>
        ))}
        <span className="mb-[30px] text-left">هل نسيت كلمة المرور؟</span>
        <button type="submit" className="btn-orange">
          تسجيل
        </button>
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
