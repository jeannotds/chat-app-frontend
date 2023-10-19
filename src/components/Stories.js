import { useRef } from "react";
import { data } from "../helper/data/story";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function Stories() {

    const containerRef = useRef(null);


    const scrollLeft = () => {
        containerRef.current.scrollLeft += 171;
    };
    
    const scrollRight = () => {
        containerRef.current.scrollLeft -= 171;
    };

    const handleDoubleClick = (event) => {
        event.preventDefault();
      };
    
  return (
    <>
      <div onClick={handleDoubleClick} className="flex overflow-x-hidden relative z-10 dasableImage">
        <div className="flex" >
          <div onClick={scrollLeft} className="text-[20px] absolute top-6 left-0 z-20 bg-[#ffffff] p-2 rounded-full hover:bg-[#dfd9d9] transition ease-in-out delay-150 cursor-pointer">
            <FaArrowLeft  />
          </div>
          <div className="relative flex items-center z-10" >
            <div id="slider" ref={containerRef} className="w-full justify-between h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth ">
               {
                data.map((item, index) => (
                    <img key={index}
                        src={item.image}
                        alt="profil"
                        title=""
                        className="rounded-[100%] border-solid border-2 border-indigo-600 w-[70px] h-[70px] inline-block  m-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    />
                ))
               }
            </div>
          </div>
          <div onClick={scrollRight} className="text-[20px] absolute top-6 right-0 z-20 bg-[#ffffff] p-2 rounded-full hover:bg-[#dfd9d9] transition ease-in-out delay-150 cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <hr className="opacity-1" />
      
    </>
  );
}

export default Stories;
