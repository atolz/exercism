import React from "react";
import Link from "next/link";
import Container from "./Container";

const Header = () => {
  return (
    <div className="h-[6.4rem] px-[3.02rem] border-b border-[#C8D5EF] ">
      <Container>
        <div className="flex items-center w-full">
          <Link href="/">
            <img src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"></img>
          </Link>
          <img src="/icons-svg/dashboard-stat.svg" className="ml-[4.3rem]"></img>
          <span className="text-primary font-semibold text-[1.6rem] ml-[1.5rem]">Dashboard</span>
          <img src="/icons-svg/nav-tracks.svg" className="ml-[3.4rem]"></img>
          <span className="nav-text ml-[1.85rem]">Tracks</span>
          <img src="/icons-svg/nav-mentoring.svg" className="ml-[3.4rem]"></img>
          <span className="nav-text ml-[1.85rem]">Tracks</span>
          <img src="/icons-svg/nav-contribute.svg" className="ml-[3.4rem]"></img>
          <span className="nav-text ml-[1.85rem]">Tracks</span>
          <img src="/smiley-notification.svg" className="ml-auto"></img>
          <img src="/badge-notification.svg" className="ml-[3.4rem]"></img>
          <div className=" w-[4.2rem] h-[3.6rem] rounded-[.8rem] bg-[#FFF4E3] relative grid place-items-center ml-[4.4rem] shadow-yellow">
            <span className="absolute -top-[10px] -right-[10px] w-[2.4rem] h-[2.4rem] rounded-full bg-[#D85050] text-[1.3rem] font-semibold text-white grid place-items-center">2</span>
            <img className="h-[1.9rem]" src="/icons-svg/alarm-bell.svg"></img>
          </div>
          <button className="exe-btn-reputation ml-[3.3rem] relative">
            <span className="absolute -top-[10px] -right-[10px] w-[1.7rem] h-[1.7rem] rounded-full bg-[#D85050] text-[1.3rem] font-semibold text-white grid place-items-center outline-3 outline-white outline"></span>
            <img src="https://d24y9kuxp2d7l2.cloudfront.net/icons/reputation-5b5938e36519908ac61075db3b9826307a0f907a.svg" alt="Reputation" className="c-icon" />
            <span>300K</span>
          </button>
          <img src="/erik.jpg" className="ml-[3.4rem] rounded-full"></img>
          <img src="/icons-svg/nav-menu-vertical.svg" className="ml-[3.4rem]"></img>
        </div>
      </Container>
    </div>
  );
};

export default Header;
