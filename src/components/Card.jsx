import React from "react";

export default function Card({ content }) {
  return (
    <div className="overflow-hidden flex rounded-lg bg-white shadow pr-4 pl-4">
      <div className="px-4 py-5 sm:p-6 text-justify">
        Welcome to Ballpark Housing! We help Real Estate Developers find lots
        and build faster so that we can all find affordable housing.
      </div>
    </div>
  );
}
