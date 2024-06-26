import React, { useState, useEffect } from 'react';

function UseEffectDemo() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('UseEffect Executed!!!');
        console.log(count);
    })

    return (
        <div>

            <p>You clicked {count} times</p>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

        </div>
    );
}

export default UseEffectDemo;
