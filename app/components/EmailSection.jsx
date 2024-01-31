import React from "react";
import GithubIcom from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[2rem] -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 social">
          <Link href="https://github.com/tiagoaraujo00">
            <Image src={GithubIcom} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/tiago-araujo-de-morais/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="rounded-md md:ml-48"
          src="/images/message.jpg"
          alt="message"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default EmailSection;
