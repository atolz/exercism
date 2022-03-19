import React from "react";

const Container = (props) => {
  return <div className="max-w-[149rem] w-full mx-auto px-[2.3rem] md:px-[5rem]">{props.children}</div>;
};

export default Container;
