import React from 'react'

function Demo() {

    // ..................... Promises ..................................//

    var promise = new Promise((resolve, reject) => {

        let name = 'Adesh'

        if (name === 'Adesh') {
            resolve("Promise resolved successfully");
        }
        else {
            reject(Error("Promise rejected"));
        }

    });

    promise.then( function (result) {
        console.log(result);             // "Promise resolved successfully"
    }, err => {
        console.log(err);               // Error: "Promise rejected"
    });

    return (
        <div>
            <p>Promises Demo</p>
        </div>
    )
}

export default Demo