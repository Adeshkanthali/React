import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);

    if (action.type === "Increment") 
    {
        return state + 1;
    }

    if (action.type === "Decrement") 
    {
        return state - 1;
    }

}
const UseReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <center>

                <p>{state}</p>

                <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>

                <br />
                
                <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>

            </center>
        </div>
    )
}
export default UseReducerDemo