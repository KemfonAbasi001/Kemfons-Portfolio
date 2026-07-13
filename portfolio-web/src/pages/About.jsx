import { useEffect, useRef } from "react";
import me from "../assets/IMG-20251221-WA0035.webp";

function useSlideIn(ref, { direction = 'left', delay = 0, threshold = 0.15 } = {}) {
  useEffect(function () {
    const el = ref.current
    if (!el) return

    const offset = direction === 'left' ? 'translateX(-48px)' : 'translateX(48px)'

    el.style.opacity = '0'
    el.style.transform = offset
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          el.style.opacity = '1'
          el.style.transform = 'translateX(0)'
          observer.unobserve(el)
        })
      },
      { threshold }
    )

    observer.observe(el)
    return function () { observer.disconnect() }
  }, [])
}

function About() {
  const textRef = useRef(null)
  const imgRef  = useRef(null)

  useSlideIn(textRef, { direction: 'left',  delay: 0   })
  useSlideIn(imgRef,  { direction: 'right', delay: 120 })

  return (
    <>
      <section
        className="w-full pt-10 pb-20 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]"
        id="about"
      >
        <div className="w-[90%] max-w-330 flex flex-col gap-15 lg:flex-row lg:items-center">


          <div ref={textRef} className="flex flex-col gap-4 lg:w-[98%]">
            <h1 className="text-[37px] lg:text-[40px] leading-tight text-[#0f0f0f] dark:text-[#E5E5E5] font-semibold">
              About Me
            </h1>
            <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[16.5px] lg:text-[18px]">
                I'm KemfonAbasi Jonah — a web developer focused on building modern web applications that combine thoughtful design, seamless user experiences, and scalable backend systems. I enjoy creating digital products that are both visually refined and technically reliable.
            </p>
            <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[16.5px] lg:text-[18px]">
             My work spans hospitality platforms, e-commerce experiences, healthcare systems, and custom web applications. I focus on building responsive, production-ready solutions that prioritize performance, usability, and attention to detail.
            </p>
            <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[16.5px] lg:text-[18px]">
             Currently expanding my expertise across modern frontend and backend technologies while building ambitious portfolio-grade projects. I'm open to collaborations, freelance opportunities, and developer roles where quality, innovation, and craftsmanship are valued.
            </p>
          </div>

          <div ref={imgRef} className="img">
            <img 
              className="block" 
              src={me} 
              alt="KemfonAbasi Jonah"
              width="800"
              height="600"
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default About;