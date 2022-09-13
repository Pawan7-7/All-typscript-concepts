import React from "react";
type GreetProps = { name: string };
export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name} you have 69 unread messages</div>;
};
