// "use client";
// import { useEffect, useRef } from "react";

// const socials = [
//   { label: "GITHUB", url: "https://github.com" },
//   { label: "LINKEDIN", url: "https://linkedin.com" },
//   { label: "TWITTER/X", url: "https://x.com" },
// ];

// const headline1Words = ["YOUR", "NEXT", "BIG"].map((t) => ({ t }));
// const headline2Words = ["BUILD", "STARTS", "HERE"].map((t) => ({ t }));

// const paragraph1Words = [
//   { t: "I" }, { t: "build" }, { t: "digital" }, { t: "systems" }, { t: "that" },
//   { t: "look" }, { t: "good" }, { t: "as" },
//   { t: "engineering", hl: true }, { t: "precision", hl: true },
//   { t: "and" }, { t: "design" }, { t: "sensibility." },
//   { t: "Six" }, { t: "years" }, { t: "of" }, { t: "shipping" }, { t: "production" },
//   { t: "applications" }, { t: "for" }, { t: "startups" }, { t: "and" },
//   { t: "enterprises" }, { t: "—" }, { t: "each" }, { t: "one" }, { t: "a" },
//   { t: "lesson" }, { t: "in" }, { t: "restraint." },
// ];

// const paragraph2Words =
//   "My approach is reductive. Strip away everything that doesn't serve the user, the business, or the craft. What remains is work that performs under pressure and ages with dignity."
//     .split(" ")
//     .map((t) => ({ t }));

// function Word({ word, register }) {
//   return (
//     <span className="inline-block overflow-hidden">
//       <span
//         ref={register}
//         className={`inline-block ${word.hl ? "text-[#FFFFFFB3]" : ""}`}
//         style={{
//           transform: "translateY(115%) scale(0.96)",
//           opacity: 0,
//         }}
//       >
//         {word.t}&nbsp;
//       </span>
//     </span>
//   );
// }

// function FlowText({ text, step = 18, className = "" }) {
//   return (
//     <span className={`inline-flex ${className}`}>
//       {[...text].map((ch, i) => (
//         <span
//           key={i}
//           className="relative inline-block overflow-hidden h-[1.2em] leading-[1.2em] align-top"
//         >
//           <span
//             className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1/2"
//             style={{ transitionDelay: `${i * step}ms` }}
//           >
//             <span className="block h-[1.2em] leading-[1.2em]">
//               {ch === " " ? "\u00A0" : ch}
//             </span>
//             <span className="block h-[1.2em] leading-[1.2em]">
//               {ch === " " ? "\u00A0" : ch}
//             </span>
//           </span>
//         </span>
//       ))}
//     </span>
//   );
// }

// /**
//  * HoverIcon
//  * Wraps an icon image in an overflow-hidden box holding two absolutely
//  * positioned copies. The parent link needs the "group" class.
//  * On group-hover, the visible copy slides right and fades out while a
//  * second copy slides in from the left (slightly delayed), giving a
//  * "slide out to the right, re-enter from the left" relay effect.
//  */
// function HoverIcon({ src, alt, width = 25, height = 25 }) {
//   return (
//     <span
//       className="relative inline-block overflow-hidden"
//       style={{ width, height }}
//     >
//       <img
//         src={src}
//         alt={alt}
//         width={width}
//         height={height}
//         className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[150%] group-hover:opacity-0"
//       />
//       <img
//         src={src}
//         alt={alt}
//         width={width}
//         height={height}
//         className="absolute inset-0 -translate-x-[150%] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0 group-hover:opacity-100"
//         style={{ transitionDelay: "80ms" }}
//       />
//     </span>
//   );
// }

// export function Beforefooter() {
//   // Group 1: headline + paragraph 1 -- revealed when the top of the section enters view
//   const lineRefs = useRef([]);
//   const delays = useRef([]);
//   const sectionRef = useRef(null);

