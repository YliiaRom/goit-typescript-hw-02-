import React, { FC } from "react";
import css from "./ErrorMessage.module.css";
export const ErrorMessage: React.FC = () => {
  return <p className={css.error}>Lost Connection, Please Reload the Page</p>;
};
