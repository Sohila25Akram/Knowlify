"use client";

import React, { useState } from "react";
import lesson from "../../../public/images/lesson-1.svg";
import teacher from "../../../public/images/teacher-1.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  header: string;
  text: string;
  type?: "course" | "exam";
};

// export function CourseSection({}: Props) {
//   return <div>CourseSection</div>;
// }
const Accordion = ({ type = "course" }: { type?: "course" | "exam" }) => {
  return (
    <section className="flex flex-col gap-[6px] relative z-20 bg-white">
      <AccordionItem
        type={type}
        header="القسم 1 : اسم الدرس"
        text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
      />
      <AccordionItem
        type={type}
        header="القسم 1 : اسم الدرس"
        text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
      />
      <AccordionItem
        type={type}
        header="القسم 1 : اسم الدرس"
        text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
      />
    </section>
  );
};

const AccordionItem = ({ header, text, type }: Props) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div>
      <button
        className={`faq-btn flex w-full ${
          type === "course" ? "text-right" : "text-left"
        } bg-lightOrange rounded-[10px] items-center py-[4px] px-[8px]`}
        onClick={() => handleToggle()}
      >
        <div
          className={`flex grow items-center gap-[11px] ${
            type !== "course" && "flex-row-reverse text-right"
          }`}
        >
          <div className="flex h-10 w-fit max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
            <svg
              className={`fill-primary stroke-primary duration-200 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill=""
                stroke=""
              />
            </svg>
          </div>

          <div className="w-full">
            <h4>{header}</h4>
          </div>
        </div>
        {type === "course" && (
          <div className="text-greyText text-verySmall">
            <span>
              <span>3</span> دروس
            </span>
            <span className="w-[3px] h-[3px] bg-greyText inline-block rounded-full mx-[5px]"></span>
            <span>
              <span>1</span> ساعة
            </span>
          </div>
        )}
      </button>

      <div
        className={`duration-200 ease-in-out ${
          type === "course" && "border border-t-0 mt-[-8px]"
        } border-fadedLine rounded-b-[10px] bg-whiteColor overflow-hidden ${
          active ? "block" : "hidden"
        }`}
      >
        {/* <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p> */}

        {/* <div className="flex py-[6px] px-[8px] border-y border-fadedLine w-full">
          <div className="flex items-center gap-[6px]">
            <div className="w-[50px] h-[35px]">
              <Image
                src={lesson}
                alt={text}
                width={400}
                height={400}
                style={{ minWidth: "100%", objectFit: "cover" }}
              />
            </div>
            <div>الدرس 2 الجزء 1 : الاسم</div>
          </div>
        </div> */}
        {type === "course" ? (
          <>
            <Lesson text={text} />
            <Lesson text={text} />
          </>
        ) : (
          <Exam />
        )}
      </div>
    </div>
  );
};

const Lesson = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center py-[6px] px-[8px] border-t border-fadedLine w-full">
      <div className="flex items-center gap-[6px]">
        <div className="w-[50px] h-[35px]">
          <Image
            src={lesson}
            alt={text}
            width={400}
            height={400}
            style={{ minWidth: "100%", objectFit: "cover" }}
          />
        </div>
        <div>الدرس 2 الجزء 1 : الاسم</div>
      </div>
      <span className="text-greyText text-verySmall">20:22</span>
    </div>
  );
};

const Exam = () => {
  const examId: number = 1;
  return (
    <div className="px-[8px]">
      <div className="grid grid-cols-2 py-[6px] ">
        <div>الباب الرايع: الفيزياء الكهربية</div>
        <div>
          موعد النسليم: <span>5/10 | 9</span>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="rounded-full overflow-hidden w-[35px] h-[35px]">
            <Image
              src={teacher}
              alt="teacher"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span>محمد احمد</span>
        </div>
        <div>
          مدة الامتحان <span>3</span> د
        </div>
      </div>
      <Link
        href={`exams/${examId}`}
        className="btn-orange"
        style={{ height: "fit-content", padding: "8px 0" }}
      >
        بددء الامتحان
      </Link>
    </div>
  );
};

export default Accordion;
