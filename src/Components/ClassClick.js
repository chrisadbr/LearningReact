import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Second Button')
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click Here</button>
            </div>
        )
    }
}

export default ClassClick
