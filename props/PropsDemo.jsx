import React from 'react';

function PropsDemo() {
    
    return (
        <>
            <p>Parent Component</p>
            <ChildComponent name="Adesh" lname="Kanthali" />
        </>
    );

}

function ChildComponent({ name, lname }) {
    return (
        <div>

            <p>
                Child Component :- {name}, {lname}
            </p>

        </div>
    );
}

export default PropsDemo;