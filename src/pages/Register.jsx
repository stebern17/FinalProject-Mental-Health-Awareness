import React from "react";
import RegisterBlock from "../blocks/RegisterBlock";
import Arrow from "./../Icons/arrow.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container min-h-screen flex items-center justify-center">
      <Link to="/">
        <img
          src={Arrow}
          className="size-12 absolute top-2 left-0 rotate-180 hover:size-14"
        />
      </Link>
      <RegisterBlock />
    </div>
  );
}
