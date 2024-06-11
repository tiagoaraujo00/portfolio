"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>TypeScript</li>
        <li>React</li>
        <li>Dart</li>
        <li>Flutter</li>
        <li>Kotlin</li>
        <li>Android</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Centro Universitário Internacional</li>
        <li>
          Instituto Federal de Educação, Ciência e Tecnologia do Tocantins
        </li>
        <li>Digital Inovation One</li>
        <li>Trybe</li>
        <li>Centro Universitário Luterano de Palmas</li>
        <li>Ada Tech</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Desenvolvedor Web FullStack - Trybe</li>
        <li>Desenvolvedor Android - Trybe</li>
        <li>Desenvolvedor Mobile - Desenvolve Boticário</li>
        <li>Desenvolvedor Backend com Kotlin - Digital Inovation One</li>
        <li>Trybe</li>
        <li>Desenvolvedor Frontend - Ada Tech</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/setup.jpg" width={500} height={500} alt="Setup" />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a developer motivated to create exceptional experiences for
            users. I have expertise in Kotlin for Android development and
            Flutter for building dynamic and visually appealing cross-platform
            applications. Additionally, I bring solid knowledge in frontend
            development with JavaScript, exploring modern frameworks to create
            functional and interactive interfaces.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((it) => it.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
