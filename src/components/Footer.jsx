import React from "react";
import copyrightIcon from "../icons/copyright.svg";

function Footer() {
  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <img alt="copyright icon" src={copyrightIcon}></img>
      Ballpark Housing
    </div>
  );
}

export default Footer;
