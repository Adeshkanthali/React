import React from 'react'

function CallBackFunction() {

    function add(a,b){
        return a+b;
    }

    function display(a,b,add){
        var result = add(a,b);
        console.log(result);
    }
    
    display(10,5,add);  

}

export default CallBackFunction