import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ques({ ques, quesNumber, back, next }) {
  const navigate = useNavigate();
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  return (
    <div className="w-full min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="absolute top-32 right-16 text-xl font-semibold text-black">
        {quesNumber}/5
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-2xl font-semibold text-center mx-6">
            {quesNumber}. {ques}
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 gap-8 text-xl">
          <button
            className={` rounded-full border-2 border-black w-8 h-8 ${
              color1 === "green" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              if (color2 === "green") {
                setColor2("");
              } else if (color3 === "green") {
                setColor3("");
              } else if (color4 === "green") {
                setColor4("");
              } else if (color5 === "green") {
                setColor5("");
              }
              setColor1("green");
            }}
          >
            1
          </button>
          <button
            className={` rounded-full border-2 border-black w-8 h-8 ${
              color2 === "green" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              if (color1 === "green") {
                setColor1("");
              } else if (color3 === "green") {
                setColor3("");
              } else if (color4 === "green") {
                setColor4("");
              } else if (color5 === "green") {
                setColor5("");
              }
              setColor2("green");
            }}
          >
            2
          </button>
          <button
            className={` rounded-full border-2 border-black w-8 h-8 ${
              color3 === "green" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              if (color1 === "green") {
                setColor1("");
              } else if (color2 === "green") {
                setColor2("");
              } else if (color4 === "green") {
                setColor4("");
              } else if (color5 === "green") {
                setColor5("");
              }
              setColor3("green");
            }}
          >
            3
          </button>
          <button
            className={` rounded-full border-2 border-black w-8 h-8 ${
              color4 === "green" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              if (color1 === "green") {
                setColor1("");
              } else if (color2 === "green") {
                setColor2("");
              } else if (color3 === "green") {
                setColor3("");
              } else if (color5 === "green") {
                setColor5("");
              }
              setColor4("green");
            }}
          >
            4
          </button>
          <button
            className={` rounded-full border-2 border-black w-8 h-8 ${
              color5 === "green" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              if (color1 === "green") {
                setColor1("");
              } else if (color2 === "green") {
                setColor2("");
              } else if (color4 === "green") {
                setColor4("");
              } else if (color3 === "green") {
                setColor3("");
              }
              setColor5("green");
            }}
          >
            5
          </button>
        </div>
        <div className="flex justify-around mt-10">
          <button
            onClick={() => {
              navigate(back);
            }}
            className="rounded-xl border-2 border-black px-3 py-2 bg-red-400"
          >
            Prev
          </button>
          <button
            onClick={() => {
              navigate(next);
            }}
            className="rounded-xl border-2 border-black px-3 py-2 bg-green-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ques;
