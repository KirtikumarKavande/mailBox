import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../src/utilities/animation/loginAnimation.json";
import useForm from "../hooks/useForm";
import loader from "../utilities/animation/spinner.json";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../store/loadingSlice";
import { signIn } from "../utilities/api/api";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
 const navigate= useNavigate()
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  const { form, onChangeHandler, resetData } = useForm({
    email: "",
    password: "",
  });
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loadingAction(true));
      const res = await fetch(
        `${signIn}AIzaSyBSdX2S-hpu2VelxVurSEofcsXSBairYvk`,
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
      console.log(data)
      localStorage.setItem('email',data.email);
      localStorage.setItem('token',data.idToken)
      dispatch(loadingAction(false));

      console.log(data);

      if (data.idToken) {
        toast.success("Login Successful");
      } else {
        toast.error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    navigate('/Root/inbox');
    resetData();
  };
  return (
    <div className="grid grid-flow-col W-full h-full  bg-[#F6F8FC] ">
      <div className="col-span-2  hidden md:block  flex items-center">
        <Lottie loop animationData={lottieJson} play className=" lg:w-full " />
      </div>
      <div className="col-span-10  h-screen items-center flex justify-center p-4 relative ">
        {isLoading && (
          <div className="z-999999999 absolute ">
            <Lottie loop animationData={loader} play className=" h-40  " />
          </div>
        )}
        <form
          className="flex flex-col items-center space-y-5 w-full  p-1 lg:w-3/4"
          onSubmit={handleLoginFormSubmit}
        >
          <div className="z-30 absolute flex justify-center items-center"></div>

          <div className="my-5 text-5xl font-bold ">MAIL BOX</div>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            className="w-full px-2 py-1 bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
            placeholder="Email"
            onChange={onChangeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            placeholder="Password"
            className="w-full px-2 py-1 transition bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-blue-400"
            onChange={onChangeHandler}
          />

          <button
            type="submit"
            className="bg-[#0095F6] py-1 cursor-pointer text-white active:scale-95 transform transition w-full disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold"
            //   disabled={!isDisabled}

          >
            SIGN IN
          </button>
          <Link to="/signup" className="text-sm font-medium text-blue-500">
            CREATE ACCOUNT ?
          </Link >
        </form>
      </div>
    </div>
  );
};

export default Login;
