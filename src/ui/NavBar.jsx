import { Link, NavLink } from "react-router-dom";
import { TabLinks } from "../utils";
import { icons } from "../utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { topVarient, midVarient, botomVarient } from "../utils";
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-full w-full px-4 flex items-center justify-between md:px-12 xl:px-16">
      <h1 className="logo text-4xl font-bold font-sign">Biswajit</h1>
      {open && (
        <nav className=" absolute top-0 left-0 z-[50] w-screen h-screen bg-black text-white flex justify-center items-center lg:relative">
          <ul className="flex flex-col justify-center items-center gap-8 text-4xl font-secondary tracking-widest capitalize">
            {TabLinks.map((link, i) => (
              <NavLink to={`/${link}`} key={i}>
                {link}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
      <div className="hidden  md:block ">
        <ul className="flex justify-between items-center gap-12 text-xl cursor-pointer ">
        {icons.map((link, i) => (
          <Link key={i} herf={link.to}><link.Element/></Link>
        ))}
        </ul>
      </div>
      <div className="button z-50  md:hidden">
        <button
          onClick={() => setOpen((open) => !open)}
          className="h-5 flex flex-col justify-between cursor-pointer"
        >
          <motion.div variants={topVarient} animate={open? "opened": "closed"}  className="bg-black w-7 h-[0.15rem] origin-left"></motion.div>

          <motion.div variants={midVarient} animate={open? "opened": "closed"} className="bg-black w-7 h-[0.15rem]"></motion.div>

          <motion.div variants={botomVarient} animate={open? "opened": "closed"}  className="bg-black w-7 h-[0.15rem] origin-left"></motion.div>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
