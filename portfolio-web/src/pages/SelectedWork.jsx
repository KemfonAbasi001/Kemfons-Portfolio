// function Workpage() {
//     return (
//         <section className="flex justify-center">
//             <div className="w-[90%] text-white py-40">
//                 <div className="flex flex-col gap-2.5">
//                     <h1 className="uppercase text-[60px] font-extrabold font-syne">Featured Work</h1>
//                     <a href="#"
//                         className="text-[1.4rem] self-end font-medium flex items-center gap-2 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-size-[0%_2px] bg-position-[0_100%] transition-[background-size] duration-300 hover:bg-size-[100%_2px]"
//                     >
//                         See our work
//                         <img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Workpage;



// /**
//  * FlowText
//  * Splits `text` into individual characters, each masked in its own
//  * overflow-hidden box holding two stacked copies of that character.
//  * The parent link needs the "group" class. On group-hover each
//  * character's track shifts up by 50% (= one character's height,
//  * since the track holds two stacked copies), revealing the duplicate
//  * and hiding the original.
//  *
//  * The transition-delay is staggered per character (index * step),
//  * so the swap ripples left-to-right across the word instead of
//  * moving as one flat block -- mid-transition, later characters lag
//  * behind earlier ones, which is the "sliced" flowing look.
//  */
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

// function Workpage() {
//     return (
//         <section className="flex justify-center">
//             <div className="w-[90%] text-white py-40">
//                 <div className="flex flex-col gap-2.5">
//                     <h1 className="uppercase text-[60px] font-extrabold font-syne">Featured Work</h1>
//                     <a href="#"
//                         className="group text-[1.4rem] self-end font-medium flex items-center gap-2 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-size-[0%_2px] bg-position-[0_100%] transition-[background-size] duration-300 hover:bg-size-[100%_2px]"
//                     >
//                         <FlowText text="See our work" />
//                         <HoverIcon
//                             src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
//                             alt="long-arrow-right"
//                         />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Workpage;

// "use client";
// import { useEffect, useRef, useState } from "react";

// /**
//  * FlowText
//  * Splits `text` into individual characters, each masked in its own
//  * overflow-hidden box holding two stacked copies of that character.
//  * The parent link needs the "group" class. On group-hover each
//  * character's track shifts up by 50% (= one character's height,
//  * since the track holds two stacked copies), revealing the duplicate
//  * and hiding the original.
//  *
//  * The transition-delay is staggered per character (index * step),
//  * so the swap ripples left-to-right across the word instead of
//  * moving as one flat block -- mid-transition, later characters lag
//  * behind earlier ones, which is the "sliced" flowing look.
//  */
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

// /**
//  * useRevealOnce
//  * Fades + rises an element into place the first time it scrolls into
//  * view, then stops observing -- same one-way behaviour and easing
//  * curve as the rest of the site's scroll reveals.
//  */
// function useRevealOnce(threshold = 0.2) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(el);
//         }
//       },
//       { threshold }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, visible];
// }

// const projects = [
//   {
//     id: "001",
//     title: "SOLACE",
//     category: "Wellness Platform",
//     role: "Product Design · Full-Stack",
//     year: "2024",
//   },
//   {
//     id: "002",
//     title: "LEDGER",
//     category: "Fintech Dashboard",
//     role: "Full-Stack Engineering",
//     year: "2023",
//   },
//   {
//     id: "003",
//     title: "ATELIER",
//     category: "Commerce Platform",
//     role: "Front-End · Design System",
//     year: "2023",
//   },
// ];


// function WorkRow({ project, index, onEnter, onLeave }) {
//   const [ref, visible] = useRevealOnce(0.25);

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => onEnter(index)}
//       onMouseLeave={onLeave}
//       className={`group/row relative border-t border-[#FFFFFF1F] last:border-b py-8 lg:py-10 flex items-center justify-between gap-8 cursor-pointer transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//       style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
//     >
//       <div className="flex items-baseline gap-6 lg:gap-10">
//         <span className="font-mono text-[13px] tracking-[0.2em] text-[#5B7FD1] transition-colors duration-300 group-hover/row:text-[#8FB1F5]">
//           {project.id}
//         </span>
//         <h3 className="text-[32px] lg:text-[56px] font-syne font-bold uppercase leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:translate-x-3">
//           {project.title}
//         </h3>
//       </div>
//       <div className="hidden lg:flex flex-col items-end font-inter text-right">
//         <span className="text-[#FFFFFFB3] text-[1rem]">{project.category}</span>
//         <span className="text-[#66707D] text-[0.85rem] font-mono tracking-wide">{project.role}</span>
//       </div>
//       <span className="font-mono text-[13px] text-[#66707D]">{project.year}</span>
//     </div>
//   );
// }

// function WorkList() {
//   const [active, setActive] = useState(null);
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPos({ x: e.clientX + 24, y: e.clientY - 120 });
//   };

//   return (
//     <div className="mt-16 lg:mt-24" onMouseMove={handleMouseMove}>
//       {projects.map((project, i) => (
//         <WorkRow
//           key={project.id}
//           project={project}
//           index={i}
//           onEnter={setActive}
//           onLeave={() => setActive(null)}
//         />
//       ))}

      
//     </div>
//   );
// }

// function Workpage() {
//     return (
//         <section className="flex justify-center">
//             <div className="w-[90%] text-white py-40">
//                 <div className="flex flex-col gap-2.5">
//                     <h1 className="uppercase text-[60px] font-bold font-syne">Featured Work</h1>
//                     <a href="#"
//                         className="group text-[1.4rem] self-end font-medium flex items-center gap-2 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-size-[0%_2px] bg-position-[0_100%] transition-[background-size] duration-300 hover:bg-size-[100%_2px]"
//                     >
//                         <FlowText text="See our work" />
//                         <HoverIcon
//                             src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
//                             alt="long-arrow-right"
//                         />
//                     </a>
//                 </div>

