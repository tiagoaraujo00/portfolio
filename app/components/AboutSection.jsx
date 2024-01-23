"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
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
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
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
  const [sPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/setup.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
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
