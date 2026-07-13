function Workpage() {
    return (
        <section className="flex justify-center">
            <div className="w-[90%] text-white py-40">
                <div className="flex flex-col gap-2.5">
                    <h1 className="uppercase text-[80px] font-extrabold font-syne">Featured Work</h1>
                    <a href="#"
                        className="text-[1.4rem] self-end font-medium flex items-center gap-2 w-fit bg-[linear-gradient(white,white)] bg-no-repeat bg-size-[0%_2px] bg-position-[0_100%] transition-[background-size] duration-300 hover:bg-size-[100%_2px]"
                    >
                        See our work
                        <img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
                    </a>
{/* <a href="#" className="text-[1.3rem] border-b-2 border-white text-right font-medium flex items-center gap-2 w-fit"> See our work<img width="25" height="25" src="https://img.icons8.com/puffy/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/> </a>                */}
                </div>
            </div>
        </section>
    );
}

export default Workpage;