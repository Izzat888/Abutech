import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import logo from "../assets/abutech-logo.svg";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition 
        ${shadow ? "shadow-lg" : ""}`}
      >
        <div className="max-w-7xl flex h-20 items-center mx-auto px-6 justify-between">

          {/* Logo */}
          <img className="cursor-pointer" src={logo} alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3 text-[rgb(0,9,74)]">
            <FaPhone />

            <a className="font-bold text-xl" href="#">
              +99890 123 45 67
            </a>

            <div className="w-px h-6 bg-gray-400"></div>

            <a
              className="w-[160px] text-xs text-center font-black bg-[rgb(0,9,74)] h-10 text-white flex items-center justify-center rounded-xl hover:bg-[#011481] transition"
              href="#footer"
            >
              KONTAKT
            </a>
          </div>

          {/* Hamburger */}
          <div
            className="lg:hidden w-8 h-6 flex flex-col justify-between cursor-pointer"
            onClick={() => setModal(prev => !prev)}
          >
            <span
              className={`h-1 w-full bg-[rgb(0,9,74)] transition duration-300 
              ${modal ? "rotate-45 translate-y-3" : ""}`}
            ></span>

            <span
              className={`h-1 w-full bg-[rgb(0,9,74)] transition duration-300 
              ${modal ? "opacity-0" : ""}`}
            ></span>

            <span
              className={`h-1 w-full bg-[rgb(0,9,74)] transition duration-300 
              ${modal ? "-rotate-45 -translate-y-3" : ""}`}
            ></span>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {modal && (
        <div
          className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-lg 
  transform transition-transform duration-300 ease-in-out
  ${modal ? "translate-x-10" : "-translate-x-full"} lg:hidden`}
        >
          <div className="flex flex-col gap-6 p-6 mt-20">

            <div className="flex items-center gap-2 text-[rgb(0,9,74)]">
              <FaPhone />
              <a className="font-bold text-lg" href="#">
                +99890 123 45 67
              </a>
            </div>

            <a
              className="w-[140px] text-center bg-[rgb(0,9,74)] h-12 text-white flex items-center justify-center rounded-xl hover:bg-[#011481]"
              href="#footer"
              onClick={() => setModal(false)}
            >
              Kontakt
            </a>

          </div>
        </div>
      )}
    </>
  )
}

export default Navbar