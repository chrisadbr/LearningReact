import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Christian Brown'
        }
        console.log('LifeCycleA: Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA: getDerivedStateFromProp')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA: componentDidMount')
    }
    render() {
        console.log('LifeCycleA: render method')
        return (
            
            <div>
                LifeCycleA
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
