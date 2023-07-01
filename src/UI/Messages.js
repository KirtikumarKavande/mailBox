import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";

const Inbox = (props) => {
  return (
    <div className="cursor-pointer">
      <div className="flex h-[2.5rem] justify-between border items-center border-gray-200 hover:shadow-md hover:border-r-gray-200 hover:border-l-gray-200  border-l-white border-r-white">
        <div className=" w-11/12 flex "
         onClick={() => {
         props.handleMail()
          }}
        >
          <div className="  font-medium flex items-center  md:font-semibold w-1/3 ">
            {!props?.mail?.read ? (
              <span>
                <BsCircleFill
                  size={7}
                  className="text-blue-500 inline-block  "
                />
              </span>
            ) : (
              <span className="ml-1"></span>
            )}

            <div className="overflow-hidden text-sm ml-3 ">
              kirtikumar@gmail.com
            </div>
          </div>
          <div className=" w-2/3 text-sm   ml-4">Testing draft</div>
        </div>
        <div className="inline-block w-1/12 ">
          <TiDeleteOutline size={25} className="inline-block text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
