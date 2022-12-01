import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

function ProjectsContent({ name, imgURL, stack, link }) {
  return (
    <AnimationOnScroll
    animateOnce={true}
      animateIn="animate__backInLeft animate__faster"
    >
      <section className="border-4 rounded-md border-stone-700 py-4 px-2 overflow-hidden">
        <a href={link} target="_blank">
          <img
            src={imgURL}
            alt="portfolio"
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
          />
        </a>
        <div className="w-full p-6">
          <h3>{name}</h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map((item) => (
              <span className="px-2 py-1 inline-block border-stone-900 border-2 rounded-lg">
                {item}
              </span>
            ))}
          </p>
        </div>
      </section>
    </AnimationOnScroll>
  );
}

export default ProjectsContent;
