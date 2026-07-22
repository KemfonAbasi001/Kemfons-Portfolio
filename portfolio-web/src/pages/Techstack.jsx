import React, { useRef, useState, useEffect } from "react";

const stackData = {
  languages: {
    title: "LANGUAGES",
    items: ["JavaScript",  "HTML5", "CSS3", "SQL"],
  },
  frameworks: {
    title: "FRAMEWORKS",
    items: ["JQuery", "React", "Node.js", "Express"],
  },
  css_frameworks: {
    title: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS Modules"],
  },

  tools: {
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  Design_Tools: {
    title: " Tooling",
    items: ["Figma", "Canva", "Vercel", "npm / pnpm", "Postman", "Git", "GitHub"],
  },
  practiceItems: {
    title: "Practice",
    items: ["Problem Solving", "Team Collaboration", "Responsive & Cross-Browser", "Performance", "Accessibility"],
  }

};

function useInView(ref, { once = true, margin = "0px" } = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, margin]);

  return isInView;
}

function StackColumn({ title, items, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full flex-1 text-[#acacac] border border-[#91919180] bg-charcoal/30 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center gap-2 px-5 lg:py-3 py-4 border-b border-[#91919180]">
        <div className="lg:w-2.5 lg:h-2.5 w-3 h-3 rounded-full bg-[#91919180]" />
        <div className="lg:w-2.5 lg:h-2.5 w-3 h-3 rounded-full bg-[#91919180]" />
        <div className="lg:w-2.5 lg:h-2.5 w-3 h-3 rounded-full bg-[#91919180]" />
        <span className="ml-1 font-mono text-[14px] md:text-[1.2rem] lg:text-[11px] text-industrial/50 tracking-widest">{title}</span>
      </div>

      <div className="p-5 space-y-0">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-4 py-4 lg:py-2.5 border-b border-[#91919180] last:border-0 group hover:bg-[#171717] transition-colors duration-300 px-1"
          >
            <span className="font-mono text-[14px] md:text-[1.2rem] lg:text-[11px] text-industrial/30 w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-mono text-[15px] md:text-[1.2rem] lg:text-[14px] text-industrial group-hover:text-white transition-colors duration-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section id="stack" className="noise-bg overflow-hidden flex justify-center">
      <div ref={sectionRef} className="w-[90%] max-w-300 gap-12 flex flex-col py-1 md:pb-12 md:pt-25">
        <h2
            className="uppercase text-[40px] lg:text-[60px] font-bold font-syne text-white"
        >
            STACK
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4">

          <div className="flex flex-col gap-4 w-full lg:w-[40%]">
            <StackColumn title={stackData.languages.title} items={stackData.languages.items} delay={0} />
            <div className="flex gap-4 flex-col lg:flex-row">
              <StackColumn title={stackData.css_frameworks.title} items={stackData.css_frameworks.items} delay={150} />
              <StackColumn title={stackData.frameworks.title} items={stackData.frameworks.items} delay={150} />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[27%]">
            <StackColumn title={stackData.tools.title} items={stackData.tools.items} delay={300} />
            <StackColumn title={stackData.practiceItems.title} items={stackData.practiceItems.items} delay={300} />
          </div>

          <StackColumn title={stackData.Design_Tools.title} items={stackData.Design_Tools.items} delay={300} />           
        </div>
      </div>
    </section>
  );
}