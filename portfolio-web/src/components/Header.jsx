// function HeaderSec() {
//     return(
//         <header className="bg-[#1D1D1D] w-full fixed top-0 left-0 z-999">
//           <nav className="py-3 justify-between w-[90%] mx-auto my-0 flex items-center">
//             <a href="" className="">
//               <h1 className="font-syne text-[1.5rem] font-extrabold text-[#FFFFFF]">Jonah</h1>
//             </a>

//             <ul className="flex text-white gap-10 font-mono">
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

//             <a href="" className="bg-[black] text-[#FFFFFF] py-3 px-6 font-inter text-[1.1rem] font-medium tracking-[-0.16px] flex gap-2">Available for work <img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/> </a>
//           </nav>


//         </header>
//   )
// }

// export default HeaderSec


// import { useState, useEffect } from "react";

// function HeaderSec() {
//   const [open, setOpen] = useState(false);

//   // lock scroll while the mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);

//   const links = [
//     { n: "01", label: "WORK" },
//     { n: "02", label: "ABOUT" },
//     { n: "03", label: "STACK" },
//     { n: "04", label: "PROCESS" },
//   ];

//   return (
//     <header className="bg-[#1D1D1D] w-full fixed top-0 left-0 z-[999]">
//       <nav className="py-3 justify-between w-[90%] mx-auto my-0 flex items-center">
//         <a href="" className="">
//           <h1 className="font-syne text-[1.5rem] font-extrabold text-[#FFFFFF]">Jonah</h1>
//         </a>

//         {/* desktop nav — unchanged, hidden on mobile */}
//         <ul className="hidden md:flex text-white gap-10 font-mono">
//           {links.map((link) => (
//             <li key={link.n}>
//               <a href="" className="flex gap-1">
//                 <span className="text-[.8rem]">{link.n}</span>
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a
//           href=""
//           className="hidden md:flex bg-[black] text-[#FFFFFF] py-3 px-6 font-inter text-[1.1rem] font-medium tracking-[-0.16px] gap-2"
//         >
//           Available for work{" "}
//           <img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
//         </a>

//         {/* mobile hamburger trigger — mobile only */}
//         <button
//           onClick={() => setOpen(!open)}
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//           aria-label={open ? "Close menu" : "Open menu"}
//           className="md:hidden relative z-[1000] w-11 h-11 flex flex-col items-center justify-center gap-[6px] cursor-pointer"
//         >
//           <span
//             className={`block h-[1.5px] bg-white transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
//               open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6 rotate-0 translate-y-0"
//             }`}
//           />
//           <span
//             className={`block h-[1.5px] bg-white transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
//               open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-6 rotate-0 translate-y-0"
//             }`}
//           />
//         </button>
//       </nav>

//       {/* mobile overlay menu — circular reveal from the hamburger button */}
//       <div
//         id="mobile-menu"
//         className={`md:hidden fixed inset-0 bg-[#1D1D1D] transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
//           open ? "[clip-path:circle(150%_at_95%_5%)]" : "[clip-path:circle(0%_at_95%_5%)]"
//         } pointer-events-none`}
//         style={open ? { pointerEvents: "auto" } : undefined}
//       >
//         <div className="w-[90%] mx-auto h-full flex flex-col justify-center gap-2">
//           {links.map((link, i) => (
//             <a
//               key={link.n}
//               href=""
//               onClick={() => setOpen(false)}
//               className={`flex items-baseline gap-3 border-t border-white/10 py-5 last:border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                 open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//               }`}
//               style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
//             >
//               <span className="font-mono text-[.8rem] text-white/40">{link.n}</span>
//               <span className="font-syne text-[2.2rem] font-extrabold text-white leading-none">
//                 {link.label}
//               </span>
//             </a>
//           ))}

//           <a
//             href=""
//             onClick={() => setOpen(false)}
//             className={`mt-8 bg-white text-[#1D1D1D] py-4 px-6 font-inter text-[1rem] font-medium tracking-[-0.16px] flex items-center justify-center gap-2 w-fit transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//               open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//             style={{ transitionDelay: open ? `${120 + links.length * 70}ms` : "0ms" }}
//           >
//             Available for work
//             <img width="20" height="20" src="https://img.icons8.com/puffy/32/1D1D1D/long-arrow-right.png" alt="long-arrow-right" />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default HeaderSec;



import { useState, useEffect } from "react";

