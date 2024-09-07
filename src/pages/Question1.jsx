import React from "react";
import Ques from "../component/Ques";

function Question1() {
  return (
    <div>
      <Ques
        ques={"How satisfied are you with our products?"}
        quesNumber={"1"}
        back={"/"}
        next={"/question2"}
      />
    </div>
  );
}

export default Question1;
