import React from "react";
import LinkedInLogo from "/assets/linkedin.svg";
import GithubLogo from "/assets/github.svg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
      <section className="flex animate__animated animate__bounceIn px-7 py-10 md:py-20 justify-center items-center">
        <div className="md:py-6 py-4 pr-6 md:pl-5 pl-2 flex flex-row w-96 gap-y-1 drop-shadow-xl border-4 rounded-xl border-slate-800 dark:border-slate-600">
          <div className="table">
            <ul className="table-cell align-middle pr-2">
              <li>
                <AnimationOnScroll animateIn="animate__rotateIn">
                  <a
                    href="https://www.linkedin.com/in/hannyis-zolt%C3%A1n-32817023b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      className="hover:cursor-pointer hover:fill-slate-600 dark:hover:fill-white dark:fill-slate-400"
                    >
                      <path d="M15 3a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-4.5 5.4c.8 0 1.4.6 1.4 1.3 0 .8-.6 1.3-1.5 1.3-.8 0-1.4-.5-1.4-1.3 0-.7.6-1.3 1.5-1.3zM12 20H9v-8h3v8zm10 0h-2.8v-4.4c0-1.2-.8-1.5-1-1.5s-1.3.2-1.3 1.5V20H14v-8h3v1.1c.3-.6 1-1.1 2.5-1.1 1.4 0 2.5 1.1 2.5 3.6V20z" />
                    </svg>
                  </a>
                </AnimationOnScroll>
              </li>
              <li>
                <AnimationOnScroll animateIn="animate__rotateIn">
                  <a
                    href="https://github.com/hannyiszoltan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      className="hover:cursor-pointer hover:fill-slate-600 dark:hover:fill-white dark:fill-slate-400"
                    >
                      <path d="M15 3a12 12 0 0 0-3 23.6V24h-1.5c-.8 0-1.6-.4-2-1-.3-.7-.4-1.9-1.3-2.5-.3-.3-.1-.5.2-.5.6.2 1.1.6 1.6 1.2.5.7.7.8 1.6.8l1.7-.1c.3-.9.9-1.6 1.6-2-4-.4-6-2.4-6-5 0-1.2.6-2.4 1.4-3.3-.2-1-.6-2.9.1-3.6 1.8 0 3 1.2 3.2 1.5a9 9 0 0 1 5.8 0c.3-.3 1.4-1.5 3.2-1.5.7.7.3 2.7 0 3.6.9 1 1.4 2 1.4 3.2 0 2.7-2 4.7-5.9 5.1 1.1.6 1.9 2.2 1.9 3.4v3A12 12 0 0 0 15 3z" />
                    </svg>
                  </a>
                </AnimationOnScroll>
              </li>
              <li>
                <AnimationOnScroll animateIn="animate__rotateIn">
                  <img src="" alt="" />
                </AnimationOnScroll>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-2 w-full">
            <h1 className="text-xl md:text-2xl md:font-medium dark:text-white  md:pb-4">
              Contact
            </h1>

            <input
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 rounded-lg dark:bg-slate-700 dark:placeholder-slate-400 dark:border-slate-800 dark:hover:border-white dark:focus:border-white"
              type="text"
              name=""
              placeholder="Name"
            />
            <input
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 rounded-lg dark:bg-slate-700 dark:placeholder-slate-400 dark:border-slate-800 dark:hover:border-white dark:focus:border-white"
              type="email"
              name=""
              placeholder="E-mail"
            />
            <input
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 rounded-lg dark:bg-slate-700 dark:placeholder-slate-400 dark:border-slate-800 dark:hover:border-white dark:focus:border-white"
              type="phone"
              name=""
              placeholder="Phone"
            />
            <textarea
              className="pl-2 w-full border hover:border-slate-500 focus:outline-none focus:border-slate-800 focus:border-2 max-h-60 rounded-lg dark:bg-slate-700 dark:placeholder-slate-400 dark:border-slate-800 dark:hover:border-white dark:focus:border-white"
              rows={6}
              placeholder="Message"
            ></textarea>
            <button
              type="button"
              className="border mt-2 border-slate-600 rounded-lg hover:bg-black hover:text-white dark:bg-slate-700 dark:placeholder-slate-400 dark:hover:bg-slate-800"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
}

export default Contact;
