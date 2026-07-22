import { useState, useEffect } from "react"
import HeaderSec from "../components/Header"
import picture from "../assets/my-photo.webp"
import resume from '../assets/Kemfon-Resume.pdf'

function FlowText({ text, step = 18, className = "" }) {
  return (
    <span className={`inline-flex ${className}`}>
      {[...text].map((ch, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden h-[1.2em] leading-[1.2em] align-top"
        >
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1/2"
            style={{ transitionDelay: `${i * step}ms` }}
          >
            <span className="block h-[1.2em] leading-[1.2em]">
              {ch === " " ? "\u00A0" : ch}
            </span>
            <span className="block h-[1.2em] leading-[1.2em]">
              {ch === " " ? "\u00A0" : ch}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}

function Landingpage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const reveal = () =>
    `transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    }`;

  return (
    <>
      <HeaderSec/>
      <section className="flex justify-center relative">
        <div className="w-[90%] max-w-300 text-white flex-col-reverse flex pt-40 pb-10 lg:py-40 z-300 gap-20">
          <img
            src={picture}
            alt=""
            className={`relative self-end lg:absolute w-90 lg:w-60 lg:top-24 z-300 right-0 ${reveal()}`}
            style={{ transitionDelay: visible ? "900ms" : "0ms" }}
          />
          <div className="relative z-500">
            <p
              className={`uppercase font-mono mb-1.5 text-[14px] ${reveal()}`}
              style={{ transitionDelay: visible ? "0ms" : "0ms" }}
            >
              [STATUS: Full Stack Developer]
            </p>
            <h1
              id="header-text"
              className={`text-[30px] md:text-[50px] lg:text-[65px] xl:text-[80px] font-syne font-extrabold ${reveal()}`}
              style={{ transitionDelay: visible ? "250ms" : "0ms" }}
            >
              <span className="">Build with</span>
              <br/>
              <span className="lg:ml-30 text-[#FFFFFFB3]">KemfonAbasi</span>
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 lg:justify-between mt-4">
              <p
                className={`text-[21px] text-[#FFFFFFB3] leading-8.25 lg:leading-7.5 font-medium tracking-[-0.16px] lg:w-130 font-inter ${reveal()}`}
                style={{ transitionDelay: visible ? "500ms" : "0ms" }}
              >
                Building precise, performant digital systems where engineering rigor meets design sensibility. Every interface tells a story of intentional craft.
              </p>
              <a
                href={resume}
                className={`group font-mono py-2.75 border border-solid border-[rgba(255, 255, 255, 0.2)] text-[rgb(207, 213, 220)] h-fit px-9 self-end ${reveal()}`}
                style={{ transitionDelay: visible ? "700ms" : "0ms" }}
              >
                <FlowText text="[OPEN_RESUME]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landingpage