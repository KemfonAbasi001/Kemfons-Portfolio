// import { useEffect, useState } from "react"
// import Coverpage from "./pages/CoverPage"
// import { Beforefooter, Footerpage } from "./components/Footer"
// import Landingpage from "./pages/Landingpage"
// import Processpage from "./pages/Process"
// import Workpage from "./pages/SelectedWork"
// import TechStack from "./pages/Techstack"

// function App() {
//   const [showCover, setShowCover] = useState(true)

//   useEffect(() => {
//     document.body.style.overflow = showCover ? "hidden" : ""
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [showCover])

//   return (
//     <>
//       {showCover && <Coverpage onFinish={() => setShowCover(false)} />}

//       <div
//         className={`transition-opacity duration-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//           showCover ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <Landingpage/>
//         <Workpage/>
//         <TechStack/>
//         <Processpage/>
//         <Beforefooter/>
//         <Footerpage/>
//       </div>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from "react"
import Coverpage from "./pages/CoverPage"
import { Beforefooter, Footerpage } from "./components/Footer"
import Landingpage from "./pages/Landingpage"
import Processpage from "./pages/Process"
import Workpage from "./pages/SelectedWork"
import TechStack from "./pages/Techstack"

function App() {
  const [showCover, setShowCover] = useState(true)

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = "stable"
    document.body.style.overflow = showCover ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [showCover])

  return (
    <>
      {showCover && <Coverpage onFinish={() => setShowCover(false)} />}

      <div
        className={`transition-opacity duration-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showCover ? "opacity-0" : "opacity-100"
        }`}
      >
        <Landingpage/>
        <Workpage/>
        <TechStack/>
        <Processpage/>
        <Beforefooter/>
        <Footerpage/>
      </div>
    </>
  )
}

export default App