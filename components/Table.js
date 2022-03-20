import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import TrackMenu from "./TrackMenu";
import Pagination from "@mui/material/Pagination";
import { baseUrl } from "../axios/request";
import TimeAgo from "javascript-time-ago";
// English.
import en from "javascript-time-ago/locale/en.json";

const Table = ({ initTest, initTracks, initTotalPage, initTrackCounts, initNoTest }) => {
  const [showTracks, setShowTracks] = useState(false);
  const [testimonials, setTestimonials] = useState(initTest);
  const [filteredTracks, setfilteredTracks] = useState(initTracks);
  const [activeTrack, setActiveTrack] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(initTotalPage);
  const [sort, setSort] = useState("newest_first");
  const [isFetching, setIsFetching] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [trackCounts, setTrackCounts] = useState(initTrackCounts);
  const [isMounted, setIsMounted] = useState(false);
  const searchRef = useRef();

  // Time Ago
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  // To reduce the amount of API calls
  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };

  const onSearch = async () => {
    setIsFetching(true);
    const response = await baseUrl.get(`hiring/testimonials?exercise=${searchRef.current.value}${selectedTrack == "All" ? "" : `&track=${selectedTrack.toLowerCase()}`}&order=${sort}`);
    console.log("search exercise response", response.data.testimonials);
    const testimonials = response.data.testimonials.results;
    setPage(1);
    setTotalPage(response.data.testimonials.pagination.total_pages);

    setTestimonials(testimonials);
    setIsFetching(false);
  };
  const handleTyping = debounce(onSearch, 900);

  // Function to fetch and set filtered tracks and General setUp
  // async function fetchData() {
  //   setIsFetching(true);
  //   const allTracks = (await baseUrl.get("/tracks")).data.tracks;
  //   // console.log("sort iinrt data sort is...", sort);
  //   const response = await baseUrl.get(`hiring/testimonials?order=${sort}`);
  //   const testimonials = response.data.testimonials.results;
  //   setTestimonials(testimonials);
  //   setIsFetching(false);
  //   const userTracks = response.data.testimonials.tracks;
  //   const trackCounts = response.data.testimonials.track_counts;
  //   console.log("this is track counts", trackCounts);
  //   setTrackCounts(trackCounts);
  //   setNoTest(response.data.testimonials.pagination.total_count);
  //   // console.log("testimonials", testimonials);
  //   // console.log("tracks", userTracks);
  //   // console.log("all tracks", allTracks);
  //   // console.log("track counts", trackCounts);
  //   // console.log("total pages", response.data.testimonials.pagination.total_pages);
  //   setTotalPage(response.data.testimonials.pagination.total_pages);

  //   // Filter the tracks based on the user tracks
  //   const filtered = allTracks.filter((track, i) => {
  //     return userTracks.includes(track.slug);
  //   });
  //   setfilteredTracks(filtered);
  //   // console.log(filtered);
  // }

  // Fetch Testimonial
  async function fetchTestimonials() {
    setIsFetching(true);
    // const testimonials = (await baseUrl.get(`hiring/testimonials?page=${page}`)).data.testimonials.results;
    let url;
    if (selectedTrack == "All" || selectedTrack == "F#") {
      url = `hiring/testimonials?page=${page}&exercise=${searchRef.current.value}&order=${sort}`;
      // console.log("now fetching from fetch testimonial", url);
    } else {
      // console.log("in fetch testimonial: sort is...", sort);
      url = `hiring/testimonials?page=${page}&track=${selectedTrack.toLowerCase()}&exercise=${searchRef.current.value}&order=${sort}`;
    }
    const response = await baseUrl.get(url);
    const testimonials = response.data.testimonials.results;
    // console.log("Response...", response);
    // console.log("page change useEffect", testimonials);
    setTestimonials(testimonials);
    setTotalPage(response.data.testimonials.pagination.total_pages);
    // setPage(1);
    setIsFetching(false);
  }

  // Page Change
  function handleChangePage(e, page) {
    // console.log("page change", page);
    setPage(page);
  }

  // Next Prev Buttons
  function onNext() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }
  function onPrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    // Make API to get All testimonial which included the tracks
    // fetchData();
    // setNoTest(initNoTest);
    // Filter the tracks based on testimonials track
    // Set the filtered tracks
    setIsMounted(true);
  }, []);

  // Use Effect for page changes..
  useEffect(() => {
    // Fetch new testimonial anytime the page number changes
    console.log("page testimonials useEffect ", initTest);
    if (isMounted) {
      fetchTestimonials();
    }
  }, [page]);

  // UseEffect for Track selection change
  useEffect(() => {
    async function fetch() {
      setIsFetching(true);
      setPage(1);
      let url;
      if (selectedTrack == "All") {
        url = `hiring/testimonials?page=${1}&exercise=${searchRef.current.value}&order=${sort}`;
      } else {
        // console.log("sort in schand selected track", sort);
        url = `hiring/testimonials?page=${1}&track=${selectedTrack.toLowerCase()}&exercise=${searchRef.current.value}&order=${sort}`;
      }
      const response = await baseUrl.get(url);
      const testimonials = response.data.testimonials.results;
      setTestimonials(testimonials);
      setTotalPage(response.data.testimonials.pagination.total_pages);
      setIsFetching(false);
    }
    console.log("selected tracks testimonials useeffect ", initTracks);
    if (isMounted) {
      fetch();
    }
  }, [selectedTrack]);

  // UseEffect for Sorting
  useEffect(() => {
    // console.log("sort in schand sort change", sort);
    console.log("sort tracks testimonials useeffect");
    if (isMounted) {
      fetchTestimonials();
    }
  }, [sort]);

  return (
    <section className="relative">
      <div className="w-[100%] scroll_hide overflow-scroll mx-auto exe-shadow mb-[2.4rem] rounded">
        <table className=" w-full border-collapse scroll_hide rounded-[.8rem]">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium rounded">
            <tr>
              <th className="border-b border-[#D5D8E4] font-medium py-[1.6rem] px-[2.4rem]" colSpan="4">
                <div className="flex justify-between items-center">
                  <div
                    onClick={() => {
                      setShowTracks(!showTracks);
                    }}
                    className="flex items-center  cursor-pointer"
                  >
                    {/* <img className="h-[4.2rem] mr-[1.463rem]" src="/icons-svg/exe-badge.svg"></img> */}
                    <div className=" mr-[1.463rem]">
                      <Image layout="fixed" height={42} width={42} src="/icons-svg/exe-badge.svg" alt="exercism-badge"></Image>
                    </div>
                    <svg className={` transition-all duration-300 ${showTracks ? " rotate-180" : ""}`} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5938 0.960125L7.78708 6.76625C7.71098 6.84246 7.6077 6.88528 7.5 6.88528C7.3923 6.88528 7.28902 6.84246 7.21292 6.76625L1.40625 0.960125"
                        stroke="#5C5589"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <TrackMenu
                      totalTracks={initNoTest}
                      track_counts={trackCounts}
                      selectedValue={selectedTrack}
                      setSelectedValue={setSelectedTrack}
                      tracks={filteredTracks}
                      show={showTracks}
                    ></TrackMenu>
                  </div>
                  <input ref={searchRef} onChange={handleTyping} placeholder="Filter by exercise title" className="exe-search mr-auto ml-[2.4rem] w-[41.6rem]"></input>
                  <select
                    onChange={(e) => {
                      setSort(e.target.value);
                    }}
                    className="exe-select w-[34.8rem] ml-auto"
                    name="cars"
                    id="cars"
                  >
                    <option className="cu cursor-pointer" value="newest_first">
                      Sort by Most Recent
                    </option>
                    <option className="cu cursor-pointer" value="oldest_first">
                      Sort by Oldest
                    </option>
                  </select>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="caption_light text-black-default whitespace-nowrap relative">
            {isFetching && (
              <tr className="">
                <td className="" colSpan="4">
                  <div className="absolute z-50 top-0 left-0 w-full h-full flex items-center justify-center !bg-[rgba(255,255,255,0.9)]">
                    {/* <img className="w-[6.4rem] animate-spin" src="/loading-circle.svg" /> */}
                    <Image className="animate-spin" layout="fixed" height={64} width={64} src="/loading-circle.svg" alt="spinner"></Image>
                  </div>
                </td>
              </tr>
            )}
            {testimonials?.map((el, i) => {
              return (
                <tr className="border-b border-[#EAECF3] hover:bg-slate-200 pt-[.95rem] pb-[1.25rem] cursor-pointer" key={i}>
                  <td className="px-[2.5rem]  w-[80px]">
                    <div className="flex items-center relative z-10">
                      <Image layout="fixed" height={32} width={32} src={el.track.icon_url} alt="track-icon"></Image>

                      {/* <img className="h-[3.2rem]" src={el.track.icon_url} /> */}
                    </div>
                  </td>
                  <td className="pt-[1.25rem] pb-[1.25rem] grid grid-flow-col w-max auto-cols-max gap-x-7">
                    <div className="rounded-full row-span-2 justify-start justify-self-start">
                      <Image className=" rounded-full" layout="fixed" height={42} width={42} src={el.mentor.avatar_url} alt={el.mentor.handle}></Image>
                    </div>
                    {/* <img src={el.mentor.avatar_url} className="rounded-full row-span-2 justify-start justify-self-start w-[4.2rem] "></img> */}
                    <h4 className="tb-name">{el.mentor.handle}</h4>
                    <span className="tb-sub">
                      {/* on Series in Bash */}
                      {el.exercise.slug}
                    </span>
                  </td>
                  <td className="p-[16px] w-[51.3rem] ">
                    <p className="tb-desc max-w-[51.3rem] text-left block justify-left whitespace-nowrap overflow-hidden text-ellipsis">
                      {/* Very kind mentor who has patience to explain everything I am not s... */}
                      {el.content}
                    </p>
                  </td>
                  <td className="p-[16px] pr-[2.9rem]">
                    <div className="flex items-center text-right justify-end">
                      <span className="mr-[5.98rem] tb-time">{timeAgo.format(new Date(el.created_at))}</span>
                      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.66669 1.5L8.81335 8.64667C8.90715 8.74033 8.95986 8.86745 8.95986 9C8.95986 9.13255 8.90715 9.25967 8.81335 9.35333L1.66669 16.5"
                          stroke="#5C5589"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-[1.7rem] px-[3.2rem]" colSpan="4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      onPrev();
                    }}
                    className={`tb-btn  ${page == 1 ? "tb-btn--inactive" : ""}`}
                  >
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.625 6H1.375" stroke="#76709F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.625 0.75L1.375 6L6.625 11.25" stroke="#76709F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Previous
                  </button>
                  <Pagination count={totalPage} page={page} onChange={handleChangePage} variant="outlined" shape="rounded" hidePrevButton hideNextButton />
                  <button
                    onClick={() => {
                      onNext();
                    }}
                    className={`tb-btn  ${page == totalPage ? "tb-btn--inactive" : ""}`}
                  >
                    Next{" "}
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.375 6H12.625" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.375 11.25L12.625 6L7.375 0.75" stroke="#5C5589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

// export async function getStaticProps() {
//   console.log("in get static props");
//   const allTracks = (await baseUrl.get("/tracks")).data.tracks;
//   const response = await baseUrl.get(`hiring/testimonials?order=${sort}`);
//   const testimonials = response.data.testimonials.results;
//   const userTracks = response.data.testimonials.tracks;
//   const trackCounts = response.data.testimonials.track_counts;
//   const noTest = response.data.testimonials.pagination.total_count;
//   const totalPage = response.data.testimonials.pagination.total_pages;

//   // Filter the tracks based on the user tracks
//   const filtered = allTracks.filter((track, i) => {
//     return userTracks.includes(track.slug);
//   });
//   const filteredTracks = filtered;

//   return {
//     props: {
//       initTest: testimonials,
//       initTracks: filteredTracks,
//       initTotalPage: totalPage,
//       initTrackCounts: trackCounts,
//       initNoTest: noTest,
//     },
//   };
// }
export default Table;
