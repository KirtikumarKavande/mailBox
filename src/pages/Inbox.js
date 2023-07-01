import React, { useEffect, useState } from "react";
import { databaseUrl } from "../utilities/api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/completeMessegeSlice";
import { BsCircleFill } from "react-icons/bs";

const Inbox = () => {
  const inboxMail = useSelector((state) => state.message.completeMesseageData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://mailbox-d3daa-default-rtdb.firebaseio.com/email.json?orderBy="receiverEmail"&equalTo=${JSON.stringify(
        localStorage.getItem("email")
      )}`
    );
    const data = await res.json();
    const updatedArray = [];

    for (let key in data) {
      updatedArray.push({
        id: key,
        email: data[key].senderEmail,
        subject: data[key].subject,
        message: data[key].messageFromSender,
        read: data[key].read,
        receiverEmail: data[key].receiverEmail,
      });
    }
    dispatch(messageAction(updatedArray));
  };

  const handleMailClick = (mail) => {
    navigate(`/Root/message/${mail.id}`);
    fetch(`${databaseUrl}/email/${mail.id}.json`, {
      method: "PUT",
      body: JSON.stringify({
        senderEmail: mail.email,
        receiverEmail: mail.receiverEmail,
        subject: mail.subject,
        messageFromSender: mail.message,
        id: mail.id,
        read: true,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  console.log("inbox", inboxMail);

  return (
    <div className="cursor-pointer">
      {inboxMail &&
        inboxMail.map((mail) => (
          <div
            key={mail.id}
            onClick={() => {
              handleMailClick(mail);
            }}
          >
            <div className="w-full flex pl-2 border border-gray-200 hover:shadow-md hover:border-r-gray-200 hover:border-l-gray-200  border-l-white border-r-white p-1 items-center  ">
              <div className="w-1/3 overflow-hidden lg:w-1/3 font-medium  md:font-semibold ">
                {!mail.read ? (
                  <span>
                    <BsCircleFill
                      size={7}
                      className="text-blue-500 inline-block mr-2"
                    />
                  </span>
                ) : (
                  <span className="ml-3"></span>
                )}

                <div className="inline-block"> {mail.email}</div>
              </div>
              <div className="w-2/3  lg:w-2/3 text-sm ml-3">{mail.subject}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Inbox;
