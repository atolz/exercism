import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";

const TrackMenu = ({ show, tracks, setSelectedValue, selectedValue }) => {
  // const [selectedValue, setSelectedValue] = useState("All");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    console.log("In track menu", tracks);
  });
  return (
    <div className={` bg-white absolute top-full left-0 p-[.8rem] rounded-[.8rem] exe-shadow z-30 w-max transition-all opacity-0 ${show ? " visible opacity-100" : " invisible"}`}>
      <ul className="">
        <li className="flex items-center px-[2.4rem] py-[.8rem] hover:bg-[#F0F3F9] cursor-pointer transition-all">
          <Radio checked={selectedValue === "All"} onChange={handleChange} value="All" name="radio-buttons" inputProps={{ "aria-label": "All" }} />
          <img className="ml-[2.6rem]" src="/icons-svg/exe-badge.svg" />
          <span className=" ml-[1.8rem] font-medium text-[1.6rem] leading-[2.2rem] text-[#3D3B45] mr-auto">All</span>
          <span className="exe-count ml-[14.9rem]">5</span>
        </li>
        {tracks.map((track, i) => {
          return (
            <li className="flex items-center px-[2.4rem] py-[.8rem] hover:bg-[#F0F3F9] cursor-pointer transition-all" key={i}>
              <Radio checked={selectedValue === track.title} onChange={handleChange} value={track.title} name="radio-buttons" inputProps={{ "aria-label": track.title }} />
              <img className="ml-[2.6rem] w-[3.76rem]" src={track.icon_url} />
              <span className=" ml-[1.8rem] font-medium text-[1.6rem] leading-[2.2rem] text-[#3D3B45] mr-auto">{track.title}</span>
              <span className="exe-count ml-[14.9rem]">5</span>
            </li>
          );
        })}
        {/* <li className="flex items-center px-[2.4rem] py-[.8rem] hover:bg-[#F0F3F9] cursor-pointer transition-all">
          <Radio checked={selectedValue === "All"} onChange={handleChange} value="All" name="radio-buttons" inputProps={{ "aria-label": "All" }} />
          <img className="ml-[2.6rem]" src="/icons-svg/exe-badge.svg" />
          <span className=" ml-[1.8rem] font-medium text-[1.6rem] leading-[2.2rem] text-[#3D3B45]">All</span>
          <span className="exe-count ml-[14.9rem]">5</span>
        </li>
        <li className="flex items-center px-[2.4rem] py-[.8rem] hover:bg-[#F0F3F9] cursor-pointer">
          <Radio checked={selectedValue === "Elix"} onChange={handleChange} value="Elix" name="radio-buttons" inputProps={{ "aria-label": "Elix" }} />
          <img className="ml-[2.6rem]" src="/icons-svg/exe-badge.svg" />
          <span className=" ml-[1.8rem] font-medium text-[1.6rem] leading-[2.2rem] text-[#3D3B45]">All</span>
          <span className="exe-count ml-[14.9rem]">5</span>
        </li> */}
      </ul>
    </div>
  );
};

export default TrackMenu;