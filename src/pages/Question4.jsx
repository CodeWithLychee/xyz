import React from "react";
import Ques from "../component/Ques";

function Question4() {
  return (
    <div>
      <Ques
        ques={
          "On a scale of 1-5 how would you recommend us to your friends and family?"
        }
        quesNumber={"4"}
        back={"/question3"}
        next={"/question5"}
      />
    </div>
  );
}

export default Question4;
