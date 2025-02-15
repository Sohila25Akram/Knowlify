"use client";

import Input from "@/components/utils/Inputs/Input";
import React, { useState } from "react";
import password from "../../../../public/images/icons/password.svg";
import Link from "next/link";
import GuestButton from "@/components/utils/Buttons/GuestButton";
import { useDispatch } from "react-redux";
import { setAuthentication } from "@/store/authenticationSlice";
import { useRouter } from "next/navigation";

// const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWFyd2F0YXJla0BnbWFpbC5jb20iLCJqdGkiOiIwMDQ4NWRlMy1lMTAyLTQ2ZWUtODMwNC00ODM3NTBkNDcwZTgiLCJzdWIiOiI0YTkxYWI5Zi00OWIyLTRhYWUtYTI4NS05OWI1MDIzOTVhYWYiLCJpYXQiOjE3MzgyNzU5NzAsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlN0dWRlbnQiLCJleHAiOjE3MzgyNzc3NzAsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.2GDUqBPIymZ3LMFI9ddNwFluCqxXuIu942FfuZvKwNM"
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
  const [failed, setFailed] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useRouter();

  const onLogin = async () => {
    try {
      const response = await fetch(
        "http://elearningsystem.runasp.net/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.data.token);
      console.log("Login successful, Token:", data);

      dispatch(setAuthentication(true));
      navigate.push("/");
    } catch (error) {
      console.error("Error during login:", error);
      setFailed(true);
    }
  };
  // let data = await fetch('http://elearningsystem.runasp.net/api/Auth/login', {email: formData.email, password: formData.password});

  // const auth = useSelector(
  //   (state: RootState) => state.authentication.isAuthenticated
  // );

  // const onHandleLogin = () => {
  //   dispatch(setAuthentication(true));
  //   if (!auth) {
  //     navigate.push("/");
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    onLogin();
    e.preventDefault();

    // const submittedData = { ...formData };
    // localStorage.setItem("user", JSON.stringify(submittedData));
    // console.log("Submitted Data:", submittedData);

    // onHandleLogin();
  };
  return (
    <div className="px-[40px] lg:pe-[110px]">
      <h1 className="leading-[56.22px] text-betrolly text-center mb-[30px] text-heading">
        تسجيل الدخول
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <p className={`${failed ? "block" : "hidden"} mx-auto text-danger`}>
          Email or Password is invalid
        </p>
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