//                 <WorkList />
//             </div>
//         </section>
//     );
// }

// export default Workpage;



"use client";
import { useEffect, useRef, useState } from "react";

/**
 * FlowText
 * Splits `text` into individual characters, each masked in its own
 * overflow-hidden box holding two stacked copies of that character.
 * The parent link needs the "group" class. On group-hover each
 * character's track shifts up by 50%, revealing the duplicate and
 * hiding the original, rippling left-to-right across the word.
 */
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
 * Slide-out-right / re-enter-from-left relay effect for an icon.
 * Parent needs the "group" class.
 */
function HoverIcon({ src, alt, width = 22, height = 22 }) {
  return (
    <span className="relative inline-block overflow-hidden" style={{ width, height }}>
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

/**
 * useRevealOnce
 * Fades + rises an element into place the first time it scrolls into
 * view, then stops observing -- one-way, no replay.
 */
function useRevealOnce(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const projects = [
  {
    id: "01",
    title: "DashUI",
    category: "Commerce Platform",
    role: "Front-End · Design System",
    year: "2023",
    description:
      "A component-driven storefront for independent designers, built around a reusable design system so new product lines ship in days, not weeks.",
    stack: ["React", "Canva", "Node.js", "Tailwind", "Postgres"],
  },
  {
    id: "02",
    title: "Avenoir",
    category: "Wellness Platform",
    role: "Product Design · Full-Stack",
    year: "2024",
    description:
      "A calm, distraction-free wellness app built for daily use — session tracking, guided routines, and a dashboard designed to feel restful rather than gamified.",
    stack: ["React", "Tailwind"],
  },
  {
    id: "03",
    title: "Velmora",
    category: "Fintech Dashboard",
    role: "Full-Stack Engineering",
    year: "2023",
    description:
      "Real-time financial dashboard handling high-frequency data updates with a focus on clarity under pressure — dense information, zero clutter.",
    stack: ["React", "Tailwind"],
  },
  {
    id: "04",
    title: "Hospital",
    category: "Commerce Platform",
    role: "Front-End · Design System",
    year: "2023",
    description:
      "A component-driven storefront for independent designers, built around a reusable design system so new product lines ship in days, not weeks.",
    stack: ["React", "Tailwind"],
  },
];

function ProjectRow({ project, index }) {
  const [ref, visible] = useRevealOnce(0.2);

  return (
    <div
      ref={ref}
      className={`group relative border-t border-[#FFFFFF1F] last:border-b py-8 lg:py-10 overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
    >
      {/* Oversized ghost numeral -- pure typography, no imagery */}
      <span className="pointer-events-none select-none absolute -top-4 lg:-top-8 right-0 font-syne font-extrabold text-[90px] lg:text-[140px] leading-none text-[#FFFFFF08] transition-colors duration-500 group-hover:text-[#acacac27]">
        {project.id}
      </span>

      <div className="relative flex flex-col lg:flex-row lg:items-start justify-between gap-4 lg:gap-10">
        <div className="flex items-baseline gap-4 lg:gap-8">
          <span className="font-mono text-[13px] tracking-[0.2em] transition-colors duration-300 group-hover:text-[#acacac]">
            {project.id}
          </span>
          <h3 className="text-[36px] lg:text-[56px] font-syne font-semibold uppercase leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
            {project.title}
          </h3>
        </div>

        <div className="lg:text-right lg:pl-10 shrink-0">
          <p className="font-inter text-[#FFFFFFB3] text-[1rem]">{project.category}</p>
          <p className="font-mono text-[0.8rem] tracking-wide text-[#acacac]">{project.role}</p>
          <p className="font-mono text-[0.8rem] tracking-wide text-[#acacac] mt-1">{project.year}</p>
        </div>
      </div>

      {/* Hover-reveal detail -- expands height, no image involved */}
      <div className="relative grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div className="overflow-hidden">
          <div className="pt-5 lg:pl-[76px] flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <p className="font-inter text-[#acacac] text-[0.95rem] leading-relaxed max-w-140">
              {project.description}
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex gap-2 font-mono text-[11px] tracking-[0.15em] text-[#acacac] uppercase">
                {project.stack.map((tech) => (
                  <span key={tech} className="border border-[#FFFFFF1F] rounded-full px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="group/link flex items-center gap-2 font-mono text-[13px] tracking-[0.15em] text-white uppercase shrink-0"
              >
                View
                <HoverIcon
                  src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
                  alt="long-arrow-right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkList() {
  return (
    <div className="mt-16 lg:mt-24">
      {projects.map((project, i) => (
        <ProjectRow key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}

function Workpage() {
  return (
    <section className="flex justify-center">
      <div className="w-[90%] text-white py-40">
        <div className="flex flex-col gap-2.5">
          <h1 className="uppercase text-[40px] lg:text-[60px] font-bold font-syne text-white">Featured Work</h1>
          <a
            href="#"
            className="group text-[1.4rem] self-end font-medium flex items-center gap-2 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-size-[0%_2px] bg-position-[0_100%] transition-[background-size] duration-300 hover:bg-size-[100%_2px]"
          >
            <FlowText text="See our work" />
            <HoverIcon
              src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
              alt="long-arrow-right"
            />
          </a>
        </div>

        <WorkList />
      </div>
    </section>
  );
}

export default Workpage;