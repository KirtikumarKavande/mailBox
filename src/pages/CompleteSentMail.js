import React, { useEffect, useState } from "react";
import { databaseUrl } from "../utilities/api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/completeMessegeSlice";
import { BsCircleFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti/index";
import Lottie from "react-lottie-player";
import lottieJson from "../../src/utilities/animation/nomails.json";
import NoMails from "../UI/noMails";
import useHttp from "../hooks/useHttp";

const SentInboxMail = () => {

  const httpFunc = useHttp();

  const inboxMail = useSelector((state) => state.message.completeMesseageData);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sentMail, setSentMail] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://mailbox-d3daa-default-rtdb.firebaseio.com/email.json?orderBy="senderEmail"&equalTo=${JSON.stringify(
        localStorage.getItem("email")
      )}`
    );
    const data = await res.json();
    const updatedArray = [];

    for (let key in data) {
      updatedArray.push({
        id: key,
        email: data[key].receiverEmail,
        subject: data[key].subject,
        message: data[key].messageFromSender,
        read: data[key].read,
        receiverEmail: data[key].receiverEmail,
      });
    }
    console.log("sent email", updatedArray);
    setSentMail(updatedArray);
  };

  const handleMailClick = (mail) => {
    navigate(`/Root/message/${mail.id}`);
  };
  const deleteMail = (id) => {
    const updatedInbox = sentMail.filter((item) => {
      return item.id !== id;
    });
    setSentMail(updatedInbox);
    // fetch(`${databaseUrl}/email/${id}.json`, {
    //   method: "DELETE",
    // });

    const getHttpData = (data) => {
      console.log(data);
    };
    const obj = {
      method: "DELETE",
    };
    httpFunc(`${databaseUrl}/email/${id}.json`, obj, getHttpData);
  };

  console.log("inbox", inboxMail);

  if (sentMail.length === 0) {
    return (
      <NoMails/>
    );
  }

  return (
    <div className="cursor-pointer">
      {sentMail &&
        sentMail.map((mail) => (
          <div className="flex h-[2.5rem] justify-between border items-center border-gray-200 hover:shadow-md hover:border-r-gray-200 hover:border-l-gray-200  border-l-white border-r-white">
            <div
              key={mail.id}
              className=" w-11/12 flex "
              onClick={() => {
                handleMailClick(mail);
              }}
            >
              <div className="  font-medium flex items-center  md:font-semibold w-1/3 ">
                <div className="overflow-hidden text-sm ml-3 ">
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

export default SentInboxMail;
