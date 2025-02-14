"use client";

import React, { useState } from "react";
import password from "../../../public/images/icons/password.svg";
import Input from "@/components/utils/Inputs/Input";
// import PrimaryButton from "@/components/utils/Buttons/PrimaryButton";
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
    validation:
      "Passwords must have at least one non alphanumeric character., Passwords must have at least one lowercase ('a'-'z')., Passwords must have at least one uppercase ('A'-'Z').",
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
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store the form data into a variable for later use
    const submittedData = { ...formData };

    // Example: Logging the submitted data
    console.log("Submitted Data:", submittedData);
  };
  return (
    <div className="px-[40px] lg:pe-[110px]">
      <h1 className="leading-[56.22px] text-betrolly text-center mb-[30px] text-heading">
        انشاء حساب
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 grid-cols-2">
          {registerData.map((item) => (
            <div key={item.name} className="input-container last:col-span-2">
              <label>{item.label}</label>
              {/* <Input
                name={item.name}
                icon={item.icon !== "" && item.icon}
                isIcon={item.icon !== "" && true}
                type={item.type}
              /> */}
              <Input isIcon={item.icon && true} icon={item.icon}>
                <input
                  type={item.type}
                  name={item.name}
                  onChange={handleChange}
                  value={formData[item.name]}
                  className="block grow h-full bg-transparent outline-0 text-textInTxtBox"
                />
              </Input>
            </div>
          ))}
        </div>
        <button type="submit" className="btn-orange">
          انشاء حساب
        </button>
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
