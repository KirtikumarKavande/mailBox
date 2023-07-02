import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from "../../src/utilities/animation/nomails.json";


const NoMails = () => {
  return (
    <div className=' w-screen h-screen  md:w-full md:h-[100vh] lg:w-full lg:h-full flex flex-col items-center justify-center '>
    <Lottie loop animationData={lottieJson} play className=" lg:w-full " />
    <div className="text-center font-bold text-3xl text-gray-400">Opps!!! NO MAILS FOUND</div>
    </div>
  )
}

export default NoMails