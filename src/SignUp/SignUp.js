import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../src/utilities/animation/signUpAnimation.json";
import useForm from "../hooks/useForm";
import { signup } from "../utilities/api/api";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../store/loadingSlice";
import loader from "../utilities/animation/spinner.json";

const SignUp = () => {
  const dispatch = useDispatch();
  const { form, onChangeHandler } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isLoading = useSelector((state) => state.loading.isLoading);

  const signupFormSubmitHandler = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Both password fields should match");
    } else {
      try {
        dispatch(loadingAction(true));
        const res = await fetch(
          `${signup}AIzaSyBSdX2S-hpu2VelxVurSEofcsXSBairYvk`,
          {
            method: "POST",
            body: JSON.stringify({
              email: form.email,
              password: form.password,
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        );
        const data = await res.json();
        dispatch(loadingAction(false));

        console.log(data);
        if (data.idToken) {
          toast.success("Signup Successful");
        } else {
          return new Error();
        }
      } catch {
        toast.error("Something went wrong Please try again");
      }
    }
  };

  console.log(form);
  return (
    <div className="grid grid-flow-col W-full h-full  bg-[#F6F8FC] ">
      <div className="col-span-2  hidden md:block  flex items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          className=" md:h-screen "
        />
      </div>
      <div className="col-span-10  h-screen items-center flex justify-center relative p-4">
        {isLoading && (
          <div className="z-999999999 absolute ">
            <Lottie loop animationData={loader} play className=" h-40  " />
          </div>
        )}

        <form
          className="flex flex-col items-center space-y-5  z-1  lg:w-3/4 "
          onSubmit={signupFormSubmitHandler}
        >
          <div className="z-30 absolute flex justify-center items-center"></div>

          <div className="my-5 text-5xl font-bold ">MAIL BOX</div>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-2 py-1 bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
            placeholder="Email"
            onChange={onChangeHandler}
          />
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-2 py-1 transition bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
            onChange={onChangeHandler}
          />
          <input
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-2 py-1 transition bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
            onChange={onChangeHandler}
          />
          <button
            type="submit"
            className="bg-[#0095F6] py-1 cursor-pointer text-white active:scale-95 transform transition w-full disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold"
            //   disabled={!isDisabled}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