function HeaderSec() {
  const [open, setOpen] = useState(false);

  // lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { n: "01", label: "WORK" },
    { n: "02", label: "ABOUT" },
    { n: "03", label: "STACK" },
    { n: "04", label: "PROCESS" },
  ];

  return (
    <header className="bg-[#1D1D1D] w-full fixed top-0 left-0 z-[999]">
      <nav className="py-3 justify-between w-[90%] mx-auto my-0 flex items-center">
        <a href="" className="">
          <h1 className="font-syne text-[1.5rem] font-extrabold text-[#FFFFFF]">Jonah</h1>
        </a>

        {/* desktop nav — unchanged, hidden on mobile */}
        <ul className="hidden md:flex text-white gap-10 font-mono">
          {links.map((link) => (
            <li key={link.n}>
              <a href="" className="flex gap-1">
                <span className="text-[.8rem]">{link.n}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href=""
          className="hidden md:flex bg-[black] text-[#FFFFFF] py-3 px-6 font-inter text-[1.1rem] font-medium tracking-[-0.16px] gap-2"
        >
          Available for work{" "}
          <img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
        </a>

        {/* mobile-only group: CTA stays visible + new pill hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href=""
            className="flex items-center bg-[black] text-[#FFFFFF] py-2 pl-4 pr-3 font-inter text-[.8rem] font-medium tracking-[-0.16px] gap-2 whitespace-nowrap"
          >
            Available for work
            <img className="w-[16px] h-[16px]" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
          </a>

          <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative z-[1000] w-11 h-11 flex flex-col items-center justify-center gap-[6px] cursor-pointer"
        >
          <span
            className={`block h-[1.5px] bg-white transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6 rotate-0 translate-y-0"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-6 rotate-0 translate-y-0"
            }`}
          />
        </button>
          
        </div>
      </nav>

      {/* mobile overlay menu — circular reveal from the hamburger button */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-[#1D1D1D] transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "[clip-path:circle(150%_at_95%_5%)]" : "[clip-path:circle(0%_at_95%_5%)]"
        } pointer-events-none`}
        style={open ? { pointerEvents: "auto" } : undefined}
      >
        <div className="w-[90%] mx-auto h-full flex flex-col justify-center gap-2">
          {links.map((link, i) => (
            <a
              key={link.n}
              href=""
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-3 border-t border-white/10 py-5 last:border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <span className="font-mono text-[.8rem] text-white/40">{link.n}</span>
              <span className="font-mono text-[2.2rem] font-extrabold text-white leading-none">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default HeaderSec;






























//  function FlowText({ text, step = 18, className = "" }) {
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

// function HeaderSec() {
//     return(
//         <header className="bg-[#1D1D1D] w-full fixed top-0 left-0 z-999">
//           <nav className="py-3 justify-between w-[90%] mx-auto my-0 flex items-center">
//             <a href="" className="">
//               <h1 className="font-syne text-[20px] lg:text-[1.5rem] font-extrabold text-[#FFFFFF]">Jonah</h1>
//             </a>

//             <ul className="hidden lg:flex text-white gap-10 font-mono">
//               <li className="">
//                 <a href="" className="flex gap-1">
//                   <span className="text-[.8rem]">01</span>
//                   WORK
//                 </a>
//               </li>
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
//               <li className="">
//                 <a href="" className="flex gap-1">
//                   <span className="text-[.8rem]">02</span>
//                   CONTACT
//                 </a>
//               </li>
//             </ul>

//             <a href="" className="group bg-[black] text-[#FFFFFF] py-3 px-4.5 lg:px-6 font-inter text-[15px] lg:text-[1.1rem] font-medium tracking-[-0.16px] flex items-center gap-2">
//               <FlowText text="Available for work" />
//               <HoverIcon
//                 src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
//                 alt="long-arrow-right"
//               />
//             </a>
//           </nav>


//         </header>
//   )
// }

// export default HeaderSec




// import { useState, useEffect, useRef } from "react"

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
//   )
// }

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
//   )
// }

// function HeaderSec() {
//   const [hidden, setHidden] = useState(false)
//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true) // scrolling down past 100px -> hide
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false) // scrolling up -> show
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   return (
//     <header
//       style={{
//         transform: hidden ? "translateY(-100%)" : "translateY(0)",
//         transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//       }}
//       className="bg-[#1D1D1D] w-full fixed top-0 left-0 z-999"
//     >
//       <nav className="py-3 justify-between w-[90%] mx-auto my-0 flex items-center">
//         <a href="" className="">
//           <h1 className="font-syne text-[20px] lg:text-[1.5rem] font-extrabold text-[#FFFFFF]">
//             Jonah
//           </h1>
//         </a>

//         <ul className="hidden lg:flex text-white gap-10 font-mono">
//           <li className="">
//             <a href="" className="flex gap-1">
//               <span className="text-[.8rem]">01</span>
//               WORK
//             </a>
//           </li>
//           <li className="">
//             <a href="" className="flex gap-1">
//               <span className="text-[.8rem]">03</span>
//               STACK
//             </a>
//           </li>
//           <li className="">
//             <a href="" className="flex gap-1">
//               <span className="text-[.8rem]">04</span>
//               PROCESS
//             </a>
//           </li>
//           <li className="">
//             <a href="" className="flex gap-1">
//               <span className="text-[.8rem]">02</span>
//               CONTACT
//             </a>
//           </li>
//         </ul>

//         <a
//           href=""
//           className="group bg-[black] text-[#FFFFFF] py-3 px-4.5 lg:px-6 font-inter text-[15px] lg:text-[1.1rem] font-medium tracking-[-0.16px] flex items-center gap-2"
//         >
//           <FlowText text="Available for work" />
//           <HoverIcon
//             src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
//             alt="long-arrow-right"
//           />
//         </a>
//       </nav>
//     </header>
//   )
// }

// export default HeaderSec