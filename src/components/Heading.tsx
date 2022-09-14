import React from "react";
interface headingProps {
  children: string;
}
export const Heading = ({ children }: headingProps) => {
  return <div>{children}</div>;
};
