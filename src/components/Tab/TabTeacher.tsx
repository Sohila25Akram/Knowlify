"use client";

import React, { useState } from "react";

export default function TabTeacher() {
  const tabs = ["الصفحة الرئيسية", "أوراق المادة"];

  const [activeTab, setActiveTab] = useState<string>(tabs[1]);

  const handleClick = (item: string) => {
    setActiveTab(item);
  };

  return (
    <ul className="flex gap-[14px] border-b-[2px] border-fadedLine">
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
  );
}
