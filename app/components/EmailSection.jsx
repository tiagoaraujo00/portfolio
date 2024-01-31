import React from "react";
import GithubIcom from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">Let's Connect</h5>
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
        <Image className="rounded-md md:ml-48" src="/images/message.jpg" width={400} height={400} />
        {/* <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
          type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
        </form> */}
      </div>
    </section>
  );
};

export default EmailSection;
