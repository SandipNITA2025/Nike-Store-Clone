import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showCatMenu, setShowCatManu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScroll, setLastScroll] = useState(0);


  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScroll) {
            setShow("-translate-y-[80px]");
        } else {
            setShow("shadow-sm");
        }
    } else {
        setShow("translate-y-0");
    }
    setLastScroll(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
});

  return (
    <header
      className={` w-full h-[50px] md:h-[80px] bg-white flex items-center justify-center z-10 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={`h-[60px] flex items-center justify-between`}>
        <Link href="/">
          <img src="/logo.svg" alt="" className=" w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatManu={setShowCatManu} />

        {!mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatManu={setShowCatManu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className=" flex item-center justify-center gap-2 text-black">
          {/* Icon start */}
          <div className=" relative w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
            <IoMdHeartEmpty className=" text-[19px] md:text-[24px]" />
            <div className=" absolute h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 text-white text-[10px] md:text-[12px] flex items-center justify-center px-[2px] md:px-[5px] top-1 left-5 md:left-7">
              20
            </div>
          </div>
          {/* Icon end */}
          {/* Icon start */}
          <Link href='/cart' className=" relative w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
            <BsCart className=" text-[15px] md:text-[20px]" />
            <div className=" absolute h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 text-white text-[10px] md:text-[12px] flex items-center justify-center px-[2px] md:px-[5px] top-1 left-5 md:left-7">
              5
            </div>
          </Link>
          {/* Icon end */}

          {/* Mobile icon start */}
          <div className=" relative w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer -mr-2">
            {mobileMenu ? (
              <BiMenuAltRight
                className=" text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className=" text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
