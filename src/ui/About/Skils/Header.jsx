

function Header() {
  return (
    <div className=" flex gap-5  items-baseline relative xl:py-10">
    <h1 className="content-heding relative font-primary  text-xl py-5 font-bold  overflow-hidden md:text-2xl sm:text-3xl xl:text-4xl">
      I can help you with
    </h1>
    <div className="anime-box flex gap-4 ">
      <div className="h-2 w-2 bg-black rounded "></div>
      <div className="h-2 w-2 bg-black rounded "></div>
      <div className="h-2 w-2 bg-black rounded "></div>
    </div>
    </div>
  )
}

export default Header;