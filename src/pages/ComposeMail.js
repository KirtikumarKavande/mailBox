import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dashboard from "./Dashboard";
import { AiOutlineSend } from "react-icons/ai";
import useForm from "../hooks/useForm";
import { toast } from "react-hot-toast";
import { databaseUrl } from "../utilities/api/api";
import { useDispatch } from "react-redux";
import { messageAction } from "../store/completeMessegeSlice";


const ComposeMail = () => {
  const dispatch=useDispatch()

  const email= localStorage.getItem('email')

  const [value, setValue] = useState("");
  console.log(value);
  const { form, onChangeHandler, resetData } = useForm({
    email: "",
    subject: "",
  });
  const handleSendMail = (e) => {
    e.preventDefault();
    const obj = {
      senderEmail:email,
      receiverEmail: form.email,
      subject: form.subject,
      messageFromSender: value,
      read:false
    };

    const sendEmail = async () => {
      const res = await fetch(`${databaseUrl}/email.json`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        console.log('----------------------',obj)
        toast.success("Email sent successfully");
      } else {
        toast.error("something went wrong try again");
      }
      const data = res.json();
    };

    try {
      sendEmail();
    } catch (error) {
      toast.error(error.message);
    }

    resetData();
    setValue("");
  };
  return (
    <form onSubmit={handleSendMail}>
      <div className="space-y-7 ">
        <div className="relative group ">
          <input
            type="text"
            id="email"
            required
            name="email"
            value={form.email}
            onChange={onChangeHandler}
            className="w-[95vw]  md:w-[78vw] h-5 px-4 text-sm peer  border border-t-white  border-l-white border-r-white focus:border-b-gray-700 border-b-gray-300 outline-none"
          />
          <label
            for="username"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-1  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            TO
          </label>
        </div>
        <div className="relative group">
          <input
            type="text"
            value={form.subject}
            id="username"
            required
            name="subject"
            onChange={onChangeHandler}
            className="w-[95vw] md:w-[78vw] h-5 px-4 text-sm peer  border border-t-white border-l-white border-r-white focus:border-b-gray-700 border-b-gray-300 outline-none"
          />
          <label
            for="username"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            SUBJECT
          </label>
        </div>
        <div className="">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-[60vh] ml-3"
          />
        </div>
      </div>
      <div className="mt-12">
        <button
          type="submit"
          className="bg-[#0095F6]  flex space-x-2 items-center px-2 ml-2 text-white active:scale-95 transform transition  disabled:bg-opacity-50 select-none cursor-pointer disabled:scale-100 rounded text-xl font-semibold"
        >
          <span>
            <AiOutlineSend />
          </span>
          <span> Send</span>
        </button>
      </div>
    </form>
  );
};

export default ComposeMail;
