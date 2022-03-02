import React from "react";

const Container = (props) => {
  return <div className="max-w-[144rem] mx-auto">{props.children}</div>;
};

export default Container;