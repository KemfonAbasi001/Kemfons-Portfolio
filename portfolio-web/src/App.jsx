// import Coverpage from "./pages/CoverPage"
// // import HeaderSec from "./components/Header"
// // import AvailableForWorkButton from "./pages/SelectedWork"

import { Beforefooter, Footerpage } from "./components/Footer"
import Landingpage from "./pages/Landingpage"
import Processpage from "./pages/Process"
import Workpage from "./pages/SelectedWork"
import TechStack from "./pages/Techstack"

function App() {
  return (
    <>
    {/* <Coverpage/> */}
    <Landingpage/>
    <Workpage/>
    <TechStack/>
    <Processpage/>
    <Beforefooter/>
    <Footerpage/>
    {/* <HeaderSec/> */}
    {/* <AvailableForWorkButton/> */}
    
    </>
  )
}

export default App