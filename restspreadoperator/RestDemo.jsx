
import React, { useState } from "react";

function RestDemo() {
    
    const check = (p1, p2, ...p3) => {    // Function Declare
        console.log(p1, p2, p3)
        return p3;
    }

    const result = check('A', 'B', 'C', 'D', 'E');       // Function Call

    return (
        <div>
            {result}  
        </div>
    )

}
export default RestDemo;