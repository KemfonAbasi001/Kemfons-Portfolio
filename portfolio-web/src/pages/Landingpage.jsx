// import HeaderSec from "../components/Header"

// function Landingpage() {
//     return(
//         <>
//             <HeaderSec/>
//             <section className="relative flex justify-center">
//                 <div className="w-[90%] text-white py-40">
//                     <p className="uppercase font-mono">[STATUS: Full Stack Developer]</p>
//                     <h1 className="text-[80px] font-syne font-extrabold">
//                         <span className="">Build with</span>
//                         <br/>
//                         <span className="ml-30 text-[#FFFFFFB3]">KemfonAbasi</span>
//                     </h1>
//                     <div className="flex justify-between mt-4">
//                         <p className="text-[20px] text-[#FFFFFFB3] leading-7.5 font-medium tracking-[-0.16px] w-130 font-inter">Building precise, performant digital systems where engineering rigor meets design sensibility. Every interface tells a story of intentional craft.</p>
//                         <a href="" className="font-mono py-2.75 border border-solid border-[rgba(255, 255, 255, 0.2)] text-[rgb(207, 213, 220)] h-fit px-9 self-end">[OPEN_RESUME]</a>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Landingpage


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
    return(
        <>
            <HeaderSec/>
            <section className="flex justify-center relative">
              {/* <img src={picture} alt="" className="relative lg:absolute w-60 lg:top-24 z-200 right-0" /> */}
                <div className="w-[90%] max-w-300 text-white flex-col-reverse flex pt-40 pb-10 lg:py-40 z-300 gap-20">
                    <img src={picture} alt="" className="relative self-end lg:absolute w-90 lg:w-60 lg:top-24 z-200 right-0" />
                    <div className="">

                    <p className="uppercase font-mono mb-1.5 text-[14px]">[STATUS: Full Stack Developer]</p>
                    <h1 id="header-text" className="text-[30px] md:text-[50px] lg:text-[65px] xl:text-[80px] font-syne font-extrabold">
                        <span className="">Build with</span>
                        <br/>
                        <span className="lg:ml-30 text-[#FFFFFFB3]">KemfonAbasi</span>
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-10 lg:justify-between mt-4">
                        <p className="text-[21px] text-[#FFFFFFB3] leading-[33px] lg:leading-7.5 font-medium tracking-[-0.16px] lg:w-130 font-inter">Building precise, performant digital systems where engineering rigor meets design sensibility. Every interface tells a story of intentional craft.</p>
                        <a href={resume} className="group font-mono py-2.75 border border-solid border-[rgba(255, 255, 255, 0.2)] text-[rgb(207, 213, 220)] h-fit px-9 self-end">
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
