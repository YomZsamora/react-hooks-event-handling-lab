// Code Keypad Component Here
import React from "react";

function Keypad() {
   let passwordCheck = () => {
      console.log(`Entering password...`);
   }

   return (
      <React.Fragment>
         <input type="password" onChange={passwordCheck} />
      </React.Fragment>
   )
}

export default Keypad;
