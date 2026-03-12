"use client";

import Image from "next/image";
import Timeline from "@/app/components/Timeline";
import { useSectionContext } from "@/app/context/SectionContext";

import AboutJson from "@/content/about.json";
import {Card} from "@/app/components/Card";
import {useOnInView} from "react-intersection-observer";
import {useRouter} from "next/navigation";

export default function Home() {
  const { setActiveSection } = useSectionContext();

  const router = useRouter();

  const handleInView = (sectionId: string) => (inView: boolean, entry: any) => {
    if (inView) {
      // setActiveSection(sectionId);
      router.push(`?section=${sectionId}`, {scroll: false});
      console.log(`Currently viewing: ${sectionId}`);
    }
  };

  const observerOptions = {
    threshold: 0.5,
  };

  const heroRef = useOnInView(handleInView("hero"), observerOptions);
  const aboutRef = useOnInView(handleInView("about"), observerOptions);
  const skillsRef = useOnInView(handleInView("skills"), observerOptions);
  const experienceRef = useOnInView(handleInView("experience"), observerOptions);
  const contactRef = useOnInView(handleInView("contact"), observerOptions);

  return (
    <div>
      <section id="hero" ref={heroRef} className={"flex flex-col items-center justify-center bg-indigo-900 min-h-[calc(100dvh-2.5rem)]"}>
        <div className={"text-center bg-black/50 p-18 border-4 border-gray-200/80"}>
          <h1 className={"text-white text-4xl md:text-7xl"}>I'M MICHAEL CHO</h1>
          <h2 className={"text-white text-xl md:text-4xl"}>Software developer</h2>
        </div>
      </section>
      <section id="about" ref={aboutRef} className={"bg-green-900 pt-12 pb-32 px-20 xl:px-48"}>
        <div className={"grid grid-cols-3 gap-8"}>
          <h1 className={"col-span-3 text-center text-white text-4xl mb-4 bg-blue-300"}>About Me</h1>
          <div className={"col-span-3 lg:col-span-2 border-amber-500 border-2"}>
            <h3 className={"text-xl font-semibold"}>
              Shing Kei Cho (Michael)
              <br/>
              <span className={"text-lg font-normal"}>
                Software Developer
              </span>
            </h3>
            <br/>
            <p className={"whitespace-pre-line"}>{AboutJson.intro.content}</p>
          </div>
          <div className={"border-blue-500 border-2"}>
            <p>testing testing testing testing testing testing testing testing testing testing testing testing testing
              testing</p>
          </div>
        </div>
      </section>
      <section id="skills" ref={skillsRef} className={"bg-red-900 min-h-[calc(100dvh-2.5rem)] pt-12 pb-40 px-20"}>
        <div className={"text-center text-white mb-8"}>
          <h1 className={"text-4xl pb-2"}>Skills</h1>
          <p className={"text-lg"}>These are the technologies I worked with the most</p>
        </div>
        <div className={"flex flex-wrap justify-center gap-8"}>
          <Card name="spring" />
          <Card name="java" />
          <Card name="flutter" />
          <Card name="react" />
          <Card name="mysql" />
          <Card name="postgresql" />
        </div>
      </section>
      <section id="experience" ref={experienceRef} className={"bg-gray-700 pt-20 pb-40"}>
        <h1 className={"col-span-3 text-center text-white text-4xl mb-4"}>Experience</h1>
        <Timeline />
      </section>
      <section id="contact" ref={contactRef} className={"bg-orange-900 pt-12 pb-32 px-20 xl:px-48"}>
        <div className={"grid grid-cols-3 gap-8"}>
          <h1 className={"col-span-3 text-center text-white text-4xl mb-4 bg-blue-300"}>About Me</h1>
          <div className={"col-span-3 lg:col-span-2 border-amber-500 border-2"}>
            <h3 className={"text-xl font-semibold"}>
              Shing Kei Cho (Michael)
              <br/>
              <span className={"text-lg font-normal"}>
                Software Developer
              </span>
            </h3>
            <br/>
            <p className={"whitespace-pre-line"}>{AboutJson.intro.content}</p>
          </div>
          <div className={"border-blue-500 border-2"}>
            <p>testing testing testing testing testing testing testing testing testing testing testing testing testing
              testing</p>
          </div>
        </div>
      </section>
    </div>
  );
}
