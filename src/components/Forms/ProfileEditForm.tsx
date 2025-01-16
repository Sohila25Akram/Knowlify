"use client";

import SecondaryButton from "@/components/utils/Buttons/SecondaryButton";
import Input from "@/components/utils/Inputs/Input";
import React, { useState } from "react";
import password from "../../../public/images/icons/password.svg";
import EditPhoto from "@/components/EditPhoto/EditPhoto";

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
  {
    name: "password",
    defaultVal: "",
    label: "كلمة المرور",
    placeholder: "",
    icon: password,
    type: "password",
  },
  {
    name: "newPasssword",
    defultVal: "",
    label: "كلمة مرور جديدة",
    placeholder: "",
    icon: password,
    type: "password",
  },
];

export default function ProfileEditForm() {
  const [currentImg, setCurrentImg] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCurrentImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form className="mb-[100px]">
      <h1 className="text-orangeColor text-heading leading-[56.22px] text-center md:text-right">
        الملف الشخصي
      </h1>
      <div className="flex items-center md:gap-[40px] mt-12px] flex-col md:flex-row">
        {/* <div className="w-[150px] h-[150px] rounded-[50%]">
        <Image src={profile} alt="profile" width={400} height={400} />
      </div> */}
        <EditPhoto imgSource={currentImg} />
        <div className="text-center md:text-right flex flex-col-reverse md:flex-col gap-2 md:gap-0">
          <div>
            <h2 className="text-large">مروة طارق</h2>
            <span className="text-textInTxtBox text-light">ادمن</span>
          </div>
          <div className="flex gap-5 mt-[10px] w-full">
            <label className="btn-image-orange w-[120px] xl:w-[368px]">
              تغيير الصورة
              <input
                type="file"
                id="image-upload"
                className="hidden"
                onChange={handleChange}
              />
            </label>
            <button
              className="btn-second w-[120px] xl:w-[368px]"
              onClick={() => setCurrentImg("")}
            >
              ازالة الصورة
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5 mb-[14px]">
        <h2 className="text-large">المعلومات الشخصية</h2>
      </div>
      <div className="p-[10px] border-[2px] border-orangeColor rounded-[10px]">
        <div className="grid grid-cols-2 gap-5">
          {userData.map((item) => (
            <div key={item.name} className="overflow-hidden">
              <label>{item.label}</label>
              <Input
                name={item.name}
                defaultVal={item.defaultVal}
                type={item.type}
                icon={item.icon !== "" && item.icon}
                isIcon={item.icon !== "" && true}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[524px] mt-[50px] mx-auto">
        <SecondaryButton>حفظ التغييرات</SecondaryButton>
      </div>
    </form>
  );
}
