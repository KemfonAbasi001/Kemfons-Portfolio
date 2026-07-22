// import Coverpage from "./pages/CoverPage"

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
    </>
  )
}

export default App