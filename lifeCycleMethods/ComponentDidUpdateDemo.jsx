import React from 'react'

class LifeCycleMethods extends React.Component {

    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    componentDidUpdate() {
        console.log("In component Did Update", this.state.number);
    }

    incrementNumber = () => {
        this.setState({ number: this.state.number + 1 });
    }


    render() {
        return (
            <div>
                <h1>ComponentDidUpdate</h1>
                
                <p>Number is : {this.state.number}</p>

                <button type="button" onClick = {this.incrementNumber}>
                    Add
                </button>

            </div>
        )
    }
}
export default LifeCycleMethods
