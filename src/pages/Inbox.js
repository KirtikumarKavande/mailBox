import React, { useEffect, useState } from "react";
import { databaseUrl } from "../utilities/api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/completeMessegeSlice";
import { BsCircleFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti/index";
import NoMails from "../UI/noMails";

const Inbox = () => {
  const inboxMail = useSelector((state) => state.message.completeMesseageData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const id= setInterval(() => {
      console.log("made api call")
      fetchData();
    }, 2000);


    return ()=>clearInterval(id)
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
  const deleteMail = (id) => {
    const updatedInbox = inboxMail.filter((item) => {
      return item.id !== id;
    });

    dispatch(messageAction(updatedInbox));
    fetch(`${databaseUrl}/email/${id}.json`, {
      method: "DELETE",
    });
  };

  console.log("inbox", inboxMail);
  if (inboxMail.length === 0) {
    return <NoMails />;
  }

  return (
    <div className="cursor-pointer">
      {inboxMail &&
        inboxMail.map((mail) => (
          <div className="flex h-[2.5rem] justify-between border items-center border-gray-200 hover:shadow-md hover:border-r-gray-200 hover:border-l-gray-200  border-l-white border-r-white">
            <div
              key={mail.id}
              className=" w-11/12 flex "
              onClick={() => {
                handleMailClick(mail);
              }}
            >
              <div className="  font-medium flex items-center  md:font-semibold w-1/3 ">
                {!mail.read ? (
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
                  {" "}
                  {mail.email}
                </div>
              </div>
              <div className=" w-2/3 text-sm   ml-4">{mail.subject}</div>
            </div>
            <div
              className="inline-block w-1/12 "
              onClick={() => {
                deleteMail(mail.id);
              }}
            >
              <TiDeleteOutline
                size={25}
                className="inline-block text-gray-400"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Inbox;
