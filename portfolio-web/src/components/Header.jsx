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

            <a href="" className="bg-[black] text-[#FFFFFF] py-3 px-4.5 font-inter text-[1.1rem] font-medium tracking-[-0.16px] flex gap-2">Available for work <img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/> </a>
          </nav>


        </header>
  )
}

export default HeaderSec