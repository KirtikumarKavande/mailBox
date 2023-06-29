import React, { useEffect, useState } from "react";
import { databaseUrl } from "../utilities/api/api";

const Inbox = () => {
  const [inboxMail, setInboxMail] = useState("");
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
      });
    }
    setInboxMail(updatedArray);
  };
  return (
    <>
      {inboxMail &&
        inboxMail.map((mail) => (
          <div key={mail.id}>
            <div className="w-full flex pl-2 border border-gray-200 shadow-sm border-l-white border-r-white p-1 items-center  ">
              <div className="w-1/3 overflow-hidden lg:w-1/3 font-medium  md:font-semibold ">
                {mail.email}
              </div>
              <div className="w-2/3  lg:w-2/3 text-sm ml-3">{mail.subject}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Inbox;
