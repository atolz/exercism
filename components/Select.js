import React from "react";

const Select = ({ onChange }) => {
  return (
    <select
      style={{
        backgroundImage: `url(
          "data:image/svg+xml,%3Csvg width='24' height='13' viewBox='0 0 24 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.25 1.311L12.53 12.03C12.3895 12.1707 12.1988 12.2498 12 12.2498C11.8012 12.2498 11.6105 12.1707 11.47 12.03L0.75 1.311' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
        )`,
        backgroundPosition: "90%",
      }}
      onChange={onChange}
      className="rounded-md text-base bg-no-repeat bg-[length:24px] outline outline-1 outline-transparent focus:outline-secondary font-normal transition-all duration-300 cursor-pointer text-left appearance-none py-3 px-5 h-12 w-[21.75rem] ml-auto bg-[#f0f3f9] text-[color:var(--color-secondary)]"
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
  );
};

export default Select;
