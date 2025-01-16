"use client";

import { setCourseCategory } from "@/store/courseCategorySlice";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

export default function Tab() {
  const tabs = useMemo(
    () => [
      "الدورات التعليمية الاعلى مبيعًا",
      "الدورات التعليمية المرفوعة مؤخرا",
      "مقترحا لك",
      "دورات تعليمية مميزة",
      "دورات تهم الطلاب",
    ],
    []
  );

  const [smallList, setSmallList] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleClick = (item: string) => {
    setActiveTab(item);
    dispatch(setCourseCategory(item));
    setActiveSubItem(null);
    switch (item) {
      case tabs[3]:
        setSmallList(["الفيزياء", "الكيمياء", "الرياضيات", "اللغة العربية"]);
        break;
      case tabs[4]:
        setSmallList(["علمي علوم", "علمي رياضة", "أدبي"]);
        break;
      default:
        setSmallList([]);
    }
  };

  const handleSubItemClick = (subItem: string) => {
    setActiveSubItem(subItem);
  };

  useEffect(() => {
    if (activeTab === tabs[3]) {
      setActiveSubItem("الفيزياء");
    } else if (activeTab === tabs[4]) {
      setActiveSubItem("علمي علوم");
    } else {
      setActiveSubItem(null);
    }
  }, [tabs, activeTab]);

  return (
    <>
      <ul className="flex gap-[14px] border-b-[2px] border-fadedLine flex-wrap">
        {tabs.map((item, index) => (
          <li
            key={index}
            className={`px-[10px] py-[11px] cursor-pointer relative transition-all
                ${
                  activeTab === item
                    ? "text-[#000000] font-bold after:h-[3px] after:bg-orangeColor"
                    : "text-[#CCCCCC] hover:text-[#000000] hover:font-bold after:h-0"
                }
                after:content-[''] after:absolute after:w-full after:bottom-[-1px] after:left-0`}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      {smallList && (
        <ul className="flex gap-[14px] border-b-[2px] border-fadedLine">
          {smallList.map((subItem, index) => (
            <li
              key={index}
              className={`px-[10px] py-[11px] cursor-pointer relative transition-all
                ${
                  activeSubItem === subItem
                    ? "text-[#000000] font-bold border-b-[3px] border-orangeColor"
                    : "text-[#CCCCCC] hover:text-[#000000] hover:font-bold hover:border-b-[3px] hover:border-orangeColor"
                }`}
              onClick={() => handleSubItemClick(subItem)}
            >
              {subItem}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
