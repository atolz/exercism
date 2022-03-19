import React from "react";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div className="h-[6.4rem] border-b border-[#C8D5EF] flex items-center justify-between">
      <Container>
        <div className="flex items-center w-full justify-between">
          <Link href="/">
            <Image
              layout="fixed"
              height={24}
              width={133}
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"
              alt="exercism-logo"
            ></Image>

            {/* <img src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"></img> */}
          </Link>
          <div className=" block md:hidden">
            <BurgerMenu></BurgerMenu>
          </div>

          {/* Section 2 */}
          <div className=" items-center hidden xl:flex">
            <img src="/icons-svg/dashboard-stat.svg" className="ml-[4.3rem]"></img>
            <span className="text-primary font-semibold text-[1.6rem] ml-[1.5rem]">Dashboard</span>
            <img src="/icons-svg/nav-tracks.svg" className="ml-[3.4rem]"></img>
            <span className="nav-text ml-[1.85rem]">Tracks</span>
            <img src="/icons-svg/nav-mentoring.svg" className="ml-[3.4rem]"></img>
            <span className="nav-text ml-[1.85rem]">Mentoring</span>
            <img src="/icons-svg/nav-contribute.svg" className="ml-[3.4rem]"></img>
            <span className="nav-text ml-[1.85rem]">Contribute</span>
          </div>

          {/* Section 3 */}
          <div className="hidden md:flex items-center ml-auto">
            {/* <img src="/smiley-notification.svg" className="ml-auto"></img> */}
            <div className="ml-auto">
              <Image layout="fixed" height={32} width={32} src="/smiley-notification.svg" alt="smiley-icon"></Image>
            </div>
            <div className="!ml-[3.4rem]">
              <Image layout="fixed" height={32} width={32} src="/badge-notification.svg" alt="notification-icon"></Image>
            </div>

            {/* <img src="/badge-notification.svg" className="ml-[3.4rem]"></img> */}
            <div className=" w-[4.2rem] h-[3.6rem] rounded-[.8rem] bg-[#FFF4E3] relative grid place-items-center ml-[4.4rem] shadow-yellow">
              <span className="absolute -top-[8px] -right-[10px] w-[2.2rem] h-[2.2rem] rounded-full bg-[#D85050] text-[1.2rem] font-semibold text-white grid place-items-center">2</span>
              <img className="h-[1.9rem]" src="/icons-svg/alarm-bell.svg"></img>
            </div>
            <button className="exe-btn-reputation ml-[3.3rem] relative">
              <span className="absolute -top-[8px] -right-[8px] w-[1.5rem] h-[1.5rem] rounded-full bg-[#D85050] text-[1.3rem] font-semibold text-white grid place-items-center outline-3 outline-white outline"></span>
              <img src="https://d24y9kuxp2d7l2.cloudfront.net/icons/reputation-5b5938e36519908ac61075db3b9826307a0f907a.svg" alt="Reputation" className="c-icon" />
              {/* <Image
                className="c-icon !mr-[8px]"
                layout="fixed"
                height={24}
                width={24}
                src="https://d24y9kuxp2d7l2.cloudfront.net/icons/reputation-5b5938e36519908ac61075db3b9826307a0f907a.svg"
                alt="Reputation"
              ></Image> */}
              <span>300K</span>
            </button>
            {/* <img src="/erik.jpg" className="ml-[3.4rem] rounded-full"></img> */}
            <div className="ml-[3.4rem]">
              <Image className="rounded-full" layout="fixed" height={42} width={42} src="/erik.jpg" alt="notification-icon"></Image>
            </div>
            {/* <div className="ml-[3.4rem]">
              <Image layout="fixed" height={18} width={6} src="/icons-svg/nav-menu-vertical.svg" alt="notification-icon"></Image>
            </div> */}

            <img src="/icons-svg/nav-menu-vertical.svg" className="ml-[3.4rem]"></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
