import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    incrementCounter(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value:', this.state.count)
        // })
        // console.log(this.state.count)
        this.setState( prevState => ({
            count: prevState.count + 1
        }))
    }
    decrementCounter(){
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log('Decrease value:', this.state.count)
        })
    }
    incrementFive(){
        this.incrementCounter()
        this.incrementCounter()
    }
    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick = {() => this.decrementCounter()}>-</button>
                <button onClick = {() => this.incrementFive()}>+</button>
            </div>
        )
    }
}

export default Counter
