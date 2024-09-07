import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <div className="w-full min-h-screen bg-blue-100 flex justify-center items-center">
          <div>
            <p className="text-center text-3xl mb-5 font-semibold">
              Enter your Beautiful Name :{" "}
            </p>
            <div className="flex w-full justify-center">
              <input
                type="text"
                className="w-[80%] rounded-lg text-lg outline-none border-2 focus:border-blue-600 duration-500 p-1"
              />
            </div>
            <div className="flex justify-center">
              <div className="mt-20 rounded-full w-7 h-7 flex justify-center items-center border-2 border-black">
                <GrLinkNext
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/question1");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
