// function Processpage() {
//     return(
//         <section className="flex justify-center">
//             <div className="w-[90%] text-white flex flex-col gap-20 py-10">
//                 <div className="w-full py-10 flex gap-55">
//                     <div className="font-mono flex items-end">
//                         <p className="text-[1.2rem]">01</p>
//                     </div>
//                     <div className="">
//                         <h1 className="uppercase text-[50px] font-syne font-extrabold">strategy</h1>
//                         <p className="text-[1.3rem] font-medium font-inter text-[#B3B3B3] w-190">Deep-dive discovery sessions to understand your business goals, user needs, and competitive landscape. We define the technical architecture and project roadmap before writing a single line of code.</p>
//                     </div>
//                 </div>
//                 <div className="w-full py-10 flex gap-55">
//                     <div className="font-mono flex items-end">
//                         <p className="text-[1.2rem]">02</p>
//                     </div>
//                     <div className="">
//                         <h1 className="uppercase text-[50px] font-syne font-extrabold">Architecture</h1>
//                         <p className="text-[1.3rem] font-medium font-inter text-[#B3B3B3] w-190">A collaborative design process that translates strategy into visuals that feel unmistakably you — building a brand and interface that communicates with purpose and clarity.</p>
//                     </div>
//                 </div>
//                 <div className="w-full py-10 flex gap-55">
//                     <div className="font-mono flex items-end">
//                         <p className="text-[1.2rem]">03</p>
//                     </div>
//                     <div className="">
//                         <h1 className="uppercase text-[50px] font-syne font-extrabold">Development</h1>
//                         <p className="text-[1.3rem] font-medium font-inter text-[#B3B3B3] w-190">Clean, modular, and performant code. I build with modern frameworks and best practices, ensuring your product is fast, accessible, and built to evolve. Every component is tested and optimized.</p>
//                     </div>
//                 </div>
//                 <div className="w-full py-10 flex gap-55">
//                     <div className="font-mono flex items-end">
//                         <p className="text-[1.2rem]">04</p>
//                     </div>
//                     <div className="">
//                         <h1 className="uppercase text-[50px] font-syne font-extrabold">Launch</h1>
//                         <p className="text-[1.3rem] font-medium font-inter text-[#B3B3B3] w-190">Seamless deployment with comprehensive QA, performance audits, and post-launch monitoring. We don't just ship — we ensure sustained excellence.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Processpage


"use client";
import { useEffect, useRef } from "react";

/**
 * AnimatedWords
 * Splits `text` into words, each masked in its own overflow-hidden
 * box. Uses its own IntersectionObserver so it reveals only once,
 * only when it itself scrolls into view -- independent of any other
 * AnimatedWords instance on the page. No flash on first load since
 * every word starts hidden via inline style before JS ever runs.
 */
function AnimatedWords({ text, className = "", wordClassName = "", step = 32, threshold = 0.3 }) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        wordRefs.current.forEach((wordEl, i) => {
          if (!wordEl) return;
          wordEl.style.transition = "none";
          wordEl.style.transform = "translateY(115%) scale(0.96)";
          wordEl.style.opacity = "0";
          void wordEl.offsetHeight;
          wordEl.style.transition =
            "transform 1100ms cubic-bezier(0.22,1,0.36,1), opacity 900ms ease-out";
          wordEl.style.transitionDelay = `${i * step}ms`;
          requestAnimationFrame(() => {
            wordEl.style.transform = "translateY(0%) scale(1)";
            wordEl.style.opacity = "1";
          });
        });

        observer.unobserve(el);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [step, threshold]);

  return (
    <span ref={containerRef} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            ref={(node) => (wordRefs.current[i] = node)}
            className={`inline-block ${wordClassName}`}
            style={{ transform: "translateY(115%) scale(0.96)", opacity: 0 }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}

const steps = [
  {
    // number: "01",
    title: "strategy",
    body: "Deep-dive discovery sessions to understand your business goals, user needs, and competitive landscape. We define the technical architecture and project roadmap before writing a single line of code.",
  },
  {
    // number: "02",
    title: "Architecture",
    body: "A collaborative design process that translates strategy into visuals that feel unmistakably you — building a brand and interface that communicates with purpose and clarity.",
  },
  {
    // number: "03",
    title: "Development",
    body: "Clean, modular, and performant code. I build with modern frameworks and best practices, ensuring your product is fast, accessible, and built to evolve. Every component is tested and optimized.",
  },
  {
    // number: "04",
    title: "Launch",
    body: "Seamless deployment with comprehensive QA, performance audits, and post-launch monitoring. We don't just ship — we ensure sustained excellence.",
  },
];

function Processpage() {
  return (
    <section className="flex justify-center pt-13 lg:pt-0" id="process">
      <div className="w-[90%] max-w-300 text-white flex flex-col gap-12 lg:gap-10 py-10">
        {steps.map((s) => (
          <div key={s.number} className="w-full py-0 lg:py-10 ">
            {/* <div className="font-mono flex items-end">
              <p className="text-[1.2rem]">{s.number}</p>
            </div> */}
            <div>
              <h1 className="uppercase text-[23px] xl:text-[64px] md:text-[40px] lg:text-[45px] lg:ml-5 xl:ml-10 font-syne font-extrabold overflow-hidden">
                <AnimatedWords text={s.title} step={45} />
              </h1>
              <p className="text-[1.3rem] xl:ml-60 font-medium font-inter lg:ml-40 text-[#B3B3B3] xl:w-190">
                <AnimatedWords text={s.body} step={22} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Processpage;