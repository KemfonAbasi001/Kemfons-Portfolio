// function Coverpage() {
//     return(
//         <section className="bg-[#1D1D1D] w-full h-screen flex justify-center items-center">
//           <h1 className="font-syne text-[3rem] font-extrabold text-[#FFFFFF]">Jonah<sup><span className="font-normal text-[20px]">©</span></sup></h1>
//         </section>
//     )
// }

// export default Coverpage



"use client"

import { useEffect, useRef } from "react"

function Coverpage() {
  const fillRectRef = useRef(null)

  useEffect(() => {
    const TEXT_TOP = 20
    const TEXT_BOTTOM = 98
    const DURATION_MS = 10000 // 4s to go from empty to full
    let start = null
    let rafId

    function animate(ts) {
      if (start === null) start = ts
      const elapsed = ts - start
      const rawProgress = Math.min(elapsed / DURATION_MS, 1)
      const progress = 1 - Math.pow(1 - rawProgress, 3) // ease-out cubic

      const fillY = TEXT_BOTTOM - progress * (TEXT_BOTTOM - TEXT_TOP)
      const fillHeight = TEXT_BOTTOM - fillY

      if (fillRectRef.current) {
        fillRectRef.current.setAttribute("y", fillY)
        fillRectRef.current.setAttribute("height", fillHeight)
      }

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="bg-[#1D1D1D] w-full h-screen flex justify-center items-center">
      <svg viewBox="0 0 600 140" className="w-[90vw] max-w-160 h-auto text-[70px] lg:text-[55px] flex justify-center items-center" aria-label="Jonah">
        <defs>
          <clipPath id="jonahTextClip">
            <text
              x="50%"
              y="90"
              textAnchor="middle"
              className="font-syne"
              // fontSize="55"
              fontWeight="800"
            >
              Jonah
              <tspan fontSize="20" fontWeight="400" dy="-30">
                ©
              </tspan>
            </text>
          </clipPath>
        </defs>

        <text
          x="50%"
          y="90"
          textAnchor="middle"
          className="font-syne"
          // fontSize="55"
          fontWeight="800"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.15"
          strokeWidth="1"
        >
          Jonah
          <tspan fontSize="20" fontWeight="400" dy="-30">
            ©
          </tspan>
        </text>

        <g clipPath="url(#jonahTextClip)">
          <rect ref={fillRectRef} x="0" y="98" width="600" height="0" fill="#FFFFFF" />
        </g>
      </svg>
    </section>
  )
}

export default Coverpage