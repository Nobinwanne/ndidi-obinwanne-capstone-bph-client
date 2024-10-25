import React from "react";
import hanmburgerIcon from "../icons/menu.svg";
import ballparkhousingIcon from "../icons/Ballpark-favicon.webp";
import toggleIcon from "../icons/eclipse.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="max-w-2xl mx-auto w-full h-20 flex flex-row justify-between items-center text-white">
      <div className="flex items-center">
        <img className="p-4" alt="menu icon" src={hanmburgerIcon}></img>
        <img
          className="w-8"
          alt="ballpark housing icon"
          src={ballparkhousingIcon}
        ></img>
        <button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleThemeSwitch}
        >
          <img alt="toggle icon" src={toggleIcon}></img>
        </button>
        <NavLink to="/chat">
          <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Chat
          </button>
        </NavLink>
      </div>
      <div className="flex gap-8">
        <Menu as="div" className="relative flex text-left">
          <div className="flex gap-4">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Actions
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1"></div>
            <div className="py-1">
              <MenuItem>
                <p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                  Archive
                </p>
              </MenuItem>
              <MenuItem>
                <p
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Move
                </p>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                  Share
                </p>
              </MenuItem>
              <MenuItem>
                <p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                  Add to favorites
                </p>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <p className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                  Delete
                </p>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <button className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
