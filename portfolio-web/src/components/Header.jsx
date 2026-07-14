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





/**
 * FlowText
 * Splits `text` into individual characters, each masked in its own
 * overflow-hidden box holding two stacked copies of that character.
 * The parent link needs the "group" class. On group-hover each
 * character's track shifts up by 50% (= one character's height,
 * since the track holds two stacked copies), revealing the duplicate
 * and hiding the original.
 *
 * The transition-delay is staggered per character (index * step),
 * so the swap ripples left-to-right across the word instead of
 * moving as one flat block -- mid-transition, later characters lag
 * behind earlier ones, which is the "sliced" flowing look.
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

function HeaderSec() {
    return(
        <header className="bg-[#1D1D1D] w-full fixed top-0 left-0 z-999">
          <nav className="py-3 justify-between w-[90%] mx-auto my-0 flex items-center">
            <a href="" className="">
              <h1 className="font-syne text-[1.5rem] font-extrabold text-[#FFFFFF]">Jonah</h1>
            </a>

            <ul className="flex text-white gap-10 font-mono">
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

            <a href="" className="group bg-[black] text-[#FFFFFF] py-3 px-6 font-inter text-[1.1rem] font-medium tracking-[-0.16px] flex items-center gap-2">
              <FlowText text="Available for work" />
              <HoverIcon
                src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png"
                alt="long-arrow-right"
              />
            </a>
          </nav>


        </header>
  )
}

export default HeaderSec