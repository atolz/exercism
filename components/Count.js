import React from "react";

const Count = ({ value, color, borderColor }) => {
  return (
    <span
      style={{
        color: `${color ? color : "var(--color-secondary)"}`,
        borderColor: `${borderColor ? borderColor : "#a9a6bd"}`,
      }}
      className={`text-sm  font-medium text-left h-8 rounded-[100px] inline-grid place-items-center py-1 px-3 border  leading-6`}
    >
      {value}
    </span>
  );
};

export default Count;
