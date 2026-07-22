"use client";
import { useEffect, useRef } from "react";

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
    title: "strategy",
    body: "Deep-dive discovery sessions to understand your business goals, user needs, and competitive landscape. We define the technical architecture and project roadmap before writing a single line of code.",
  },
  {
    title: "Architecture",
    body: "A collaborative design process that translates strategy into visuals that feel unmistakably you — building a brand and interface that communicates with purpose and clarity.",
  },
  {
    title: "Development",
    body: "Clean, modular, and performant code. I build with modern frameworks and best practices, ensuring your product is fast, accessible, and built to evolve. Every component is tested and optimized.",
  },
  {
    title: "Launch",
    body: "Seamless deployment with comprehensive QA, performance audits, and post-launch monitoring. We don't just ship — we ensure sustained excellence.",
  },
];

function Processpage() {
  return (
    <section className="flex noise-bg overflow-hidden justify-center pt-13 lg:pt-0" id="process">
      <div className="w-[90%] max-w-300 text-white flex flex-col gap-12 lg:gap-10 py-10">
        {steps.map((s) => (
          <div key={s.number} className="w-full py-0 lg:py-10 ">
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