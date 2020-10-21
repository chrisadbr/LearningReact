import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(){
        super()
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} greetings from ${childName}!`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler = { this.greetParent } />
            </div>
        )
    }
}

export default ParentComponent
