import React, { useRef } from "react";
import Profil from "../images/Jeannot.jpeg";

function Stories() {
    const containerRef = useRef(null);

    const scrollRight = () => {
        containerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
      };
    
      const scrollLeft = () => {
        containerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
      };

  return (
    <>
      <div className="flex overflow-x-hidden">
        <div className="flex" >
          <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
        </div>
        <div className="flex" ref={containerRef}>
          {/* Your img elements */}
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          <div className="border-4 border-indigo-500/100 w-[65px] h-[65px] rounded-full relative flex-1 m-1">
            <img
              src={Profil}
              alt="profil"
              title=""
              className="w-[51px] h-[51px] absolute left-[0.22rem] rigth-[0.25rem]  top-[0.2rem] rounded-full"
            />
          </div>
          {/* Rest of the img elements */}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded-md mr-2"
          onClick={scrollLeft}
        >
          Scroll Left
        </button>
        <button
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded-md"
          onClick={scrollRight}
        >
          Scroll Right
        </button>
      </div>
      <hr className="opacity-1" />
      
    </>
  );
}

export default Stories;
