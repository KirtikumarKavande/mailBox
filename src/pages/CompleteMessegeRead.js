import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CompleteMessegeRead = () => {
  const { id } = useParams();

  const sentMail = useSelector((state) => state.sentMessage.completeSentMesseage);


  const updatedMessage = sentMail.filter((item) => {
    return item.id === id;
  });

  return (
    <>
      {updatedMessage.map((item) => (
        <div className="w-full h-full flex flex-col pl-3 ">
          <div className="text-2xl font-semibold ">{item.subject}</div>
          <div className="text-sm mt-[1rem]">From: {item.email}</div>
          <div className=" min-h-screen bg-[#F6F4F4]  m-[1rem]">
            <div className="pt-[1rem] ml-[1rem]">{item.message}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompleteMessegeRead;
