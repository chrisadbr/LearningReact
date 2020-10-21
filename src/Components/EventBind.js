import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    // handleClick() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }
    handleClick = () =>{
       this.setState({
           message: 'Goodbye'
       })
    }
    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                {/* <button onClick = { this.handleClick.bind(this) }>Click</button> */}
                {/* <button onClick = {() => { this.handleClick()}}>Click</button> */}
                <button onClick = { this.handleClick }>Click</button>
            </div>
        )
    }
}

export default EventBind