//   // Group 2: paragraph 2 -- revealed independently, only once IT scrolls into view
//   const lineRefs2 = useRef([]);
//   const delays2 = useRef([]);
//   const p2Ref = useRef(null);

//   let idx = 0;
//   let t = 100;
//   const register = (nextGap) => {
//     const currentIdx = idx;
//     const currentDelay = t;
//     idx += 1;
//     t += nextGap;
//     return (el) => {
//       lineRefs.current[currentIdx] = el;
//       delays.current[currentIdx] = currentDelay;
//     };
//   };

//   let idx2 = 0;
//   let t2 = 100;
//   const register2 = (nextGap) => {
//     const currentIdx = idx2;
//     const currentDelay = t2;
//     idx2 += 1;
//     t2 += nextGap;
//     return (el) => {
//       lineRefs2.current[currentIdx] = el;
//       delays2.current[currentIdx] = currentDelay;
//     };
//   };

//   const h1WordRefs = headline1Words.map(() => register(65));
//   const h2WordRefs = headline2Words.map(() => register(65));
//   const p1WordRefs = paragraph1Words.map(() => register(38));
//   const p2WordRefs = paragraph2Words.map(() => register2(32));

//   useEffect(() => {
//     const makePlay = (lines, delaysRef) => () => {
//       lines.forEach((el, i) => {
//         if (!el) return;
//         el.style.transition = "none";
//         el.style.transform = "translateY(115%) scale(0.96)";
//         el.style.opacity = "0";
//         void el.offsetHeight;
//         el.style.transition =
//           "transform 1100ms cubic-bezier(0.22,1,0.36,1), opacity 900ms ease-out";
//         el.style.transitionDelay = `${delaysRef[i]}ms`;
//         requestAnimationFrame(() => {
//           el.style.transform = "translateY(0%) scale(1)";
//           el.style.opacity = "1";
//         });
//       });
//     };

//     const play1 = makePlay(lineRefs.current, delays.current);
//     const play2 = makePlay(lineRefs2.current, delays2.current);

//     const observer1 = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           play1();
//           observer1.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     const observer2 = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           play2();
//           observer2.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer1.observe(sectionRef.current);
//     if (p2Ref.current) observer2.observe(p2Ref.current);

//     return () => {
//       observer1.disconnect();
//       observer2.disconnect();
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="flex justify-center pt-40 pb-30 w-full">
//       <div className="w-[90%] text-white flex flex-col gap-15 lg:gap-25">
//         <span className="">
//           <h1 className="uppercase text-[30px] lg:text-[60px] lg:leading-18 font-syne font-bold">
//             {headline1Words.map((word, i) => (
//               <Word key={i} word={word} register={h1WordRefs[i]} />
//             ))}
//           </h1>
//           <h1 className="uppercase text-[30px] lg:text-[60px] lg:leading-18 font-syne font-bold">
//             {headline2Words.map((word, i) => (
//               <Word key={i} word={word} register={h2WordRefs[i]} />
//             ))}
//           </h1>
//         </span>
//         <div className="flex flex-col font-inter gap-12 lg:gap-15 lg:ml-80">
//           <p className="text-[32px] lg:text-[37px] font-medium w-full lg:w-160">
//             {paragraph1Words.map((word, i) => (
//               <Word key={i} word={word} register={p1WordRefs[i]} />
//             ))}
//           </p>
//           <p ref={p2Ref} className="text-[1.3rem] text-[#FFFFFFB3] font-medium w-100 lg:ml-90">
//             {paragraph2Words.map((word, i) => (
//               <Word key={i} word={word} register={p2WordRefs[i]} />
//             ))}
//           </p>
//         </div>
//         <a
//           href=""
//           className="group lg:ml-165 py-3.5 px-10 bg-black w-fit text-[1.4rem] flex items-center gap-3 text-white"
//         >
//           <FlowText text="Schedule a call" />
//           <HoverIcon
//             src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
//             alt="long-arrow-right"
//           />
//         </a>
//       </div>
//     </section>
//   );
// }

