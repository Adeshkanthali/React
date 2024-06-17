import React from 'react'

function ContextAPI() {
// provider
let value = 500;

return(
    <MyContext.Provider value={value}>

        <h1>Context API (Provider)</h1>
        <ChildComponent1/>

    </MyContext.Provider>
)

}

function ChildComponent1(){

const value = useContext(MyContext)

// consumner
return(
    <div>
        <h2>Use Context (Consumer)</h2>
        <p>Value is: {value}</p>
    </div>
)

}
export default ContextAPI