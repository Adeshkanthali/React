import React from 'react'

class ComponentDidMountDemo extends React.Component {

    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        console.log("helloooooooo", this.state.number);
    }

    incrementNumber = () => {
        this.setState({ number: this.state.number + 1 });
    }


    render() {
        return (
            <div>
                <h1>ComponentDidMount</h1>
                
                <p>Number is : {this.state.number}</p>

                <button type="button" onClick = {this.incrementNumber}>
                    Add
                </button>

            </div>
        )
    }
}
export default ComponentDidMountDemo
