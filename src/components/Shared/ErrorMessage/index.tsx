import React, { FC } from "react";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className=" text-red-500">{message}</p>;
};

export default ErrorMessage;
