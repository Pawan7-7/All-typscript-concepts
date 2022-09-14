import React from "react";
interface StatusProps {
  status: "loading" | "success" | "error";
}
export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading.....";
  } else if (status === "success") {
    message = "Data fetched sucessfully";
  } else if (status === "error") {
    message = "Error occured";
  }
  return <div>Status --- {message}</div>;
};