// export function Footerpage() {
//   return (
//     <section className="flex justify-center bg-[#121212] py-20">
//       <div className="w-[90%] text-white flex flex-col gap-25">
//         <div className="flex justify-between items-start flex-col lg:flex-row gap-15 ">
//           <div className="flex flex-col gap-17">
//             <a
//               href="#"
//               className="group text-[2.2rem] font-inter font-medium flex items-center gap-4 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-position-[0_100%] bg-size-[100%_2px]"
//             >
//               <FlowText text="Let's collaborate" />
//               <HoverIcon
//                 src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
//                 alt="long-arrow-right"
//                 width={35}
//                 height={25}
//               />
//             </a>

//           <div className="flex gap-30">
//             <ul className="flex flex-col text-white gap-8 font-syne text-3xl">
//               <li className="">
//                 <a href="" className="flex gap-1">
//                   <span className="text-[.8rem]">01</span>
//                   WORK
//                 </a>
//               </li>
//               <li className="">
//                 <a href="" className="flex gap-1">
//                   <span className="text-[.8rem]">02</span>
//                   ABOUT
//                 </a>
//               </li>
//             </ul>
//             <ul className="flex flex-col text-white gap-8 font-syne text-3xl">
//               <li className="">
//                 <a href="" className="flex gap-1">
//                   <span className="text-[.8rem]">03</span>
//                   STACK
//                 </a>
//               </li>
//               <li className="">
//                 <a href="" className="flex gap-1">
//                   <span className="text-[.8rem]">04</span>
//                   PROCESS
//                 </a>
//               </li>
//             </ul>
//           </div>


//           </div>

//           <div className="w-[30%] text-[#FFFFFFB3] ">
//             <span className="font-mono text-[13px] tracking-[0.25em] text-metal-dark block mb-6">
//               CONNECT
//             </span>
//             <div className="space-y-0">
//               {socials.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center justify-between gap-8 py-4 border-b border-[#91919180] hover:border-metal-dark transition-colors duration-300"
//                 >
//                   <span className="font-mono text-[1rem] tracking-[0.15em] text-metal-medium group-hover:text-white transition-colors duration-300">
//                     {social.label}
//                   </span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-4 h-4 text-metal-dark group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                   >
//                     <path d="M13 5H19V11" />
//                     <path d="M19 5L5 19" />
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="w-full border-t border-b-0 border-x-0 pt-8 pb-3 border-solid border-[#91919180] flex lg:justify-between lg:flex-row flex-col">
//             <p className="text-[#FFFFFFB3] text-[1.1rem] text-normal font-mono">DESIGNED & DEVELOPED WITH PRECISION</p>
//             <span className="flex gap-3 font-mono">
//                 <p className="text-[#FFFFFFB3] text-[1.1rem] text-normal">NIGERIA</p>
//                 <p className="text-[#FFFFFFB3] text-[1.1rem] text-normal"> © {new Date().getFullYear()}</p>
//             </span>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef } from "react";

const socials = [
  { label: "GITHUB", url: "https://github.com" },
  { label: "LINKEDIN", url: "https://linkedin.com" },
  { label: "TWITTER/X", url: "https://x.com" },
];

const headline1Words = ["YOUR", "NEXT", "BIG"].map((t) => ({ t }));
const headline2Words = ["BUILD", "STARTS", "HERE"].map((t) => ({ t }));

const paragraph1Text =
  "I build brands that perform as good as they look, solving real business problems along the way.  Every product I ship is built to stand out, hold attention, and generate revenue  — grounded in what genuinely drives business growth.";

const paragraph1Highlights = new Set(["generate", "revenue"]);

const paragraph1Words = paragraph1Text.split(" ").map((t) => ({
  t,
  hl: paragraph1Highlights.has(t),
}));

const paragraph2Text =
  "My approach is reductive. Strip away everything that doesn't serve the user, the business, or the craft. What remains is work that performs under pressure and ages with dignity.";

