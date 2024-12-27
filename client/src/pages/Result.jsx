import React, { useState } from "react";
import { assets } from "../assets/assets";
import {motion} from 'framer-motion'
const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading]= useState(false)
  const [input, setInput] = useState('')

  const onSubmitHandler = async(e) => {

  }

  return (
    <motion.form 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    
    onSubmit={onSubmitHandler} className="flex  flex-col min-h-[80vh] justify-center items-center ">
      <div className="">
        <div className="relative">
          <img className="max-w-sm rounded-none" src={image} alt="" />
          <span className={`absolute b-0 l-0 h-1 bg-pink-600 ${loading ? 'w-full transition-all duration-[10s]': 'w-0'}`} />
        </div>

        <p className={!loading ? 'hidden' : ''}>Loading.....</p>
      </div>
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500/20  text-sm p-0.5 mt-5 rounded-full">
          <input
            onChange={ e => setInput(e.target.value)}
            value={input}
            id="placeholder"
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-black px-10 sm:16 py-3 rounded-full text-white"
          >
            Generate
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p onClick={() => {setIsImageLoaded(false)}} className="bg-transparent border border-zinc-900 text-black  px-8 py-3 rounded-full cursor-pointer">
            Generate Another
          </p>
          <a
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            href={image}
            download
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
