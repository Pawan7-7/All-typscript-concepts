import React from "react";
type ButtonProps = { handleClick: () => void };
export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};
