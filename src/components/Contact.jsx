import React from "react";
import LinkedInLogo from "/assets/linkedin.svg";
import GithubLogo from "/assets/github.svg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
      <section className="flex animate__animated animate__bounceIn px-7 py-20 justify-center items-center">
        <div className="py-6 pr-6 pl-5 flex flex-row w-96 gap-y-1 drop-shadow-xl border-4 rounded-xl border-slate-800">
          <div className="table">
            <ul className="table-cell align-middle pr-2">
              <li className="">
                <AnimationOnScroll animateIn="animate__rotateIn">
                  <img
                    className=" hover:cursor-pointer"
                    src={LinkedInLogo}
                    alt="linkedin"
                  />
                </AnimationOnScroll>
              </li>
              <li className="">
                <AnimationOnScroll animateIn="animate__rotateIn">
                  <img
                    className="hover:cursor-pointer"
                    src={GithubLogo}
                    alt="github"
                  />
                </AnimationOnScroll>
              </li>
              <li className="">
                <AnimationOnScroll animateIn="animate__rotateIn">
                    <img src="" alt="" />
                </AnimationOnScroll>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-2 w-full">
            <h1 className="text-xl md:text-2xl pb-4">Contact</h1>

            <input
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 rounded-lg"
              type="text"
              name=""
              placeholder="Name"
            />
            <input
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 rounded-lg"
              type="email"
              name=""
              placeholder="E-mail"
            />
            <input
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 rounded-lg"
              type="phone"
              name=""
              placeholder="Phone"
            />
            <textarea
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 max-h-60 rounded-lg"
              rows={6}
              placeholder="Message"
            ></textarea>
            <button className="border mt-2 border-slate-600 rounded-lg hover:bg-black hover:text-white">
              Send
            </button>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
}

export default Contact;
