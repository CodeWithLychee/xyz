import React from "react";
import Ques from "../component/Ques";

function Question5() {
  return (
    <div>
      <Ques
        ques={"What could we do to improve our service? "}
        quesNumber={"5"}
        back={"/question4"}
        next={"/thankYou"}
      />
    </div>
  );
}

export default Question5;
