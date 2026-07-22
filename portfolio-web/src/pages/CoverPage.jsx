// "use client"

// import { useEffect, useRef, useState } from "react"

// function Coverpage({ onFinish }) {
//   const fillRectRef = useRef(null)
//   const [fadeOut, setFadeOut] = useState(false)

//   useEffect(() => {
//     const TEXT_TOP = 20
//     const TEXT_BOTTOM = 98
//     const DURATION_MS = 2000
//     const FADE_MS = 700
//     let start = null
//     let rafId

//     function animate(ts) {
//       if (start === null) start = ts
//       const elapsed = ts - start
//       const rawProgress = Math.min(elapsed / DURATION_MS, 1)
//       const progress = 1 - Math.pow(1 - rawProgress, 3)

//       const fillY = TEXT_BOTTOM - progress * (TEXT_BOTTOM - TEXT_TOP)
//       const fillHeight = TEXT_BOTTOM - fillY

//       if (fillRectRef.current) {
//         fillRectRef.current.setAttribute("y", fillY)
//         fillRectRef.current.setAttribute("height", fillHeight)
//       }

//       if (rawProgress < 1) {
//         rafId = requestAnimationFrame(animate)
//       } else {
//         setFadeOut(true)
//         setTimeout(() => {
//           if (onFinish) onFinish()
//         }, FADE_MS)
//       }
//     }

//     rafId = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(rafId)
//   }, [onFinish])

//   return (
//     <section
//       className={`fixed inset-0 z-50 bg-[#1D1D1D] w-full h-screen flex justify-center items-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//         fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       <svg viewBox="0 0 600 140" className="w-[90vw] max-w-160 h-auto flex justify-center items-center" aria-label="Jonah">
//         <defs>
//           <clipPath id="jonahTextClip">
//             <text
//               x="50%"
//               y="90"
//               textAnchor="middle"
//               className="font-syne"
//               fontSize="55"
//               fontWeight="800"
//             >
//               Jonah
//               <tspan fontSize="20" fontWeight="400" dy="-30">
//                 ©
//               </tspan>
//             </text>
//           </clipPath>
//         </defs>

//         <text
//           x="50%"
//           y="90"
//           textAnchor="middle"
//           className="font-syne"
//           fontSize="55"
//           fontWeight="800"
//           fill="none"
//           stroke="#FFFFFF"
//           strokeOpacity="0.15"
//           strokeWidth="1"
//         >
//           Jonah
//           <tspan fontSize="20" fontWeight="400" dy="-30">
//             ©
//           </tspan>
//         </text>

//         <g clipPath="url(#jonahTextClip)">
//           <rect ref={fillRectRef} x="0" y="98" width="600" height="0" fill="#FFFFFF" />
//         </g>
//       </svg>
//     </section>
//   )
// }

// export default Coverpage

















"use client"

import { useEffect, useRef, useState } from "react"

function Coverpage({ onFinish }) {
  const fillRectRef = useRef(null)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const TEXT_TOP = 20
    const TEXT_BOTTOM = 98
    const DURATION_MS = 2000
    const FADE_MS = 700
    let start = null
    let rafId

    function animate(ts) {
      if (start === null) start = ts
      const elapsed = ts - start
      const rawProgress = Math.min(elapsed / DURATION_MS, 1)
      const progress = 1 - Math.pow(1 - rawProgress, 3)

      const fillY = TEXT_BOTTOM - progress * (TEXT_BOTTOM - TEXT_TOP)
      const fillHeight = TEXT_BOTTOM - fillY

      if (fillRectRef.current) {
        fillRectRef.current.setAttribute("y", fillY)
        fillRectRef.current.setAttribute("height", fillHeight)
      }

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setFadeOut(true)
        setTimeout(() => {
          if (onFinish) onFinish()
        }, FADE_MS)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [onFinish])

  return (
    <section
      className={`fixed inset-0 z-50 bg-[#1D1D1D] w-full h-screen flex justify-center items-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Grain / noise texture overlay (animated) */}
      <style>{`
        @keyframes grainShift {
          0%   { transform: translate(0, 0); }
          12%  { transform: translate(-3%, -10%); }
          24%  { transform: translate(-14%, 5%); }
          36%  { transform: translate(7%, -16%); }
          48%  { transform: translate(-9%, 12%); }
          60%  { transform: translate(12%, 3%); }
          72%  { transform: translate(-5%, -7%); }
          84%  { transform: translate(3%, 14%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
      <div
        className="pointer-events-none w-full absolute inset-0 overflow-hidden opacity-[0.8] mix-blend-overlay"
      >
        <div
          className="absolute -inset-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0.3 0.7 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
            animation: "grainShift 1s steps(2) infinite",
          }}
        />
      </div>

      <svg viewBox="0 0 600 140" className="relative w-[90vw] max-w-160 h-auto flex justify-center items-center" aria-label="Jonah">
        <defs>
          <clipPath id="jonahTextClip">
            <text
              x="50%"
              y="90"
              textAnchor="middle"
              className="font-syne"
              fontSize="55"
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
          fontSize="55"
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











