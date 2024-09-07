import React from "react";
import Ques from "../component/Ques";
function Question3() {
  return (
    <div>
      <Ques
        ques={
          "How satisfied are you with the value for money of your purchase?"
        }
        quesNumber={"3"}
        back={"/question2"}
        next={"/question4"}
      />
    </div>
  );
}

export default Question3;
