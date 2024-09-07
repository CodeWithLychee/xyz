import React from "react";
import Ques from "../component/Ques";
function Question2() {
  return (
    <div>
      <Ques
        ques={"How fair are the prices compared to similar retailers?"}
        quesNumber={"2"}
        back={"/question1"}
        next={"/question3"}
      />
    </div>
  );
}

export default Question2;
