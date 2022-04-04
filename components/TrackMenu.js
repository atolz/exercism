import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import Count from "./Count";
import MyRadio from "./Radio";

const TrackMenu = ({ show, tracks, setSelectedValue, selectedValue, track_counts, totalTracks }) => {
  // const [selectedValue, setSelectedValue] = useState("All");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // useEffect(() => {
  //   console.log("In track menu", tracks, show);
  // });
  return (
    <div
      className={` h-[26.25rem] w-full max-w-[23.5rem] scroll_hide overflow-y-scroll overflow-x-hidden bg-white absolute top-20 left-5 md:left-7 p-2 rounded-lg exe-shadow z-30 transition-all ${
        show ? " visible opacity-100" : "opacity-0 invisible"
      }`}
    >
      <ul className="max-w-[23.5rem] w-full">
        {/* All tracks */}
        <li
          onClick={() => {
            setSelectedValue("All");
          }}
          className="flex items-center justify-between px-6 py-2 hover:bg-[#F0F3F9] cursor-pointer transition-all"
        >
          <MyRadio ariaLabel={"All"} isChecked={selectedValue === "All"} onChange={handleChange} id={"All"} name="radio-buttons"></MyRadio>

          {/* <Radio checked={selectedValue === "All"} onChange={handleChange} value="All" name="radio-buttons" inputProps={{ "aria-label": "All" }} /> */}
          <img className="ml-[1.625rem] w-[2.35rem]" src="/icons-svg/exe-badge.svg" />
          <span className=" ml-[1.139rem] font-medium text-base leading-[2.2rem] text-[#3D3B45] mr-auto">All</span>
          <span className=" flex">
            <Count color={`${selectedValue === "All" ? "#130B43" : ""}`} borderColor={`${selectedValue === "All" ? "#6A6781" : ""}`} value={totalTracks}></Count>
          </span>
          {/* <span className={`exe-count ${selectedValue === "All" ? " !text-primary" : ""}`}>{totalTracks}</span> */}
        </li>

        {/* Rest tracks */}
        {tracks?.map((track, i) => {
          // console.log(track.slug);
          return (
            <li
              onClick={(e) => {
                console.log("List element clikced parent");
                setSelectedValue(track.slug);
              }}
              className="flex items-center justify-between px-6 py-2 hover:bg-[#F0F3F9] cursor-pointer transition-all"
              key={i}
            >
              <MyRadio ariaLabel={track.titles} isChecked={selectedValue === track.slug} onChange={handleChange} id={track.slug} name="radio-buttons"></MyRadio>
              {/* <Radio checked={selectedValue === track.slug} onChange={handleChange} value={track.slug} name="radio-buttons" inputProps={{ "aria-label": track.title }} /> */}
              <img className="ml-[1.625rem] ml-6 w-[2.35rem]" src={track.icon_url} />
              <span className=" ml-[1.139rem] font-medium text-base leading-[2.2rem] text-[#3D3B45] mr-auto">{track.title}</span>
              <span className="flex">
                <Count color={`${selectedValue === track.slug ? "#130B43" : ""}`} borderColor={`${selectedValue === track.slug ? "#6A6781" : ""}`} value={track_counts[track.slug]}></Count>
              </span>
              {/* <span className={`exe-count ${selectedValue === track.slug ? " !text-primary" : ""}`}>{track_counts[track.slug]}</span> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrackMenu;
