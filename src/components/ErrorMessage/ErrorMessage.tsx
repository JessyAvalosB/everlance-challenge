import React from "react";
import { ErrorMessageProps } from "./Types";

const ErrorMessage = ({ text }: ErrorMessageProps): JSX.Element => {
  return (
    <div className="flex justify-center mt-20">
      <span>{text}</span>
    </div>
  );
};

export default ErrorMessage;
