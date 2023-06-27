import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../src/utilities/animation/loginAnimation.json";

const Login = () => {
  return (
    <div className="grid grid-flow-col W-full h-full  bg-[#F6F8FC] ">
      <div className="col-span-2  hidden md:block  flex items-center">
        <Lottie loop animationData={lottieJson} play className=" lg:w-full " />
      </div>
      <div className="col-span-10  h-screen items-center flex justify-center p-4">
        <form className="flex flex-col items-center space-y-5 relative z-1  lg:w-3/4">
          <div className="z-30 absolute flex justify-center items-center"></div>

          <div className="my-5 text-5xl font-bold ">MAIL BOX</div>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-2 py-1 bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-2 py-1 transition bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
          />
          <button
            type="submit"
            className="bg-[#0095F6] py-1 cursor-pointer text-white active:scale-95 transform transition w-full disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold"
            //   disabled={!isDisabled}
          >
            SIGN IN
          </button>
        <div className="text-sm font-medium text-blue-500">CREATE  ACCOUNT ?</div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
