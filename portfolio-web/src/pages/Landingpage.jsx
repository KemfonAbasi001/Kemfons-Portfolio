import HeaderSec from "../components/Header"

function Landingpage() {
    return(
        <>
            <HeaderSec/>
            <section className="relative flex justify-center">
                <div className="w-[90%] text-white py-40">
                    <p className="uppercase font-mono">[STATUS: Full Stack Developer]</p>
                    <h1 className="text-[100px] font-syne font-extrabold">
                        <span className="">Build with</span>
                        <br/>
                        <span className="ml-30 text-[#FFFFFFB3]">KemfonAbasi</span>
                    </h1>
                    <div className="flex justify-between mt-4">
                        <p className="text-[20px] text-[#FFFFFFB3] leading-7.5 font-medium tracking-[-0.16px] w-130 font-inter">Building precise, performant digital systems where engineering rigor meets design sensibility. Every interface tells a story of intentional craft.</p>
                        <a href="" className="font-mono py-2.75 border border-solid border-[rgba(255, 255, 255, 0.2)] text-[rgb(207, 213, 220)] h-fit px-9 self-end">[OPEN_RESUME]</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landingpage