const paragraph2Words = paragraph2Text.split(" ").map((t) => ({ t }));

function Word({ word, register }) {
  return (
    <span className="inline-block overflow-hidden">
      <span
        ref={register}
        className={`inline-block ${word.hl ? "text-[#A7A7A7]" : ""}`}
        style={{
          transform: "translateY(115%) scale(0.96)",
          opacity: 0,
        }}
      >
        {word.t}&nbsp;
      </span>
    </span>
  );
}

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

/**
 * HoverIcon
 * Wraps an icon image in an overflow-hidden box holding two absolutely
 * positioned copies. The parent link needs the "group" class.
 * On group-hover, the visible copy slides right and fades out while a
 * second copy slides in from the left (slightly delayed), giving a
 * "slide out to the right, re-enter from the left" relay effect.
 */
function HoverIcon({ src, alt, width = 25, height = 25 }) {
  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[150%] group-hover:opacity-0"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 -translate-x-[150%] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0 group-hover:opacity-100"
        style={{ transitionDelay: "80ms" }}
      />
    </span>
  );
}

export function Beforefooter() {
  // Group 1: headline + paragraph 1 -- revealed when the top of the section enters view
  const lineRefs = useRef([]);
  const delays = useRef([]);
  const sectionRef = useRef(null);

  // Group 2: paragraph 2 -- revealed independently, only once IT scrolls into view
  const lineRefs2 = useRef([]);
  const delays2 = useRef([]);
  const p2Ref = useRef(null);

  let idx = 0;
  let t = 100;
  const register = (nextGap) => {
    const currentIdx = idx;
    const currentDelay = t;
    idx += 1;
    t += nextGap;
    return (el) => {
      lineRefs.current[currentIdx] = el;
      delays.current[currentIdx] = currentDelay;
    };
  };

  let idx2 = 0;
  let t2 = 100;
  const register2 = (nextGap) => {
    const currentIdx = idx2;
    const currentDelay = t2;
    idx2 += 1;
    t2 += nextGap;
    return (el) => {
      lineRefs2.current[currentIdx] = el;
      delays2.current[currentIdx] = currentDelay;
    };
  };

  const h1WordRefs = headline1Words.map(() => register(65));
  const h2WordRefs = headline2Words.map(() => register(65));
  const p1WordRefs = paragraph1Words.map(() => register(38));
  const p2WordRefs = paragraph2Words.map(() => register2(32));

  useEffect(() => {
    const makePlay = (lines, delaysRef) => () => {
      lines.forEach((el, i) => {
        if (!el) return;
        el.style.transition = "none";
        el.style.transform = "translateY(115%) scale(0.96)";
        el.style.opacity = "0";
        void el.offsetHeight;
        el.style.transition =
          "transform 1100ms cubic-bezier(0.22,1,0.36,1), opacity 900ms ease-out";
        el.style.transitionDelay = `${delaysRef[i]}ms`;
        requestAnimationFrame(() => {
          el.style.transform = "translateY(0%) scale(1)";
          el.style.opacity = "1";
        });
      });
    };

    const play1 = makePlay(lineRefs.current, delays.current);
    const play2 = makePlay(lineRefs2.current, delays2.current);

    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play1();
          observer1.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play2();
          observer2.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer1.observe(sectionRef.current);
    if (p2Ref.current) observer2.observe(p2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex justify-center pt-10 lg:pt-40 pb-30 w-full">
      <div className="w-[90%] text-white flex flex-col gap-15 lg:gap-25">
        <span className="">
          <h1 className="uppercase text-[26px] lg:text-[60px] lg:leading-18 font-syne font-bold">
            {headline1Words.map((word, i) => (
              <Word key={i} word={word} register={h1WordRefs[i]} />
            ))}
          </h1>
          <h1 className="uppercase text-[26px] lg:text-[60px] lg:leading-18 font-syne font-bold">
            {headline2Words.map((word, i) => (
              <Word key={i} word={word} register={h2WordRefs[i]} />
            ))}
          </h1>
        </span>
        <div className="flex flex-col font-inter gap-12 lg:gap-15 lg:ml-80">
          <p className="text-[33px] leading-[40px] lg:text-[45px] lg:leading-[50px] font-medium w-full lg:w-160">
            {paragraph1Words.map((word, i) => (
              <Word key={i} word={word} register={p1WordRefs[i]} />
            ))}
          </p>
          <p ref={p2Ref} className="text-[1.3rem] text-[#A7A7A7] font-medium w-100 lg:ml-90">
            {paragraph2Words.map((word, i) => (
              <Word key={i} word={word} register={p2WordRefs[i]} />
            ))}
          </p>
        </div>
        <a
          href=""
          className="group lg:ml-165 py-3.5 px-7 lg:px-10 bg-black w-fit text-[1.1rem] lg:text-[1.4rem] flex items-center gap-3 text-white"
        >
          <FlowText text="Schedule a call" />
          <HoverIcon
            src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
            alt="long-arrow-right"
          />
        </a>
      </div>
    </section>
  );
}

export function Footerpage() {
  return (
    <section className="flex justify-center bg-[#121212] py-20">
      <div className="w-[90%] text-white flex flex-col gap-25">
        <div className="flex justify-between items-start flex-col lg:flex-row gap-15 ">
          <div className="flex flex-col gap-17">
            <a
              href="#"
              className="group text-[2.2rem] font-inter font-medium flex items-center gap-4 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-position-[0_100%] bg-size-[100%_2px]"
            >
              <FlowText text="Let's collaborate" />
              <HoverIcon
                src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
                alt="long-arrow-right"
                width={35}
                height={25}
              />
            </a>

          <div className="flex gap-30">
            <ul className="flex flex-col text-white gap-8 font-syne text-2xl lg:text-3xl">
              <li className="">
                <a href="" className="flex gap-1">
                  <span className="text-[.8rem]">01</span>
                  WORK
                </a>
              </li>
              <li className="">
                <a href="" className="flex gap-1">
                  <span className="text-[.8rem]">02</span>
                  ABOUT
                </a>
              </li>
            </ul>
            <ul className="flex flex-col text-white gap-8 font-syne text-2xl lg:text-3xl">
              <li className="">
                <a href="" className="flex gap-1">
                  <span className="text-[.8rem]">03</span>
                  STACK
                </a>
              </li>
              <li className="">
                <a href="" className="flex gap-1">
                  <span className="text-[.8rem]">04</span>
                  PROCESS
                </a>
              </li>
            </ul>
          </div>


          </div>

          <div className="w-full lg:w-[30%] text-[#FFFFFFB3] ">
            <span className="font-mono text-[13px] tracking-[0.25em] text-metal-dark block mb-6">
              CONNECT
            </span>
            <div className="space-y-0">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-8 py-4 border-b border-[#91919180] hover:border-metal-dark transition-colors duration-300"
                >
                  <span className="font-mono text-[1rem] tracking-[0.15em] text-metal-medium group-hover:text-white transition-colors duration-300">
                    {social.label}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-metal-dark group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M13 5H19V11" />
                    <path d="M19 5L5 19" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-b-0 border-x-0 pt-8 pb-3 border-solid border-[#91919180] flex lg:justify-between lg:flex-row flex-col">
            <p className="text-[#FFFFFFB3] text-[1.1rem] text-normal font-mono">DESIGNED & DEVELOPED WITH PRECISION</p>
            <span className="flex gap-3 font-mono">
                <p className="text-[#FFFFFFB3] text-[1.1rem] text-normal">NIGERIA</p>
                <p className="text-[#FFFFFFB3] text-[1.1rem] text-normal"> © {new Date().getFullYear()}</p>
            </span>
        </div>
      </div>
    </section>
  );
}