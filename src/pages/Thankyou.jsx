import React from "react";

function Thankyou() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <p className="pt-10 text-center text-2xl font-semibold">
        Thankyou for filling the form
      </p>
      <p className="text-black text-center p-10 text-lg font-medium">
        1) For storing of questions and answers : we can first reigster the user
        and then store the answers in the database.
        <br /> 2)we will use express , node.js , mongodb for storing the data.
        and if there is any image or file to be uploaded we can use cloudinary
        for that.
        <br /> 3) We will use Jwt Token and cookies for storing the user session
      </p>
      <div className="flex justify-center">
        <a
          href="https://ezz-money.vercel.app/"
          className="text-blue-500 font-semibold text-center text-2xl "
        >
          CheckOut my latest FullStack Project
        </a>
      </div>
    </div>
  );
}

export default Thankyou;
