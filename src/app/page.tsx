import Link from "next/link";
import Slider from "@/components/Slider/CoursesSlider";

export default function Home() {
  return (
    <div className="me-[-66px]">
      <OurSection />
      <OurSection />
      <OurSection />
    </div>
  );
}

export function OurSection() {
  return (
    <section className="slide">
      <div className="flex justify-between items-center me-[66px] relative z-[2]">
        <h2 className="text-orangeColor text-buttonText">
          الدورات التعليمية الاعلى مبيعًا
        </h2>
        <Link href="/courses" className="text-greyText">
          رؤية المزيد
        </Link>
      </div>
      <Slider />
    </section>
  );
}
