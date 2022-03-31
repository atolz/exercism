import React from "react";

const Container = (props) => {
  return <div className="max-w-[1490px] w-full mx-auto  px-6 md:px-12">{props.children}</div>;
};

export default Container;
