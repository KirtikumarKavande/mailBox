import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../store/toggleSlice";

const Header = () => {
  const dispatch=useDispatch()

  return (
    <div>
      <header className="fixed top-0 z-10 flex items-center justify-around w-full h-16 bg-[#F6F8FC] shadow-sm">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          onFocus={()=>{dispatch(toggleAction(true))}}
          onBlur={()=>{dispatch(toggleAction(false))}}

        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className=" md:hidden font-bold text-lg ml-3 justify-center md:text-3xl ">
          MAIL BOX
        </div>
        <div className="flex ">
        <div className="flex items-center px-2 space-x-4 bg-gray-100 border border-gray-400 rounded-lg group group-focus:border-gray-400 md:ml-[20rem] lg:ml-[26rem]">
          <label htmlFor="search" className="">
            <BsSearch className="text-lg text-gray-400" />
          </label>
          <input
            type="search"
            name="search"
            id="search"
            className=" w-[6rem]   md:w-full  py-1 transition bg-gray-100 rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm "
            placeholder="Search"
          />
        </div>
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 md:ml-[8rem] lg:ml-[30rem] ">
          <svg
            class="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
