import React from "react";

const Search = ({ reference, onChange }) => {
  return (
    <input
      style={{
        backgroundPosition: " 28.82px",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.5403 18.8028C18.6351 17.0625 20.5438 12.3324 18.8036 8.2376C17.0633 4.14284 12.3332 2.23412 8.2384 3.97435C4.14364 5.71458 2.23492 10.4448 3.97515 14.5395C5.71538 18.6343 10.4456 20.543 14.5403 18.8028Z' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.0853 17.0844L23.3333 23.3333' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
      }}
      ref={reference}
      onChange={onChange}
      placeholder="Filter by exercise title"
      className=" focus:bg-white focus:outline-[#2e57e8] focus:shadow-md p-[13px] pl-15 bg-no-repeat rounded-md bg-[#f0f3f9] bg-[length:25px] outline outline-1 outline-transparent transition-all duration-300 text-base font-normal text-left placeholder:text-[color:var(--color-secondary)] mr-auto  ml-6 w-[26rem]"
    ></input>
  );
};

export default Search;
